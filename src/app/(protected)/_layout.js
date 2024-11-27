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
    <View style={{ flex: 1, backgroundColor: "#4B0082" }}>
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
          backgroundColor: "#E6E6FA",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "black", fontFamily: "regular" }}>Deslogar</Text>
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
                <Ionicons name="home-outline" size={22} color="white" />
                <Text style={styles.drawerText}>Casa</Text>
              </View>
            ),
            headerTitle: "Casa",
          }}
        />
        <Drawer.Screen
          name="hotel"
          options={{
            drawerLabel: () => (
              <View style={styles.drawerItem}>
                <Ionicons name="bed-outline" size={22} color="white" />
                <Text style={styles.drawerText}>Hoteis</Text>
              </View>
            ),
            headerTitle: "Hoteis",
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: () => (
              <View style={styles.drawerItem}>
                <Ionicons name="person-outline" size={22} color="white" />
                <Text style={styles.drawerText}>Perfil</Text>
              </View>
            ),
            headerTitle: "Perfil",
          }}
        />
        <Drawer.Screen
          name="planning"
          options={{
            drawerLabel: () => (
              <View style={styles.drawerItem}>
                <Ionicons name="calendar-outline" size={22} color="white" />
                <Text style={styles.drawerText}>Planejamento</Text>
              </View>
            ),
            headerTitle: "Planejamento",
          }}
        />
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: () => (
              <View style={styles.drawerItem}>
                <Ionicons name="list-outline" size={22} color="white" />
                <Text style={styles.drawerText}>Listagem</Text>
              </View>
            ),
            drawerItemStyle: { display: "none" }, // Oculta no Drawer
            headerTitle: "Listagem",
          }}
        />
        <Drawer.Screen
          name="minigame"
          options={{
            drawerLabel: () => (
              <View style={styles.drawerItem}>
                <Ionicons
                  name="game-controller-outline"
                  size={25}
                  color="white"
                />
                <Text style={styles.drawerText}>Passa Tempo</Text>
              </View>
            ),
            headerTitle: "MiniGame",
          }}
        />
        <Drawer.Screen
          name="daily"
          options={{
            drawerLabel: () => (
              <View style={styles.drawerItem}>
                <Ionicons name="book-outline" size={24} color="white" />
                <Text style={styles.drawerText}>Diário</Text>
              </View>
            ),
            headerTitle: "Diário",
          }}
        />
        <Drawer.Screen
          name="payment"
          options={{
            drawerLabel: () => (
              <View style={styles.drawerItem}>
                <Ionicons name="diamond-outline" size={22} color="white" />
                <Text style={styles.drawerText}>Pagamentos</Text>
              </View>
            ),
            drawerItemStyle: { display: "none" }, // Oculta no Drawer
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
    color: "white",
  },
};

export default function Layout() {
  return DrawerLayout();
}
