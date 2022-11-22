import React from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { styles } from "./styles";

export default function AddressInformation({
  subtitle,
  address,
  phone,
  image,
}) {
  return (
    <View>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.vIcon}>
        <Entypo name="location" size={24} color="#1d9bf0" />
        <Text style={styles.text1}>{address}</Text>
      </View>
      <View style={styles.vIcon}>
        <Foundation name="telephone" size={24} color="#1d9bf0" />
        <Text style={styles.text2}>{phone}</Text>
      </View>
      <Image source={image} style={styles.unidades} />
    </View>
  );
}
