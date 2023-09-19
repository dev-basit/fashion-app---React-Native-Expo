import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import { FashionCardDetails } from "../components/card";

const cards = [
  {
    id: 1,
    image: require("../assets/fashion1.jpg"),
    name: "Skin dress",
    desc: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture. The term implies a look defined by the fashion industry as that which is trending. Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture. The term implies a look defined by the fashion industry as that which is trending.",
  },
  {
    id: 2,
    image: require("../assets/fashion2.jpg"),
    name: "blue jeans",
    desc: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture. The term implies a look defined by the fashion industry as that which is trending. Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture. The term implies a look defined by the fashion industry as that which is trending.",
  },
  {
    id: 3,
    image: require("../assets/fashion3.jpg"),
    name: "mufrel with hat",
    desc: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture. The term implies a look defined by the fashion industry as that which is trending. Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture. The term implies a look defined by the fashion industry as that which is trending.",
  },
  {
    id: 4,
    image: require("../assets/fashion4.jpg"),
    name: "glasses",
    desc: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture. The term implies a look defined by the fashion industry as that which is trending. Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture. The term implies a look defined by the fashion industry as that which is trending.",
  },
  {
    id: 5,
    image: require("../assets/fashion5.jpg"),
    name: "nice boots",
    desc: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture. The term implies a look defined by the fashion industry as that which is trending. Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture. The term implies a look defined by the fashion industry as that which is trending.",
  },
];

const TopPicksScreen = () => {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(card) => card.id.toString()}
        renderItem={({ item }) => (
          <FashionCardDetails
            title={item.name}
            subTitle={item.desc}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default TopPicksScreen;

const styles = StyleSheet.create({
  container: { padding: 10 },
});
