import React from "react";
import { Image, StyleSheet } from "react-native";

import Screen from "../Screen";
import AppText from "../AppText";
import defaultStyles from "../../config/styles";

const FashionCard = ({ card, index }) => {
  return (
    <Screen style={styles.card}>
      <Image source={card.image} style={styles.image} />
      <AppText style={styles.name}>{card.name}</AppText>
    </Screen>
  );
};

export default FashionCard;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
  },
  image: {
    borderColor: defaultStyles.colors.darkblue,
    borderWidth: 2,
    width: "95%",
    borderRadius: 25,
    height: "70%",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: defaultStyles.colors.darkblue,
    marginTop: 10,
  },
});
