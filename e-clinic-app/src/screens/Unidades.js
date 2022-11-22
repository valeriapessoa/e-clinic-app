import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ListItem,
  Left,
  Body,
} from "react-native";
import Header from "../components/HeaderPages";
import AddressInformation from "../components/AddressInformation";
import morumbi from "../assets/unidades/morumbi.jpg";
import paulista from "../assets/unidades/paulista.jpeg";
import pompeia from "../assets/unidades/pompeia.png";
import sumare from "../assets/unidades/sumare.jpg";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const w = Dimensions.get("window").width;

const Unidades = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Header />

        <Text style={styles.title}>Conheça as Unidades</Text>

        <AddressInformation
          subtitle="Morumbi"
          address="Praça Roberto Gomes Pedrosa, 782 - Morumbi, SP"
          phone="(11)3244-2020"
          image={morumbi}
        />

        <AddressInformation
          subtitle="Paulista"
          address="Av. Paulista, 325 - Bela Vista, SP"
          phone="(11)3230-1010"
          image={paulista}
        />

        <AddressInformation
          subtitle="Pompéia"
          address="Av. Pompéia, 1422 - Pompeia, SP"
          phone="(11)3240-6631"
          image={pompeia}
        />

        <AddressInformation
          subtitle="Sumaré"
          address="R. Duartina, 203 - Sumaré, SP"
          phone="(11)3277-2100"
          image={sumare}
        />
      </View>
    </ScrollView>
  );
};

export default Unidades;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
  },
  title: {
    color: "#1d9bf0",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
  },
});
