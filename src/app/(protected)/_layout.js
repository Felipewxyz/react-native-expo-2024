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
    <View style={{ flex: 1, backgroundColor: "#E6E6FA" }}>
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
        <DrawerItemList {...props} itemStyle={{ fontFamily: "regular" }} />
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
        <Text style={{ color: "white", fontFamily: "regular" }}>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
}

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, color: "white" }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: () => (
              <View style={styles.drawerItem}>
                <Ionicons name="home-outline" size={22} color="black" />
                <Text style={styles.drawerText}>Casa</Text>
              </View>
            ),
            headerTitle: "Casa",
          }}
        />
        <Drawer.Screen
          name="reserve"
          options={{
            drawerLabel: () => (
              <View style={styles.drawerItem}>
                <Ionicons name="ticket-outline" size={22} color="black" />
                <Text style={styles.drawerText}>Reserva</Text>
              </View>
            ),
            headerTitle: "Reserva",
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: () => (
              <View style={styles.drawerItem}>
                <Ionicons name="person-outline" size={22} color="black" />
                <Text style={styles.drawerText}>Perfil</Text>
              </View>
            ),
            headerTitle: "Perfil",
          }}
        />
        <Drawer.Screen
          name="community"
          options={{
            drawerLabel: () => (
              <View style={styles.drawerItem}>
                <Ionicons name="chatbubbles-outline" size={22} color="black" />
                <Text style={styles.drawerText}>Comunidade</Text>
              </View>
            ),
            headerTitle: "Comunidade",
          }}
        />
        <Drawer.Screen
          name="planning"
          options={{
            drawerLabel: () => (
              <View style={styles.drawerItem}>
                <Ionicons name="calendar-outline" size={22} color="black" />
                <Text style={styles.drawerText}>Planejamento</Text>
              </View>
            ),
            headerTitle: "Planejamento",
          }}
        />
        <Drawer.Screen
          name="assistant"
          options={{
            drawerLabel: () => (
              <View style={styles.drawerItem}>
                <Ionicons name="map-outline" size={22} color="black" />
                <Text style={styles.drawerText}>Assistente</Text>
              </View>
            ),
            headerTitle: "Assistente",
          }}
        />
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: () => (
              <View style={styles.drawerItem}>
                <Ionicons name="list-outline" size={22} color="black" />
                <Text style={styles.drawerText}>Listagem</Text>
              </View>
            ),
            headerTitle: "Listagem",
          }}
        />
        <Drawer.Screen
          name="payment"
          options={{
            drawerLabel: () => (
              <View style={styles.drawerItem}>
                <Ionicons name="diamond-outline" size={22} color="black" />
                <Text style={styles.drawerText}>Pagamentos</Text>
              </View>
            ),
            headerTitle: "Pagamentos",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

const styles = {
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  drawerText: {
    fontFamily: "regular",
    marginLeft: 10,
    fontSize: 14,
  },
};

export default function Layout() {
  return DrawerLayout();
}
