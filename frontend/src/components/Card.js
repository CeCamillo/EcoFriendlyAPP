import { StyleSheet, View, Text } from "react-native";

export const Card = ({ vehicle, distance, emission, time }) => {
  return (
    <View style={styles.card}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{vehicle}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>
          <Text style={styles.textBold}>Distância: </Text>
          {distance}
        </Text>
        <Text>
          <Text style={styles.textBold}>Emissão: </Text>
          {emission}
        </Text>
        <Text>
          <Text style={styles.textBold}>Tempo: </Text>
          {time}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",

    marginBottom: 15,
    width: "48%",
    height: 150,
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#134611",
  },
  textBold: {
    fontWeight: "500",
  },
});
