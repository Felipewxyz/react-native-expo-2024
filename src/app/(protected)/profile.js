import { StyleSheet, Text, View } from "react-native";

export default function List() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Text style={styles.text}>Histórico de Viagens</Text>
      <View style={styles.view}>
        <Text style={styles.text2}>Destino X</Text>
        <Text style={styles.text2}>Destino Y</Text>
        <Text style={styles.text2}>Destino Z</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "#4B0082",
    fontSize: 25,
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 25,
  },
  text2: {
    fontSize: 15,
    textAlign: "left",
    color: "#000000",
    padding: 10,
  },
  view: {
    width: "90%",
    height: "25%",
    //backgroundColor: "#E6E6FA",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4B0082",
    margin: 20,
    paddingVertical: 1,
  },
});
