import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import PagerView from "react-native-pager-view";
import { MaterialIcons } from "@expo/vector-icons";

export function Banner() {
  const [page, setPage] = useState(0);
  const [pesquisaQuery, setPesquisaQuery] = useState("");
  const [isExpandedLiberdade, setIsExpandedLiberdade] = useState(false);
  const [isExpandedGinasio, setIsExpandedGinasio] = useState(false);
  const [isExpandedCampinas, setIsExpandedCampinas] = useState(false);
  const [isExpandedSantos, setIsExpandedSantos] = useState(false);
  const [isExpandedJose, setIsExpandedJose] = useState(false);
  const [isExpandedRibeirao, setIsExpandedRibeirao] = useState(false);
  const [isExpandedRio, setIsExpandedRio] = useState(false);
  const [isExpandedSorocaba, setIsExpandedSorocaba] = useState(false);
  const [isExpandedCriança, setIsExpandedCriança] = useState(false);
  const [isExpandedBauru, setIsExpandedBauru] = useState(false);
  const [isExpandedAracatuba, setIsExpandedAracatuba] = useState(false);
  const [isExpandedPiracicaba, setIsExpandedPiracicaba] = useState(false);

  const onPageSelected = (e) => {
    setPage(e.nativeEvent.position);
  };

  const toggleExpandLiberdade = () => {
    setIsExpandedLiberdade(!isExpandedLiberdade);
  };

  const toggleExpandGinasio = () => {
    setIsExpandedGinasio(!isExpandedGinasio);
  };

  const toggleExpandCampinas = () => {
    setIsExpandedCampinas(!isExpandedCampinas);
  };

  const toggleExpandSantos = () => {
    setIsExpandedSantos(!isExpandedSantos);
  };
 
  const toggleExpandJose = () => {
    setIsExpandedJose(!isExpandedJose);
  };
 
  const toggleExpandRibeirao = () => {
    setIsExpandedRibeirao(!isExpandedRibeirao);
  };
 
  const toggleExpandRio = () => {
    setIsExpandedRio(!isExpandedRio);
  };
 
  const toggleExpandSorocaba = () => {
    setIsExpandedSorocaba(!isExpandedSorocaba);
  };
  
  const toggleExpandCriança = () => {
    setIsExpandedCriança(!isExpandedCriança);
  };
  
  const toggleExpandBauru = () => {
    setIsExpandedBauru(!isExpandedBauru);
  };
  
  const toggleExpandAracatuba = () => {
    setIsExpandedAracatuba(!isExpandedAracatuba);
  };
 
  const toggleExpandPiracicaba = () => {
    setIsExpandedPiracicaba(!isExpandedPiracicaba);
  };

  return (
    <View style={styles.container}>
      <PagerView
        initialPage={0}
        style={styles.content}
        onPageSelected={onPageSelected}
      >
        <View key="1" style={styles.page}>
          <Image
            source={require("../../../src/assets/images/banner1.png")}
            style={styles.image}
          />
        </View>
        <View key="2" style={styles.page}>
          <Image
            source={require("../../../src/assets/images/banner2.png")}
            style={styles.image}
          />
        </View>
        <View key="3" style={styles.page}>
          <Image
            source={require("../../../src/assets/images/banner3.png")}
            style={styles.image}
          />
        </View>
      </PagerView>

      <View style={styles.bulletContent}>
        <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>
      </View>

      <View style={styles.pesquisaContainer}>
        <TextInput
          style={styles.pesquisaInput}
          placeholder="Pesquise seu destino"
          placeholderTextColor="#808080"
          selectionColor="#4B0082"
          value={pesquisaQuery}
          onChangeText={setPesquisaQuery}
        />
      </View>
      <Text style={styles.sugestoesTitulo}>Sugesões de Destino</Text>
      <ScrollView style={styles.sugestoesScroll}>
      <View style={styles.sugestoesContainer}>
          <TouchableOpacity
            onPress={toggleExpandGinasio}
            style={styles.tituloContainer}
          >
            <Text style={styles.sugestoesTitulo}>
              Ginásio Esportes (Presidente Venceslau)
            </Text>
            <MaterialIcons
              name={isExpandedGinasio ? "arrow-drop-up" : "arrow-drop-down"}
              size={26}
              color="#4B0082"
            />
          </TouchableOpacity>
          {isExpandedGinasio && (
            <Image
              source={require("../../assets/images/ginasio.png")}
              style={styles.imagem}
            />
          )}
        </View>

        <View style={styles.sugestoesContainer}>
          <TouchableOpacity
            onPress={toggleExpandLiberdade}
            style={styles.tituloContainer}
          >
            <Text style={styles.sugestoesTitulo}>
              Bairro Liberdade (São Paulo)
            </Text>
            <MaterialIcons
              name={isExpandedLiberdade ? "arrow-drop-up" : "arrow-drop-down"}
              size={26}
              color="#4B0082"
            />
          </TouchableOpacity>
          {isExpandedLiberdade && (
            <Image
              source={require("../../assets/images/liberdade.png")}
              style={styles.imagem}
            />
          )}
        </View>
        
        <View style={styles.sugestoesContainer}>
          <TouchableOpacity
            onPress={toggleExpandCampinas}
            style={styles.tituloContainer}
          >
            <Text style={styles.sugestoesTitulo}>
              Museu de Arte Contemporânea (Campinas)
            </Text>
            <MaterialIcons
              name={isExpandedCampinas ? "arrow-drop-up" : "arrow-drop-down"}
              size={26}
              color="#4B0082"
            />
          </TouchableOpacity>
          {isExpandedCampinas && (
            <Image
              source={require("../../assets/images/campinas.png")}
              style={styles.imagem}
            />
          )}
        </View>
        
        <View style={styles.sugestoesContainer}>
          <TouchableOpacity
            onPress={toggleExpandSantos}
            style={styles.tituloContainer}
          >
            <Text style={styles.sugestoesTitulo}>
              Jardim da Orla (Santos)
            </Text>
            <MaterialIcons
              name={isExpandedSantos ? "arrow-drop-up" : "arrow-drop-down"}
              size={26}
              color="#4B0082"
            />
          </TouchableOpacity>
          {isExpandedSantos && (
            <Image
              source={require("../../assets/images/santos.png")}
              style={styles.imagem}
            />
          )}
        </View>

        <View style={styles.sugestoesContainer}>
          <TouchableOpacity
            onPress={toggleExpandJose}
            style={styles.tituloContainer}
          >
            <Text style={styles.sugestoesTitulo}>
              Museu Catavento (São José dos Campos)
            </Text>
            <MaterialIcons
              name={isExpandedJose ? "arrow-drop-up" : "arrow-drop-down"}
              size={26}
              color="#4B0082"
            />
          </TouchableOpacity>
          {isExpandedJose && (
            <Image
              source={require("../../assets/images/catavento.png")}
              style={styles.imagem}
            />
          )}
        </View>

        <View style={styles.sugestoesContainer}>
          <TouchableOpacity
            onPress={toggleExpandRibeirao}
            style={styles.tituloContainer}
          >
            <Text style={styles.sugestoesTitulo}>
              Teatro Pedro II (Ribeirão Preto)
            </Text>
            <MaterialIcons
              name={isExpandedRibeirao ? "arrow-drop-up" : "arrow-drop-down"}
              size={26}
              color="#4B0082"
            />
          </TouchableOpacity>
          {isExpandedRibeirao && (
            <Image
              source={require("../../assets/images/ribeirao.png")}
              style={styles.imagem}
            />
          )}
        </View>

        <View style={styles.sugestoesContainer}>
          <TouchableOpacity
            onPress={toggleExpandRio}
            style={styles.tituloContainer}
          >
            <Text style={styles.sugestoesTitulo}>
              Zoológico Municipal (São José do Rio Preto)
            </Text>
            <MaterialIcons
              name={isExpandedRio ? "arrow-drop-up" : "arrow-drop-down"}
              size={26}
              color="#4B0082"
            />
          </TouchableOpacity>
          {isExpandedRio && (
            <Image
              source={require("../../assets/images/rio.png")}
              style={styles.imagem}
            />
          )}
        </View>

        <View style={styles.sugestoesContainer}>
          <TouchableOpacity
            onPress={toggleExpandSorocaba}
            style={styles.tituloContainer}
          >
            <Text style={styles.sugestoesTitulo}>
              Parque da Águas (Sorocaba)
            </Text>
            <MaterialIcons
              name={isExpandedSorocaba ? "arrow-drop-up" : "arrow-drop-down"}
              size={26}
              color="#4B0082"
            />
          </TouchableOpacity>
          {isExpandedSorocaba && (
            <Image
              source={require("../../assets/images/sorocaba.png")}
              style={styles.imagem}
            />
          )}
        </View>

        <View style={styles.sugestoesContainer}>
          <TouchableOpacity
            onPress={toggleExpandCriança}
            style={styles.tituloContainer}
          >
            <Text style={styles.sugestoesTitulo}>
              Cidade da Criança (Presidente Prudente)
            </Text>
            <MaterialIcons
              name={isExpandedCriança ? "arrow-drop-up" : "arrow-drop-down"}
              size={26}
              color="#4B0082"
            />
          </TouchableOpacity>
          {isExpandedCriança && (
            <Image
              source={require("../../assets/images/criança.png")}
              style={styles.imagem}
            />
          )}
        </View>

        <View style={styles.sugestoesContainer}>
          <TouchableOpacity
            onPress={toggleExpandBauru}
            style={styles.tituloContainer}
          >
            <Text style={styles.sugestoesTitulo}>
            Jardim Botânico Municipal (Bauru)
            </Text>
            <MaterialIcons
              name={isExpandedBauru ? "arrow-drop-up" : "arrow-drop-down"}
              size={26}
              color="#4B0082"
            />
          </TouchableOpacity>
          {isExpandedBauru && (
            <Image
              source={require("../../assets/images/bauru.png")}
              style={styles.imagem}
            />
          )}
        </View>

        <View style={styles.sugestoesContainer}>
          <TouchableOpacity
            onPress={toggleExpandAracatuba}
            style={styles.tituloContainer}
          >
            <Text style={styles.sugestoesTitulo}>
            Museu Histórico e Pedagógico Marechal Rondon (Araçatuba)
            </Text>
            <MaterialIcons
              name={isExpandedAracatuba ? "arrow-drop-up" : "arrow-drop-down"}
              size={26}
              color="#4B0082"
            />
          </TouchableOpacity>
          {isExpandedAracatuba && (
            <Image
              source={require("../../assets/images/aracatuba.png")}
              style={styles.imagem}
            />
          )}
        </View>

        <View style={styles.sugestoesContainer}>
          <TouchableOpacity
            onPress={toggleExpandPiracicaba}
            style={styles.tituloContainer}
          >
            <Text style={styles.sugestoesTitulo}>
            Engenho Central (Piracicaba)
            </Text>
            <MaterialIcons
              name={isExpandedPiracicaba ? "arrow-drop-up" : "arrow-drop-down"}
              size={26}
              color="#4B0082"
            />
          </TouchableOpacity>
          {isExpandedPiracicaba && (
            <Image
              source={require("../../assets/images/piracicaba.png")}
              style={styles.imagem}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    alignItems: "center",
  },
  activeBullet: {
    backgroundColor: "#4B0082",
  },
  bulletContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 10,
    backgroundColor: "#9370DB",
  },
  content: {
    marginTop: 10,
    height: 200,
    width: "100%",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFF",
    padding: 2,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imagem: {
    width: "100%",
    height: 150,
    borderRadius: 5,
    marginTop: 10,
  },
  pesquisaContainer: {
    width: "90%",
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4B0082",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "center",
  },
  pesquisaInput: {
    height: 40,
    fontSize: 16,
    fontFamily: "regular",
    color: "#000",
  },
  sugestoesContainer: {
    width: "90%",
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4B0082",
    padding: 10,
    backgroundColor: "#FFF",
    alignSelf: "center",
  },
  sugestoesScroll: {
    flex: 1,
    width: "100%",
  },
  sugestoesTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "regular",
    color: "#4B0082",
  },
  tituloContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: "regular",
    color: "#000",
    fontSize: 16,
  },
});

