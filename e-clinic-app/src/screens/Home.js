import React from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
} from "react-native";
import Header from "../components/HeaderPages";
import banner from "../assets/home/home-banner.jpg";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import img1 from "../assets/home/img1.jpg";
import img2 from "../assets/home/img2.jpg";
import img3 from "../assets/home/img3.jpg";
import img4 from "../assets/home/img4.jpg";
import img5 from "../assets/home/img5.jpeg";
import img6 from "../assets/home/img6.jpg";
import img7 from "../assets/home/img7.bmp";
import img8 from "../assets/home/img8.jpg";
import img9 from "../assets/home/img9.png";
import img10 from "../assets/home/img10.jpg";
import img11 from "../assets/home/img11.jpeg";
import img12 from "../assets/home/img12.jpg";

const w = Dimensions.get("window").width;

const Home = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Header />
          <Image source={banner} style={styles.banner} />
          <View style={styles.iconsContainer}>
            <Entypo name="chat" size={45} color="#ffff" />
            <Text style={styles.iconsText}>ATENDIMENTO DE QUALIDADE</Text>
          </View>
          <View style={styles.iconsContainer}>
            <FontAwesome name="stethoscope" size={45} color="#ffff" />
            <Text style={styles.iconsText}>DIVERSAS ESPECIALIDADES</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Entypo name="clipboard" size={45} color="#ffff" />
            <Text style={styles.iconsText}>EXAMES E PROCEDIMENTOS</Text>
          </View>
          <View>
            <Text style={styles.title}>Nossas instalações</Text>
            <Text style={styles.text}>
              A E-Clinic disponibiliza instalações modernas para prestar
              atendimento de qualidade a seus pacientes. Humanização, cuidado,
              atenção e respeito são palavras que orientam há anos todas as
              atividades das equipes.
            </Text>
            <Text style={styles.text}>
              Centro cirúrgico completo, com 17 salas preparadas para realizar
              quaisquer tipos de procedimentos, dos mais simples aos de alta
              complexidade, incluindo cirurgias por videolaparoscopia, tornando
              os procedimentos menos incisivos e minimizando o período de
              internação.
            </Text>
            <View></View>
            <Image source={img1} style={styles.img} />
            <Image source={img2} style={styles.img} />
            <Image source={img3} style={styles.img} />
            <Image source={img4} style={styles.img} />
            <Image source={img5} style={styles.img} />
            <Image source={img6} style={styles.img} />
            <Image source={img7} style={styles.img} />
            <Image source={img8} style={styles.img} />
            <Image source={img9} style={styles.img} />
            <Image source={img10} style={styles.img} />
            <Image source={img11} style={styles.img} />
            <Image source={img12} style={styles.img} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
  },
  scrollView: {
    flex: 1,
  },
  banner: {
    width: "100%",
    height: 200,
  },
  iconsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    backgroundColor: "#1d9bf0",
    width: 370,
    height: 110,
  },
  iconsText: {
    color: "#ffff",
    marginTop: 10,
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
  img: {
    width: 330,
    height: 250,
    margin: 30,
  },
});
