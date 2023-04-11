import { StyleSheet, View } from "react-native";
import { Button } from "../../components/Button";
import { Map } from "../../components/Map";
import SearchInput from "../../components/SearchInput";

export const Home = ({ display, toResult }) => {
  return (
    <View style={[styles.homeContainer, { display: display }]}>
      <SearchInput
        placeholder={"Buscar Endereço..."}
        onSearch={(txt) => {
          console.log(txt);
        }}
        width={"90%"}
      />
      <View style={{ width: 390, height: 520 }}>
        <Map borderRadius={true} />
      </View>
      <Button
        label="Buscar local"
        background="#3E8914"
        fontColor="#fff"
        fontSize={16}
        width={320}
        height={68}
        action={() => toResult()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    width: "100%",
    height: "93.5%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
