import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function List() {
  const [favorites, setFavorites] = useState([false, false, false]);
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const toggleFavorite = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);
  };

  const togglePreference = (preference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences(selectedPreferences.filter((item) => item !== preference));
    } else {
      setSelectedPreferences([...selectedPreferences, preference]);
    }
  };

  const preferences = ["Praia", "Área Verde", "Cidade", "Montanha", "Interior", "Parque Nacional", "Museu", "Paisagem"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Viagens</Text>
      <View style={styles.destinationContainer}>
        {/* Destinos */}
        <View style={styles.destinationItem}>
          <Image source={require("../../../src/assets/images/liberdade.png")} style={styles.image} />
          <Text style={styles.destinationText}>Bairro Liberdade</Text>
          <TouchableOpacity onPress={() => toggleFavorite(0)}>
            <Ionicons
              name={favorites[0] ? "star" : "star-outline"}
              size={24}
              color={favorites[0] ? "#FFD700" : "#808080"}
              style={styles.favoriteIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.destinationItem}>
          <Image source={require("../../../src/assets/images/campinas.png")} style={styles.image} />
          <Text style={styles.destinationText}>Museu de Arte Contemporânea</Text>
          <TouchableOpacity onPress={() => toggleFavorite(1)}>
            <Ionicons
              name={favorites[1] ? "star" : "star-outline"}
              size={24}
              color={favorites[1] ? "#FFD700" : "#808080"}
              style={styles.favoriteIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.destinationItem}>
          <Image source={require("../../../src/assets/images/santos.png")} style={styles.image} />
          <Text style={styles.destinationText}>Jardim da Orla</Text>
          <TouchableOpacity onPress={() => toggleFavorite(2)}>
            <Ionicons
              name={favorites[2] ? "star" : "star-outline"}
              size={24}
              color={favorites[2] ? "#FFD700" : "#808080"}
              style={styles.favoriteIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Preferências de Viagem */}
      <Text style={styles.preferencesTitle}>Preferências de Viagem</Text>
      <View style={styles.preferencesGrid}>
        {preferences.map((preference, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.preferenceButton,
              selectedPreferences.includes(preference) && styles.selectedPreference,
            ]}
            onPress={() => togglePreference(preference)}
          >
            <Text
              style={[
                styles.preferenceText,
                selectedPreferences.includes(preference) && styles.selectedPreferenceText,
              ]}
            >
              {preference}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    color: "#4B0082",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  destinationContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  destinationItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F0F0F5",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  destinationText: {
    fontSize: 18,
    color: "#333333",
    flex: 1,
  },
  favoriteIcon: {
    paddingLeft: 10,
  },
  preferencesTitle: {
    fontSize: 24,
    color: "#4B0082",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  preferencesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  preferenceButton: {
    backgroundColor: "#E6E6FA",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 10,
    width: "48%",
    alignItems: "center",
  },
  preferenceText: {
    fontSize: 14,
    color: "#4B0082",
  },
  selectedPreference: {
    backgroundColor: "#4B0082",
  },
  selectedPreferenceText: {
    color: "#FFFFFF",
  },
});
