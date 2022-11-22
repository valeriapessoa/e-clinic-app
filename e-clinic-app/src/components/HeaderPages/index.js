import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import logo from "../../assets/home/logo.png";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SocialLink from "../SocialLink";

function Header() {
  return (
    <View>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.blueContainer}>
        <SocialLink url="https://www.instagram.com/">
          <FontAwesome5
            name="instagram-square"
            size={24}
            color="#ffff"
            style={styles.socialNetworks}
          />
        </SocialLink>
        <SocialLink url="https://www.facebook.com/">
          <FontAwesome5
            name="facebook-square"
            size={24}
            color="#ffff"
            style={styles.socialNetworks}
          />
        </SocialLink>
        <SocialLink url="https://twitter.com/twitterbrasil">
          <MaterialCommunityIcons
            name="twitter"
            size={24}
            color="#FFFF"
            style={styles.socialNetworks}
          />
        </SocialLink>
      </View>
    </View>
  );
}

export default Header;
