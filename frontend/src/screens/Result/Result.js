import { StyleSheet, View, Text, Image } from "react-native";
import { Map } from "../../components/Map";
import BackButton from "../../components/BackButton";
import SearchInput from "../../components/SearchInput";
import { Button } from "../../components/Button";

export const Result = ({ display, toHome }) => {
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
          />
        </View>
        <View style={styles.headerBottom}>
          <Button
            fontSize={10}
            fontColor={"#3E8914"}
            label={"16min"}
            width={100}
            height={45}
            background={"#E8FCCF"}
          />
          <Button
            fontSize={10}
            fontColor={"#3E8914"}
            label={"16min"}
            width={100}
            height={45}
            background={"#E8FCCF"}
          />
          <Button
            fontSize={10}
            fontColor={"#3E8914"}
            label={"16min"}
            width={100}
            height={45}
            background={"#E8FCCF"}
          />
          <Button
            fontSize={10}
            fontColor={"#3E8914"}
            label={"16min"}
            width={100}
            height={45}
            background={"#E8FCCF"}
          />
        </View>
      </View>
      <View style={{ width: "100%", flex: 1 }}>
        <Map />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.slideBar} />
        <View style={styles.info}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={require("../../../assets/img/bicicleta.png")}
              style={{ width: 100, height: 100 }}
            />
            <Text style={styles.textBold}>Bicicleta</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>
              <Text style={styles.textBold}>Distancia: </Text>
              text
            </Text>
            <Text>
              <Text style={styles.textBold}>Emissao: </Text>
              text
            </Text>
            <Text>
              <Text style={styles.textBold}>Tempo: </Text>
              text
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
    position: "absolute",
    width: "100%",
    height: 300,
    bottom: -30,
    backgroundColor: "#E8FCCF",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 9.22,
    elevation: 12,

    paddingVertical: 28,
    paddingHorizontal: 15,
  },
  slideBar: {
    width: "80%",
    height: 5,
    backgroundColor: "#134611",
    marginBottom: 30,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textBold: {
    fontWeight: "bold",
  },
});
