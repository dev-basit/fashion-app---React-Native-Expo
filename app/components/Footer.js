import { View, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <MaterialIcons name="chat" size={50} color="white" />
      <MaterialCommunityIcons name="chat" size={50} color="white" />
      <MaterialIcons name="camera" size={50} color="white" />
      <MaterialCommunityIcons name="rss" size={50} color="white" />
      <MaterialCommunityIcons name="account" size={50} color="white" />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: colors.darkblue,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
