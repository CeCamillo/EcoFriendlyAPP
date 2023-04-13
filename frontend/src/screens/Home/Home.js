import { StyleSheet, View } from "react-native";
import { Button } from "../../components/Button";
import { Map } from "../../components/Map";
import SearchInput from "../../components/SearchInput";
import axios from "axios";

export const Home = ({ display, toResult }) => {
  let inputText;
  let formatedText = {};
  let URL;

  function searchAdress(text) {
    // https://nominatim.openstreetmap.org/search?state=amazonas&street=avenida%20das%20flores%format=json
    console.log(text);
    inputText = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split(", ");
    for (let i = 0; i < inputText.length; i++) {
      inputText[i] = inputText[i].replace(" ", "%20");
    }
    switch (inputText.length) {
      case 1:
        if (inputText[0] == "brasil" || inputText[0] == "brazil") {
          console("Inseriu Brasil.");
          break;
        }
        formatedText = { state: inputText[0] };
        console.log(formatedText);
        URL = `https://nominatim.openstreetmap.org/search?state=${formatedText.state}&format=json`;
        console.log(URL);
        break;
      case 2:
        formatedText = { city: inputText[0], state: inputText[1] };
        console.log(formatedText);
        URL = `https://nominatim.openstreetmap.org/search?state=${formatedText.state}&city=${formatedText.city}&format=json`;
        console.log(URL);
        break;
      case 3:
        formatedText = {
          street: inputText[0],
          city: inputText[1],
          state: inputText[2],
        };
        console.log(formatedText);
        URL = `https://nominatim.openstreetmap.org/search?state=${formatedText.state}&city=${formatedText.city}&street=${formatedText.street}&format=json`;
        console.log(URL);
        break;
      default:
        console.log("Algo deu errado antes do SwitchCase");
    }
    // const getApi = async () => {
    //   try {
    //     const result = await axios.get(
    //       "http://192.168.15.24:8080/emissao?distancia=5&transporte=Carro"
    //     );
    //     console.log(result.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
  }

  return (
    <View style={[styles.homeContainer, { display: display }]}>
      <SearchInput
        placeholder={"Buscar Endereço..."}
        onSearch={(txt) => {
          searchAdress(txt);
        }}
        width={"90%"}
      />
      <View style={{ width: 390, height: 520 }}>
        <Map borderRadius={true} />
      </View>
      <Button
        label="Buscar local"
        background="#3E8914"
        fontColor="#fff"
        fontSize={16}
        width={320}
        height={68}
        action={() => toResult()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    width: "100%",
    height: "93.5%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
