import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useEffect, useState } from "react";
import BackButton from "../../components/BackButton";
import { Card } from "../../components/Card";

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
        <BackButton onPress={() => toHome()} />
      </View>
      <View style={styles.main}>
        <Card
          vehicle={"Carro"}
          distance={`${(travel.distance / 1000).toFixed(1)} km`}
          emission={`${((travel.distance / 1000) * 0.12).toFixed(2)} g/km`}
          time={durationFormated}
        />
        <Card vehicle={"Automovel"} />
        <Card vehicle={"Automovel"} />
        <Card vehicle={"Automovel"} />
      </View>

      {/* Conteúdo abaixo só salvando pra caso precise */}

      {/* <View style={styles.infoContainer}>
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
              {(travel.distance / 1000).toFixed(1)} km
            </Text>
            <Text>
              <Text style={styles.textBold}>Emissao (CO2): </Text>
              {((travel.distance / 1000) * 0.12).toFixed(2)} g/km
            </Text>
            <Text>
              <Text style={styles.textBold}>Tempo: </Text>
              {durationFormated}
            </Text>
          </View>
        </View>
      </View> */}
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
