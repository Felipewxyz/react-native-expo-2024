import { router } from "expo-router";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.title}>Direto do Mapa</Text>
        <Text style={styles.text}>
          O aplicativo te oferece uma variedade de ideias de destinos incríveis
          para viajar, ajudando você a explorar lugares que talvez ainda não
          conheça. Além disso, ele sugere os melhores locais para se hospedar,
          seja em hotéis ou pousadas, sempre com base nas avaliações e
          recomendações de outros viajantes. Para garantir uma experiência
          completa, você também tem acesso a dicas e opiniões de pessoas que já
          visitaram esses destinos, ajudando a decidir quais atrações e pontos
          turísticos não podem faltar no seu roteiro. Dessa forma, o app
          facilita o planejamento da sua viagem, tornando-a mais prática, segura
          e cheia de boas surpresas.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.back();
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
    alignItems: "center",
  },
  textBox: {
    backgroundColor: "#4B0082",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
    fontFamily: "regular",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
    fontFamily: "regular",
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4B0082",
    width: "40%",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "regular",
  },
});
