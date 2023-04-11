import { StyleSheet, View, Text } from "react-native";

export const Map = ({ borderRadius }) => {
  if (borderRadius) {
    return (
      <View style={[styles.mapContainer, { borderRadius: 20 }]}>
        <Text>Map</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.mapContainer}>
        <Text>Map</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderColor: "#3E8914",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
