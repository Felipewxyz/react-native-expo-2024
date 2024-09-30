import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import {
  Alert,
  BackHandler,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../hooks/Auth";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const { signIn, signOut } = useAuth();
  const [email, setEmail] = useState("super@email.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email, password });
      router.replace("/");
    } catch (error) {
      Alert.alert("Erro", error.message);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <Ionicons name="mail-open-outline" size={20} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="gray"
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisibility}
          placeholderTextColor="gray"
        />
        <Ionicons
          name={passwordVisibility ? "eye-off-outline" : "eye-outline"}
          size={20}
          color="gray"
          onPress={togglePasswordVisibility}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleEntrarSuper}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/about")}>
        <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => BackHandler.exitApp()}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },
  input: {
    flex: 1,
    fontSize: 16, 
    fontFamily: "regular", 
    color: "#333333",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#4B0082",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 15, 
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "regular",
  },
});


