import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export const Button = ({
  label,
  background,
  fontColor,
  fontSize,
  action,
  width,
  height,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: background, width: width, height: height },
        ]}
        onPress={action}
      >
        <Text
          style={[styles.buttonLabel, { color: fontColor, fontSize: fontSize }]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 20,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#3E8914",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonLabel: {
    fontWeight: "bold",
  },
});
