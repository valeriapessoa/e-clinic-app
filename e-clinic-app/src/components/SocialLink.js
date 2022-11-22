import React, { useCallback } from "react";
import { Linking, Alert, TouchableHighlight } from "react-native";

const SocialLink = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Não sei como abrir este URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableHighlight onPress={handlePress}>{children}</TouchableHighlight>
  );
};

export default SocialLink;
