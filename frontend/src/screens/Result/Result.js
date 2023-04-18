import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { Map } from "../../components/Map";
import BackButton from "../../components/BackButton";
import SearchInput from "../../components/SearchInput";
import { Button } from "../../components/Button";

export const Result = ({ display, toHome, travel }) => {
  const [infoDisplay, setInfoDisplay] = useState("flex");
  const [infoVisible, setInfoVisible] = useState(true);

  // Calculos pra formatar duração
  let horas = Math.floor(travel.duration / 3600);
  let minutos = Math.floor((travel.duration % 3600) / 60);

  let durationFormated = horas.toString() + "h" + minutos.toString() + "min";

  function toggleInfo() {
    // alert(travel.distance + "" + travel.duration);
    if (infoVisible === true) {
      setInfoDisplay("none");
      setInfoVisible(false);
    } else if (infoVisible === false) {
      setInfoDisplay("flex");
      setInfoVisible(true);
    }
  }

  return (
    <View style={[styles.resultContainer, { display: display }]}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTop}>
          <BackButton onPress={() => toHome()} />
          <SearchInput
            placeholder={"Atualizar Endereço..."}
            onSearch={(txt) => {
              console.log(txt);
            }}
            width={"80%"}
            button={true}
          />
        </View>
        {/* <View style={styles.headerBottom}>
          <Button
            fontSize={10}
            fontColor={"#3E8914"}
            label={"inativo"}
            width={100}
            height={45}
            background={"#E8FCCF"}
          />
          <Button
            fontSize={10}
            fontColor={"#3E8914"}
            label={"inativo"}
            width={100}
            height={45}
            background={"#E8FCCF"}
          />
          <Button
            fontSize={10}
            fontColor={"#3E8914"}
            label={"inativo"}
            width={100}
            height={45}
            background={"#E8FCCF"}
          />
          <Button
            fontSize={10}
            fontColor={"#3E8914"}
            label={"inativo"}
            width={100}
            height={45}
            background={"#E8FCCF"}
          />
        </View> */}
      </View>
      <View style={{ width: "100%", flex: 1 }}>
        <Map />
      </View>
      <View style={styles.infoContainer}>
        <Pressable
          onPress={() => {
            toggleInfo();
          }}
          style={styles.slideBar}
        >
          <View style={styles.slideBarInside} />
        </Pressable>
        <View style={[styles.info, { display: infoDisplay }]}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={require("../../../assets/img/bicicleta.png")}
              style={{ width: 100, height: 100 }}
            />
            <Text style={styles.textBold}>Carro</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>
              <Text style={styles.textBold}>Distancia: </Text>
              {(travel.distance / 100).toFixed(1)} km
            </Text>
            <Text>
              <Text style={styles.textBold}>Emissao: </Text>
              {((travel.distance / 100) * 0.12).toFixed(2)} CO2/km
            </Text>
            <Text>
              <Text style={styles.textBold}>Tempo: </Text>
              {durationFormated}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    width: "100%",
    height: "93.5%",
  },
  headerContainer: {
    width: "100%",
    height: 125,
  },
  headerTop: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  headerBottom: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  infoContainer: {
    borderWidth: 1,
    position: "absolute",
    width: "100%",
    bottom: -30,
    backgroundColor: "#E8FCCF",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  slideBar: {
    width: "80%",
    height: 20,
    marginBottom: 30,
  },
  slideBarInside: {
    width: "100%",
    height: 5,
    backgroundColor: "#134611",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
    borderRadius: 20,
  },
  info: {
    flex: 1,
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textBold: {
    fontWeight: "bold",
  },
});
