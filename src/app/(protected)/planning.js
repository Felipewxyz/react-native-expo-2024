import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const initialActivitiesData = {
  "São Paulo": [
    {
      id: "1",
      name: "Avenida Paulista",
      time: "10:00 - 12:00",
      completed: false,
    },
    {
      id: "2",
      name: "Parque Ibirapuera",
      time: "14:00 - 16:00",
      completed: false,
    },
    {
      id: "3",
      name: "Mercado Municipal",
      time: "17:00 - 18:30",
      completed: false,
    },
  ],
  "Presidente Prudente": [
    {
      id: "1",
      name: "Parque do Povo",
      time: "09:00 - 11:00",
      completed: false,
    },
    { id: "2", name: "Cidade da Criança", time: "12:00 - 14:00", completed: false },
    {
      id: "3",
      name: "Balneário da Amizade",
      time: "15:00 - 17:00",
      completed: false,
    },
  ],
};

export default function List() {
  const [activities, setActivities] = useState(initialActivitiesData);
  const [newCity, setNewCity] = useState("");
  const [newActivityName, setNewActivityName] = useState("");
  const [newActivityTime, setNewActivityTime] = useState("");

  const toggleCompletion = (city, activityId) => {
    setActivities((prevActivities) => {
      const updatedCityActivities = prevActivities[city].map((activity) => {
        if (activity.id === activityId) {
          return { ...activity, completed: !activity.completed };
        }
        return activity;
      });

      return { ...prevActivities, [city]: updatedCityActivities };
    });
  };

  const addActivity = (city) => {
    const newId = (activities[city].length + 1).toString();
    const newActivity = {
      id: newId,
      name: newActivityName,
      time: newActivityTime,
      completed: false,
    };

    setActivities((prevActivities) => ({
      ...prevActivities,
      [city]: [...prevActivities[city], newActivity],
    }));

    setNewActivityName("");
    setNewActivityTime("");
  };

  const addCity = () => {
    if (!newCity) return;

    setActivities((prevActivities) => ({
      ...prevActivities,
      [newCity]: [],
    }));

    setNewCity("");
  };

  const deleteCity = (city) => {
    const updatedActivities = { ...activities };
    delete updatedActivities[city];
    setActivities(updatedActivities);
  };

  const deleteActivity = (city, activityId) => {
    const updatedCityActivities = activities[city].filter(
      (activity) => activity.id !== activityId
    );
    setActivities({ ...activities, [city]: updatedCityActivities });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Planejamento</Text>
      </View>

      {Object.keys(activities).map((city) => (
        <View key={city} style={styles.cityContainer}>
          <View style={styles.cityHeader}>
            <Text style={styles.cityTitle}>{city}</Text>
            <TouchableOpacity onPress={() => deleteCity(city)}>
              <Ionicons name="trash-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={activities[city]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.activityContainer,
                  { backgroundColor: item.completed ? "#90EE90" : "#F5F5F5" },
                ]}
              >
                <View style={styles.activityRow}>
                  <View>
                    <Text style={styles.activityName}>{item.name}</Text>
                    <Text style={styles.activityTime}>{item.time}</Text>
                  </View>
                  <View style={styles.activityButtons}>
                    <TouchableOpacity
                      style={[styles.button, { backgroundColor: "#F5F5F5" }]}
                      onPress={() => toggleCompletion(city, item.id)}
                    >
                      <Text style={styles.buttonText}>
                        <Ionicons
                          name="checkmark-outline"
                          size={24}
                          color="#32CD32"
                        />
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => deleteActivity(city, item.id)}
                    >
                      <Ionicons name="trash-outline" size={24} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            scrollEnabled={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome da nova atividade"
            value={newActivityName}
            onChangeText={setNewActivityName}
          />
          <TextInput
            style={styles.input}
            placeholder="Horário (ex: 14:00 - 16:00)"
            value={newActivityTime}
            onChangeText={setNewActivityTime}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addActivity(city)}
          >
            <Text style={styles.addButtonText}>Adicionar Atividade</Text>
          </TouchableOpacity>
        </View>
      ))}

      <View style={styles.addCityContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome da nova cidade"
          value={newCity}
          onChangeText={setNewCity}
        />
        <TouchableOpacity style={styles.addButton} onPress={addCity}>
          <Text style={styles.addButtonText}>Adicionar Cidade</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    paddingBottom: 50,
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  cityContainer: {
    marginBottom: 30,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cityHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  cityTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#4B0082",
  },
  activityContainer: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  activityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activityName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  activityTime: {
    fontSize: 14,
    color: "#666",
  },
  activityButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#4B0082",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  addCityContainer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    alignItems: "center",
  },
});
