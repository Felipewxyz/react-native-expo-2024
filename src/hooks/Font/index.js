import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const FontContext = createContext({})

export function FontProvider({ children }) {
    const [loaded, error] = useFonts({
        light: require("../../assets/fonts/JosefinSans-Light.ttf"),
        lightitalic: require("../../assets/fonts/JosefinSans-LightItalic.ttf"),
        regular: require("../../assets/fonts/JosefinSans-Regular.ttf"),
        medium: require("../../assets/fonts/JosefinSans-Medium.ttf"),
        semibold: require("../../assets/fonts/JosefinSans-SemiBold.ttf"),
    });

    if (!loaded && !error) {
       return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{ fontSize: 28, marginTop: 15 }}>Carregando as Fontes</Text>
            <ActivityIndicator size="small" color="#6A5ACD"/>
        </View>
        )
    }

    return <FontContext.Provider value={{loaded}}>{ children }</FontContext.Provider>;
}

export function useFont() {
    const context = useContext(FontContext)
    if (!context) {
        throw new Error("useFont must be used within a FontProvider");
    }
    return context;
}