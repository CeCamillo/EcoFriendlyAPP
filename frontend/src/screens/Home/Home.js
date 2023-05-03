import { StyleSheet, View, TextInput, Text } from "react-native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import axios from "axios";

import { Button } from "../../components/Button";

export const Home = ({ display, toResult }) => {
  const [adressInputText, setAdressInputText] = useState("");
  let inputText;
  let formatedText = {};
  let URL;
  let locationAPI = { latitude: "", longitude: "" };
  let phoneLocal = { latitude: null, longitude: null };
  const [expoLocation, setExpoLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  let travel = {
    transporte: [0],
    duration: null,
    distance: null,
  };

  useEffect(() => {
    (async () => {
      // Solicitar permissão para acessar a localização em primeiro plano
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permissão para acessar a localização foi negada");
        return;
      }

      // Obter a localização atual
      let location = await Location.getCurrentPositionAsync({});
      setExpoLocation(location);
    })();
  }, []);

  async function searchAdress(text) {
    // https://nominatim.openstreetmap.org/search?state=amazonas&street=avenida%20das%20flores%format=json
    if (text == null || text == "") {
      alert("Digite algo imbecil");
    } else {
      console.log(`Texto pré formatado: ${text}`);
      inputText = text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split(", ");
      for (let i = 0; i < inputText.length; i++) {
        inputText[i] = inputText[i].replace(/ /g, "%20");
      }
      switch (inputText.length) {
        case 1:
          if (inputText[0] == "brasil" || inputText[0] == "brazil") {
            console("Inseriu Brasil.");
            break;
          }
          formatedText = { state: inputText[0] };
          console.log("TEXTO FORMATADO:");
          console.log(formatedText);
          URL = `https://nominatim.openstreetmap.org/search?state=${formatedText.state}&format=json`;
          console.log(`URL da API: ${URL}`);
          break;
        case 2:
          formatedText = { city: inputText[0], state: inputText[1] };
          console.log("TEXTO FORMATADO:");
          console.log(formatedText);
          URL = `https://nominatim.openstreetmap.org/search?state=${formatedText.state}&city=${formatedText.city}&format=json`;
          console.log(`URL da API: ${URL}`);
          break;
        case 3:
          formatedText = {
            street: inputText[0],
            city: inputText[1],
            state: inputText[2],
          };
          console.log("TEXTO FORMATADO:");
          console.log(formatedText);
          URL = `https://nominatim.openstreetmap.org/search?state=${formatedText.state}&city=${formatedText.city}&street=${formatedText.street}&format=json`;
          console.log(`URL da API: ${URL}`);
          break;
        default:
          alert("Você não seguiu as regras de pesquisa propostas");
          console.log("Você não seguiu as regras de pesquisa propostas");
          return;
      }

      try {
        const locationResult = await axios.get(URL);
        console.log(locationResult.data);
        locationAPI.latitude = locationResult.data[0].lat;
        locationAPI.longitude = locationResult.data[0].lon;
        console.log(".");
        console.log(".");
        console.log(".");
      } catch (error) {
        console.log(error);
      }

      if (errorMsg) {
        phoneLocalString = errorMsg;
      } else if (expoLocation) {
        phoneLocal.latitude = JSON.stringify(expoLocation.coords.latitude);
        phoneLocal.longitude = JSON.stringify(expoLocation.coords.longitude);
      }

      try {
        // Mude o IP quando trocar de rede:
        const distanceResult = await axios.get(
          `http://192.168.15.24:8080/emissao?initLat=${phoneLocal.latitude}&initLon=${phoneLocal.longitude}&finLat=${locationAPI.latitude}&finLon=${locationAPI.longitude}`
        );
        console.log(distanceResult.data);
        travel.transporte = {
          carro:
            distanceResult.data.ModosTransporte[0].emissaoCarbono.toFixed(2),
          moto: distanceResult.data.ModosTransporte[1].emissaoCarbono.toFixed(
            2
          ),
          onibus:
            distanceResult.data.ModosTransporte[2].emissaoCarbono.toFixed(2),
          trem: distanceResult.data.ModosTransporte[3].emissaoCarbono.toFixed(
            2
          ),
        };
        travel.distance = distanceResult.data.RespostaOSRM.routes[0].distance;
        travel.duration = distanceResult.data.RespostaOSRM.routes[0].duration;
      } catch (error) {
        console.log(error);
      }
      toResult(travel);
    }
  }

  return (
    <View style={[styles.homeContainer, { display: display }]}>
      <Text style={styles.h1}>Busque o Endereço</Text>
      <View style={styles.header}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.adressInput}
            value={adressInputText}
            onChangeText={(text) => setAdressInputText(text)}
            placeholder="Rua, Cidade, Estado..."
          />
        </View>
        <Text style={styles.exemple}>
          Exemplo: Rua Patativa, São José dos Campos, São Paulo
        </Text>
      </View>
      <Button
        label="Buscar local"
        background="#3E8914"
        fontColor="#fff"
        fontSize={16}
        width={250}
        height={58}
        action={() => {
          if (adressInputText != "") {
            searchAdress(adressInputText);
          } else {
            alert("Busque um local primeiro!!");
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    width: "90%",
    height: 320,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  h1: {
    color: "#3E8914",
    fontWeight: "bold",
    fontSize: 26,
  },
  header: {
    height: 75,
    justifyContent: "flex-start",
    marginBottom: 30,
    marginTop: 25,
  },
  exemple: {
    fontSize: 10.5,
    bottom: 10,
    left: 25,
    fontStyle: "italic",
  },
  inputContainer: {
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    height: 50,
    minWidth: 320,
    width: "90%",
    borderColor: "#3E8914",
    borderWidth: 1,
  },
  adressInput: {
    flex: 1,
    height: "90%",
    margin: 10,
    paddingHorizontal: 10,
  },
});
