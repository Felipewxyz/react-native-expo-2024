import { router } from "expo-router"; 
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.text}>
          O aplicativo te mostra ideias de lugares para viajar, melhores lugares
          para se hospedar e também tem indicações de outras pessoas sobre onde
          você deve ir.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.replace("/");
          }}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    justifyContent: "space-between",
  },
  textBox: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4B0082",
    width: "30%",
    borderRadius: 15,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
});