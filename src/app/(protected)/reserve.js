import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Dados fictícios de hotéis
const hotelsData = {
  "São Paulo": {
    Econômico: [
      {
        nome: "Ibis Budget - Paulista",
        telefone: "(11) 3123-7755",
        endereco:
          "R. da Consolação, 2303 - Consolação, São Paulo - SP, 01301-100",
        avaliacao: 7.5,
        imagem: require("../../assets/images/ibisbudget.jpg"),
      },
    ],
    Mediano: [
      {
        nome: "Ramada Encore São Paulo Tiradentes",
        telefone: "(11) 4750-0100",
        endereco:
          "Av. Tiradentes, 826 - Centro Histórico de São Paulo, São Paulo - SP, 01102-000",
        avaliacao: 8.5,
        imagem: require("../../assets/images/ramada.jpg"),
      },
    ],
    Luxuoso: [
      {
        nome: "Hotel Unique",
        telefone: "(11) 3055-4700",
        endereco:
          "Av. Brigadeiro Luís Antônio, 4700 - Jardim Paulista, São Paulo - SP, 01402-002",
        avaliacao: 9.4,
        imagem: require("../../assets/images/unique.jpg"),
      },
    ],
  },
  Campinas: {
    Econômico: [
      {
        nome: "Ibis Campinas",
        telefone: "(19) 3731-2300",
        endereco: "Av. Aquidabã, 440 - Centro, Campinas - SP, 13026-510",
        avaliacao: 8.0,
        imagem: require("../../assets/images/ibiscampinas.jpg"),
      },
    ],
    Mediano: [
      {
        nome: "Meliá Campinas",
        telefone: "(19) 3753-8000",
        endereco: "R. Severo Penteado, 140 - Cambuí, Campinas - SP, 13025-050",
        avaliacao: 8.7,
        imagem: require("../../assets/images/melia.jpeg"),
      },
    ],
    Luxuoso: [
      {
        nome: "Royal Palm Plaza Resort",
        telefone: "(19) 2117-8000",
        endereco:
          "Av. Royal Palm Plaza, 277 G - Jardim Nova California, Campinas - SP, 13051-092",
        avaliacao: 9.0,
        imagem: require("../../assets/images/plaza.jpg"),
      },
    ],
  },
};

export default function Reserve() {
  return (
    <ScrollView style={styles.container}>
      {Object.keys(hotelsData).map((city) => (
        <View key={city} style={styles.citySection}>
          <Text style={styles.cityTitle}>{city}</Text>

          {Object.keys(hotelsData[city]).map((categoria) => (
            <View key={categoria} style={styles.categorySection}>
              <Text style={styles.categoryTitle}>{categoria}</Text>

              {hotelsData[city][categoria].map((hotel, index) => (
                <View key={index} style={styles.hotelCard}>
                  <Image source={hotel.imagem} style={styles.hotelImage} />
                  <View style={styles.hotelInfo}>
                    <Text style={styles.hotelName}>{hotel.nome}</Text>
                    <Text style={styles.hotelContact}>
                      <Text style={styles.label}>Telefone: </Text>
                      {hotel.telefone}
                    </Text>
                    <Text style={styles.hotelAddress}>
                      <Text style={styles.label}>Endereço: </Text>
                      {hotel.endereco}
                    </Text>
                    <View style={styles.starContainer}>
                      {renderStars(hotel.avaliacao)}
                      <Text style={styles.ratingText}>{hotel.avaliacao}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

// Função para renderizar as estrelas com base na avaliação
const renderStars = (avaliacao) => {
  const filledStars = Math.floor(avaliacao);
  const hasHalfStar = avaliacao % 1 !== 0;

  return (
    <View style={{ flexDirection: "row" }}>
      {Array.from({ length: filledStars }).map((_, i) => (
        <Ionicons key={i} name="star-sharp" size={16} color="gold" />
      ))}
      {hasHalfStar && (
        <Ionicons name="star-half-outline" size={16} color="gold" />
      )}
      {Array.from({ length: 1 - filledStars - (hasHalfStar ? 1 : 0) }).map(
        (_, i) => (
          <Ionicons key={i} name="star-outline" size={16} color="gold" />
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  citySection: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  cityTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4B0082",
  },
  categorySection: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#9370DB",
  },
  hotelCard: {
    marginBottom: 20,
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 8,
    elevation: 3,
  },
  hotelImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  hotelInfo: {
    flex: 1,
    justifyContent: "center",
  },
  hotelName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4B0082",
    marginBottom: 5,
  },
  hotelContact: {
    fontSize: 14,
    color: "#696969",
    marginVertical: 5,
  },
  hotelAddress: {
    fontSize: 14,
    color: "#696969",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    color: "#4B0082",
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 5,
    color: "#696969",
  },
});
