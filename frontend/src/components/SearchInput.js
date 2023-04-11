import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const SearchInput = ({ placeholder, onSearch, width }) => {
  const [text, setText] = useState("");

  return (
    <View style={[styles.inputContainer, { width: width }]}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder={placeholder}
      />
      <TouchableOpacity style={styles.button} onPress={() => onSearch(text)}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    height: 50,
    minWidth: 150,
    borderColor: "#3E8914",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    height: "90%",
    margin: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#3E8914",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    height: "100%",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SearchInput;
