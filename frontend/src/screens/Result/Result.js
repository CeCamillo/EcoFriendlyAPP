import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useState } from "react";
import BackButton from "../../components/BackButton";
import { Card } from "../../components/Card";

export const Result = ({ display, toHome, travel }) => {
  // const [emissao, setEmissao] = useState(0); ARRUMAR
  // setTimeout(() => setEmissao(travel.transporte[0]), 2000);

  // Calculos pra formatar duração
  let horas = Math.floor(travel.duration / 3600);
  let minutos = Math.floor((travel.duration % 3600) / 60);
  let durationFormated = horas.toString() + "h" + minutos.toString() + "min";

  return (
    <View style={[styles.resultContainer, { display: display }]}>
      <View style={styles.headerContainer}>
        <BackButton onPress={() => toHome()} />
      </View>
      <View style={styles.main}>
        <Card
          vehicle={"Carro"}
          distance={`${(travel.distance / 1000).toFixed(1)} km`}
          emission={`${travel.transporte && travel.transporte.carro} g/km`}
          time={durationFormated}
        />
        <Card
          vehicle={"Moto"}
          distance={`${(travel.distance / 1000).toFixed(1)} km`}
          emission={`${travel.transporte && travel.transporte.moto} g/km`}
          time={durationFormated}
        />
        <Card
          vehicle={"Onibus"}
          distance={`${(travel.distance / 1000).toFixed(1)} km`}
          emission={`${travel.transporte && travel.transporte.onibus} g/km`}
          time={durationFormated}
        />
        <Card
          vehicle={"Trem"}
          distance={`${(travel.distance / 1000).toFixed(1)} km`}
          emission={`${travel.transporte && travel.transporte.trem} g/km`}
          time={durationFormated}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    width: "100%",
    height: "93.5%",
    alignItems: "center",
  },
  headerContainer: {
    justifyContent: "flex-end",
    width: "100%",
    height: 80,
    position: "absolute",
    top: -30,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  main: {
    marginTop: 70,
    width: "94%",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
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
