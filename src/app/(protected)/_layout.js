import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/Auth/index";

function CustomDrawerContent(props) {
  const { user, signOut } = useAuth();

  return (
    <View style={{ flex: 1, backgroundColor: "#E6E6FA"}}>
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F8F8FF",
          paddingVertical: 10,
          borderRadius: 30,
        }}
      >
        <Image
          source={require("../../../src/assets/images/logo.png")}
          style={{ width: 130, height: 130 }}
        />
        <Text
          style={{ textAlign: "center", fontSize: 14, fontFamily: "regular" }}
        >
          {user?.user?.nome}
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        onPress={() => signOut()}
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          margin: 10,
          backgroundColor: "#4B0082",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white" }}>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
}

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, color: "white"}}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Casa",
            headerTitle: "Casa",
            drawerIcon: () => (
              <Ionicons name="home-outline" size={20} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="reserve"
          options={{
            drawerLabel: "Reserva",
            headerTitle: "Reserva",
            drawerIcon: () => (
              <Ionicons name="ticket-outline" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "Perfil",
            headerTitle: "Perfil",
            drawerIcon: () => (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="community"
          options={{
            drawerLabel: "Comunidade",
            headerTitle: "Comunidade",
            drawerIcon: () => (
              <Ionicons name="chatbubbles-outline" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="planning"
          options={{
            drawerLabel: "Planejamento",
            headerTitle: "Planejamento",
            drawerIcon: () => (
              <Ionicons name="calendar-outline" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="assistant"
          options={{
            drawerLabel: "Assistente",
            headerTitle: "Assistente",
            drawerIcon: () => (
              <Ionicons name="map-outline" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: "Listagem",
            headerTitle: "Listagem",
            drawerIcon: () => (
              <Ionicons name="list-outline" size={20} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="payment"
          options={{
            drawerLabel: "Pagamentos",
            headerTitle: "Pagamentos",
            drawerIcon: () => (
              <Ionicons name="diamond-outline" size={20} color="black" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default function Layout() {
  return DrawerLayout();
}