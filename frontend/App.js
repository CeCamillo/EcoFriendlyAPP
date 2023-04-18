import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Home } from "./src/screens/Home/Home";
import { Result } from "./src/screens/Result/Result";
import { useState, useEffect } from "react";

import axios from "axios";

export default function App() {
  const [homeDisplay, setHomeDisplay] = useState("flex");
  const [resultDisplay, setResultDisplay] = useState("none");
  const [travel, setTravel] = useState("None");

  function toResult() {
    setHomeDisplay("none");
    setResultDisplay("flex");
  }

  function toHome() {
    setHomeDisplay("flex");
    setResultDisplay("none");
  }

  // Função de acesso à API
  const getApi = async () => {
    try {
      const result = await axios.get(
        "http://192.168.15.24:8080/emissao?distancia=5&transporte=Carro"
      );
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getApi();
  // }, []);

  return (
    <View style={styles.body}>
      <Home
        display={homeDisplay}
        toResult={(travel) => {
          toResult();
          setTravel(travel);
        }}
      />
      <Result display={resultDisplay} travel={travel} toHome={() => toHome()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#E8FCCF",
    alignItems: "center",
    justifyContent: "center",
  },
});
