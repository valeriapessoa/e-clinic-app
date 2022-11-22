import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import Header from "../components/HeaderPages";
import atendimento from "../assets/atendimento-cliente/atendimento.png";

const Blank = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Header />

        <Image source={atendimento} style={styles.img} />

        <Text style={styles.title}>Central de Atendimento</Text>
        <Text style={styles.text}>
          A E-Clinic quer ouvir suas críticas e sugestões para melhorar o
          atendimento e serviços prestados.
        </Text>
        <Text style={styles.text}>
          Para reclamações, sugestões e elogios​​​:​​
        </Text>
        <Text style={styles.text}>E-mail: sac@eclinic.br</Text>
        <Text style={styles.text}>WhatsApp: (11) 98000-9220</Text>
        <Text style={styles.text}>Site: www.eclinic.com.br</Text>
        <Text style={styles.text}>
          Horário de atendimento: de segunda à sexta, das 07hrs às 19hrs (em
          feriados não há expediente)
        </Text>
      </View>
    </ScrollView>
  );
};

export default Blank;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFF",
  },
  img: {
    width: "100%",
    height: 250,
  },
  title: {
    color: "#1d9bf0",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
  },
  text: {
    color: "#737680",
    margin: 20,
    textAlign: "justify",
    fontSize: 18,
  },
});
