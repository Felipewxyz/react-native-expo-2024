import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Payment() {
  const [valor, setValor] = useState("0,00");
  const [sugestoes, setSugestoes] = useState([
    {
      id: 1,
      nome: "Ximenes Cheves",
    },
    {
      id: 2,
      nome: "Saundra Pennuzzi",
    },
    {
      id: 3,
      nome: "Pepi Genthner",
    },
    {
      id: 4,
      nome: "Jay Gales",
    },
    {
      id: 5,
      nome: "Yettie Lawman",
    },
    {
      id: 6,
      nome: "Fletcher Beacon",
    },
    {
      id: 7,
      nome: "Karlan Raddin",
    },
    {
      id: 8,
      nome: "Vladamir Richards",
    },
    {
      id: 9,
      nome: "Laurel Woodison",
    },
    {
      id: 10,
      nome: "Melloney Crichton",
    },
    {
      id: 11,
      nome: "Kristian Garwood",
    },
    {
      id: 12,
      nome: "Wilone Peetermann",
    },
    {
      id: 13,
      nome: "Elroy Hourican",
    },
    {
      id: 14,
      nome: "Dianemarie Herion",
    },
    {
      id: 15,
      nome: "Reggie Hovee",
    },
    {
      id: 16,
      nome: "Margery Oswell",
    },
    {
      id: 17,
      nome: "Wendall Kydd",
    },
    {
      id: 18,
      nome: "Happy Poland",
    },
    {
      id: 19,
      nome: "Linea Trillow",
    },
    {
      id: 20,
      nome: "Dulce Blount",
    },
    {
      id: 21,
      nome: "Roderich Pither",
    },
    {
      id: 22,
      nome: "Kerrill Allcroft",
    },
    {
      id: 23,
      nome: "Lewiss Kemsley",
    },
    {
      id: 24,
      nome: "Nikolai Whilde",
    },
    {
      id: 25,
      nome: "Sibyl Brokenbrow",
    },
    {
      id: 26,
      nome: "Dominic Larcher",
    },
    {
      id: 27,
      nome: "Miltie Shmyr",
    },
    {
      id: 28,
      nome: "Giselle Aysh",
    },
    {
      id: 29,
      nome: "Vanya Hendrickx",
    },
    {
      id: 30,
      nome: "Shaylah Redmain",
    },
    {
      id: 31,
      nome: "Edouard Chaff",
    },
    {
      id: 32,
      nome: "Christian Machan",
    },
    {
      id: 33,
      nome: "Craggie Keiley",
    },
    {
      id: 34,
      nome: "Lilyan Samwell",
    },
    {
      id: 35,
      nome: "Earl Bassick",
    },
  ]);
  const [id, setId] = useState(1);
  const [data, setData] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false);
  const [observacao, setObservacao] = useState("");

  const handleCalendar = (event, selectedDate) => {
    setViewCalendar(false);
    setData(selectedDate);
  };

  return (
    <View style={styles.content}>
      <Text>Inserir Pagamentos</Text>
      <View style={styles.inputView}>
        <Ionicons name="wallet-outline" size={24} color="black" />
        <TextInput
          placeholder="Valor"
          keyboardType="decimal-pad"
          style={styles.inputValor}
          value={valor}
          onChangeText={setValor}
        />
      </View>
      <View style={styles.inputView}>
        <Picker
          selectedValue={id}
          onValueChange={(itemValue, index) => {
            setId(itemValue);
          }}
          style={{ width: "100%" }}
        >
          {sugestoes?.map((item) => {
            return (
              <Picker.Item key={item.id} label={item.nome} value={item.id} />
            );
          })}
        </Picker>
      </View>
      <View style={styles.inputView}>
        <Text onPress={() => setViewCalendar(true)} style={styles.inputData}>
          {data.toLocaleDateString().split("T")[0]}
        </Text>
        {viewCalendar && (
          <DateTimePicker
            value={data}
            onChange={handleCalendar}
            mode="date"
            testID="DateTimePicker"
          />
        )}
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Observações"
          style={styles.inputObservacao}
          value={observacao}
          onChangeText={setObservacao}
          multiline={true}
        />
      </View>
      <View style={styles.contentButtons}>
        <Button title="Salvar" />
        <Button title="Continuar" />
        <Button title="Cancelar" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  inputView: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  contentButtons: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-around",
  },
  inputValor: {
    textAlign: "right",
    padding: 10,
  },
  inputData: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    padding: 10,
  },
  inputObservacao: {
    fontSize: 16,
    flex: 1,
    lineHeight: 20,
  },
});
