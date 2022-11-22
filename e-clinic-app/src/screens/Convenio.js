import React from "react";
import { ScrollView, StyleSheet, Text, Image, View } from "react-native";
import Header from "../components/HeaderPages";
import logo from "../assets/home/logo.png";
import img1 from "../assets/convenio/img-1.png";
import img2 from "../assets/convenio/img-2.png";
import img3 from "../assets/convenio/img-3.png";
import img4 from "../assets/convenio/img-4.png";
import img5 from "../assets/convenio/img-5.png";
import img6 from "../assets/convenio/img-6.png";
import img7 from "../assets/convenio/img-7.png";
import img8 from "../assets/convenio/img-8.png";
import img9 from "../assets/convenio/img-9.png";
import img10 from "../assets/convenio/img-10.png";
import img11 from "../assets/convenio/img-11.png";
import img12 from "../assets/convenio/img-12.png";
import img13 from "../assets/convenio/img-13.png";
import img14 from "../assets/convenio/img-14.png";
import img15 from "../assets/convenio/img-15.png";

const Convenio = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <Text style={styles.title}>Planos de saúde</Text>
        <Text style={styles.text}>
          Sempre valorizamos a vida dos nossos pacientes em cada atendimento,
          com o jeito E-Clinic de fazer saúde. Trabalhamos juntos diariamente,
          disponibilizando o melhor que a medicina pode oferecer para todos que
          passam por aqui, confira abaixo a lista dos convênios atendidos:
        </Text>
        <View style={styles.imgContainer}>
          <Image source={img1} style={styles.convenio} />
          <Image source={img2} style={styles.convenio} />
          <Image source={img3} style={styles.convenio} />
          <Image source={img4} style={styles.convenio} />
          <Image source={img5} style={styles.convenio} />
          <Image source={img6} style={styles.convenio} />
          <Image source={img7} style={styles.convenio} />
          <Image source={img8} style={styles.convenio} />
          <Image source={img9} style={styles.convenio} />
          <Image source={img10} style={styles.convenio} />
          <Image source={img11} style={styles.convenio} />
          <Image source={img12} style={styles.convenio} />
          <Image source={img13} style={styles.convenio} />
          <Image source={img14} style={styles.imgConvenio} />
          <Image source={img15} style={styles.imgConvenio} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Convenio;

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
    marginBottom: 15,
  },
  text: {
    color: "#737680",
    margin: 20,
    textAlign: "justify",
    fontSize: 18,
  },
  imgContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30,
  },
  convenio: {
    marginBottom: 50,
    width: 170,
    height: 80,
  },
  imgConvenio: {
    width: 210,
    height: 140,
  },
});
