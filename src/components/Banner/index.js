import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  const [page, setPage] = useState(0);

  const onPageSelected = (e) => {
    setPage(e.nativeEvent.position);
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
            style={styles.imagem}
          />
        </View>
        <View key="2" style={styles.page}>
          <Image
            source={require("../../../src/assets/images/banner2.png")}
            style={styles.imagem}
          />
        </View>
        <View key="3" style={styles.page}>
          <Image
            source={require("../../../src/assets/images/banner3.png")}
            style={styles.imagem}
          />
        </View>
      </PagerView>
      <View style={styles.bulletContent}>
        <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>
      </View>
      <Text style={styles.text}>SUGESTÕES DE DESTINO</Text>
      <View style={styles.view}>
        <Text style={styles.text2}>Destino A</Text>
        <Text style={styles.text2}>Destino B</Text>
        <Text style={styles.text2}>Destino C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 10,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C0C0C0",
    padding: 2,
    borderRadius: 20,
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
  activeBullet: {
    backgroundColor: "#4B0082",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic",
    color: "#4B0082",
  },
  text2: {
    fontSize: 15,
    textAlign: "left",
    color: "#000000",
    padding: 10,
  },
  imagem: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  view: {
    width: "90%",
    height: "20%",
    backgroundColor: "#E6E6FA",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#4B0082",
    margin: 20,
  },
});
