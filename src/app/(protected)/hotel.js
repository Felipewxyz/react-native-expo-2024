import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
  "Campinas": {
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
  "Santos": {
    Econômico: [
      {
        nome: "Ibis Santos Gonzaga",
        telefone: "(13) 2127-1660",
        endereco:
          "Av. Vicente de Carvalho, 50 - Boqueirão, Santos - SP, 11045-500, Brasil",
        avaliacao: 8.2,
        imagem: require("../../assets/images/santos.jpg"),
      },
    ],
    Mediano: [
      {
        nome: "Parque Balneário Hotel",
        telefone: "(13) 799-9925",
        endereco:
          "Av. Ana Costa, 555 - Gonzaga, Santos - SP, 11060-003, Brasil",
        avaliacao: 8.8,
        imagem: require("../../assets/images/balneario.jpg"),
      },
    ],
    Luxuoso: [
      {
        nome: "Sheraton Santos Hotel",
        telefone: "(13) 3278-1400",
        endereco:
          " Al. Armênio Mendes, 70 - Aparecida, Santos - SP, 11035-260, Brasil",
        avaliacao: 9.1,
        imagem: require("../../assets/images/sheraton.jpg"),
      },
    ],
  },
  "São José dos Campos": {
    Econômico: [
      {
        nome: "Ibis São José dos Campos Dutra",
        telefone: "(12) 2139-5950",
        endereco:
          " Av. Cidade Jardim, 101 - Jardim Satélite, São José dos Campos - SP, 12231-675, Brasil",
        avaliacao: 7.9,
        imagem: require("../../assets/images/ibissjc.jpg"),
      },
    ],
    Mediano: [
      {
        nome: "Novotel São José dos Campos",
        telefone: "(12) 4009-7800",
        endereco:
          "Av. Dr. Nélson d'Ávila, 2200 - Vila das Acacias, São José dos Campos - SP, 12245-031, Brasil",
        avaliacao: 8.5,
        imagem: require("../../assets/images/novotel.jpg"),
      },
    ],
    Luxuoso: [
      {
        nome: "Golden Tulip São José dos Campos",
        telefone: "(12) 3131-4100",
        endereco:
          "Av. São João, 2200 - Jardim das Colinas, São José dos Campos - SP, 12242-000, Brasil",
        avaliacao: 9.0,
        imagem: require("../../assets/images/goldensjc.jpg"),
      },
    ],
  },
  "Ribeirão Preto": {
    Econômico: [
      {
        nome: "Ibis Ribeirao Preto Shopping",
        telefone: "(16) 2101-2950",
        endereco:
          " Av. Braz Olaia Acosta, 691 - Torre A - Jardim California, Ribeirão Preto - SP, 14026-040, Brasil",
        avaliacao: 8.1,
        imagem: require("../../assets/images/ibisrp.jpg"),
      },
    ],
    Mediano: [
      {
        nome: "Stream Palace Hotel",
        telefone: "(16) 3977-3939",
        endereco:
          "R. Gen. Osório, 850 - Centro, Ribeirão Preto - SP, 14010-000, Brasil",
        avaliacao: 8.7,
        imagem: require("../../assets/images/palace.jpg"),
      },
    ],
    Luxuoso: [
      {
        nome: "Golden Tulip São José dos Campos",
        telefone: "(16) 3516-6000",
        endereco:
          "Av. Maurílio Biagi, 1577 - Ribeirânia, Ribeirão Preto - SP, 14096-075, Brasil",
        avaliacao: 9.2,
        imagem: require("../../assets/images/mont.jpg"),
      },
    ],
  },
  "São José do Rio Preto": {
    Econômico: [
      {
        nome: "ibis budget São José do Rio Preto",
        telefone: "(17) 3600-1500",
        endereco:
          "Av. Marginal Comendador Vicente Filizola, 5860 - Jardim Alto Rio Preto, São José do Rio Preto - SP, 15020-350, Brasil",
        avaliacao: 8.1,
        imagem: require("../../assets/images/ibissrp.jpg"),
      },
    ],
    Mediano: [
      {
        nome: "Hotel Nacional Inn São José do Rio Preto",
        telefone: "(17) 2136-7400",
        endereco:
          "R. Prof. Carlos Ibanez, 35 - Vila Diniz, São José do Rio Preto - SP, 15070-655, Brasil",
        avaliacao: 8.6,
        imagem: require("../../assets/images/nacional.jpg"),
      },
    ],
    Luxuoso: [
      {
        nome: "Hyatt Place São José do Rio Preto",
        telefone: "(17) 3228-1234",
        endereco:
          "Avenida Juscelino Kubitschek De Oliveira, 5000 - C - Bairro Iguatemi, São José do Rio Preto - SP, 15093-340, Brasil",
        avaliacao: 9.0,
        imagem: require("../../assets/images/hyatt.jpg"),
      },
    ],
  },
  "Sorocaba": {
    Econômico: [
      {
        nome: "Ibis Sorocaba",
        telefone: "(15) 2101-6300",
        endereco:
          "Rua Sra Maria Aparecida Pessoti, Milego 290, Sorocaba - SP, 18048-140, Brasil",
        avaliacao: 8.2,
        imagem: require("../../assets/images/ibisorocaba.jpg"),
      },
    ],
    Mediano: [
      {
        nome: "Dan Inn Sorocaba",
        telefone: "(15) 2143-0283",
        endereco:
          " Av. Dr. Afonso Vergueiro, 1850 - Vila Casanova, Sorocaba - SP, 18040-000, Brasil",
        avaliacao: 8.5,
        imagem: require("../../assets/images/dan.jpg"),
      },
    ],
    Luxuoso: [
      {
        nome: "Novotel Sorocaba",
        telefone: "(15) 3500-1850",
        endereco:
          "Avenida Professora Izoraida Marques Peres, 770 - Parque Campolim, Sorocaba - SP, 18048-110, Brasil",
        avaliacao: 9.0,
        imagem: require("../../assets/images/novotels.jpg"),
      },
    ],
  },
  "Presidente Prudente": {
    Econômico: [
      {
        nome: "Muchiutt Park Hotel",
        telefone: "(18) 99782-2375",
        endereco:
          "Av. Cel. José Soares Marcondes, 3187 - Jardim Bongiovani, Pres. Prudente - SP, 19050-230, Brasil",
        avaliacao: 8.0,
        imagem: require("../../assets/images/hprudente.jpg"),
      },
    ],
    Mediano: [
      {
        nome: "Hotel Rota do Pantanal",
        telefone: "(18) 2101-4500",
        endereco:
          "Av. Ver. Aurelino Coutinho, 2063 - Jardim Alto da Boa Vista, Pres. Prudente - SP, 19053-360, Brasil",
        avaliacao: 8.6,
        imagem: require("../../assets/images/pantanal.jpg"),
      },
    ],
    Luxuoso: [
      {
        nome: "Aruá Hotel",
        telefone: "(18) 2101-4666",
        endereco:
          "Av. Cel. José Soares Marcondes, 1111 - Centro, Pres. Prudente - SP, 19010-080, Brasil",
        avaliacao: 8.8,
        imagem: require("../../assets/images/aruah.jpg"),
      },
    ],
  },

  "Bauru": {
    Econômico: [
      {
        nome: "Ibis Bauru",
        telefone: "(14) 17011-030",
        endereco:
          " R. Antônio dos Reis, 50 - Quadra 3 - Vila Brunhari, Bauru - SP",
        avaliacao: 8.0,
        imagem: require("../../assets/images/ibisbauru.webp"),
      },
    ],
    Mediano: [
      {
        nome: "Blue Tree Towers Bauru",
        telefone: "(14) 3235-8700",
        endereco:
          "R. Júlio de Mesquita Filho, 10-36 - Jardim Panorama, Bauru - SP",
        avaliacao: 8.7,
        imagem: require("../../assets/images/baurutower.jpg"),
      },
    ],
    Luxuoso: [
      {
        nome: "Vitória Régia Hotel",
        telefone: "(14) 3235-8955",
        endereco:
          "Av. Nações Unidas, 21 81 - Jardim Panorama, Bauru - SP",
        avaliacao: 9.0,
        imagem: require("../../assets/images/vrhotel.webp"),
      },
    ],
  },

  "Araçatuba": {
    Econômico: [
      {
        nome: "Ibis Araçatuba",
        telefone: "(18) 2103-5300",
        endereco:
          "Av. Brasília, 2500 - Jardim Nova Yorque, Araçatuba - SP",
        avaliacao: 8.1,
        imagem: require("../../assets/images/ibisaracatuba.jpg"),
      },
    ],
    Mediano: [
      {
        nome: "Pekin Palace Hotel",
        telefone: "(18) 98129-0734",
        endereco:
          "Av. Brasília, 1910 - Jardim Nova Yorque, Araçatuba - SP",
        avaliacao: 8.5,
        imagem: require("../../assets/images/pekinhotel.jpg"),
      },
    ],
    Luxuoso: [
      {
        nome: "Araçatuba Plaza Hotel",
        telefone: "(18) 3607-6700",
        endereco:
          "R. Gen. Glicério, 233 - Centro, Araçatuba - SP",
        avaliacao: 8.9,
        imagem: require("../../assets/images/aracatubahotel.jpg"),
      },
    ],
  },

  "Piracicaba": {
    Econômico: [
      {
        nome: "Ibis Budget Piracicaba",
        telefone: "(19) 99982-0331",
        endereco:
          "Av. Armando Dedini, 155 - Vila Rezende, Piracicaba - SP",
        avaliacao: 8.0,
        imagem: require("../../assets/images/ibispiracicaba.jpg"),
      },
    ],
    Mediano: [
      {
        nome: "Antonio's Palace Hotel",
        telefone: "(19) 3417-6000",
        endereco:
          "Av. Independência, 2805 - Cidade Alta, Piracicaba - SP",
        avaliacao: 8.5,
        imagem: require("../../assets/images/antoniohotel.jpg"),
      },
    ],
    Luxuoso: [
      {
        nome: "Beira Rio Palace Hotel",
        telefone: "(19) 3401-1000",
        endereco:
          "Rua Luiz de Queiroz, 51 - Centro, Piracicaba - SP",
        avaliacao: 9.0,
        imagem: require("../../assets/images/beirahotel.jpg"),
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
