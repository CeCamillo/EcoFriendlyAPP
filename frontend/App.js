import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Home } from "./src/screens/Home/Home";
import { Result } from "./src/screens/Result/Result";
import { useState } from "react";

export default function App() {
  const [homeDisplay, setHomeDisplay] = useState("flex");
  const [resultDisplay, setResultDisplay] = useState("none");

  function toResult() {
    setHomeDisplay("none");
    setResultDisplay("flex");
  }

  function toHome() {
    setHomeDisplay("flex");
    setResultDisplay("none");
  }

  return (
    <View style={styles.body}>
      <Home display={homeDisplay} toResult={() => toResult()} />
      <Result display={resultDisplay} toHome={() => toHome()} />
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
