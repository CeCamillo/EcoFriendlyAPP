import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
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

  if (homeDisplay == "flex") {
    return (
      <View style={styles.body}>
        <Home
          display={homeDisplay}
          toResult={(travel) => {
            toResult();
            setTravel(travel);
          }}
        />
        <StatusBar style="auto" />
      </View>
    );
  } else if (resultDisplay == "flex") {
    return (
      <View style={styles.body}>
        <Result
          display={resultDisplay}
          travel={travel}
          toHome={() => toHome()}
        />
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.body}>
        <Text>Regcarregue o APP</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#E8FCCF",
    alignItems: "center",
    justifyContent: "center",
  },
});
