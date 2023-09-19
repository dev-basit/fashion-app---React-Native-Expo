import React, { useState, createRef } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Swiper from "react-native-deck-swiper";

import Screen from "../components/Screen";
import { FashionCard } from "../components/card";
import AppText from "../components/AppText";
import Icon from "../components/Icon";
import { ListItem } from "../components/lists";
import Footer from "../components/Footer";
import colors from "../config/colors";

const HomeScreen = () => {
  const swiperRef = createRef();
  const [cards, setCards] = useState([
    {
      id: 1,
      image: require("../assets/fashion1.jpg"),
      name: "Skin dress",
    },
    {
      id: 2,
      image: require("../assets/fashion2.jpg"),
      name: "blue jeans",
    },
    {
      id: 3,
      image: require("../assets/fashion3.jpg"),
      name: "mufrel with hat",
    },
    {
      id: 4,
      image: require("../assets/fashion4.jpg"),
      name: "glasses",
    },
    {
      id: 5,
      image: require("../assets/fashion5.jpg"),
      name: "nice boots",
    },
  ]);

  const onSwipedLeft = (index) => {
    // Functionality for swiping left
    console.log("swiped left");
  };

  const onSwipedRight = (index) => {
    // Functionality for swiping right
    console.log("swiped right");
  };

  return (
    <Screen style={styles.container}>
      {/* <View style={styles.container}> */}
      {/* <AppText style={styles.cardHeader}>See the latest fashion here!</AppText> */}
      <View style={styles.card}>
        <Swiper
          ref={swiperRef}
          cards={cards}
          renderCard={(card) => <FashionCard card={card} />}
          cardIndex={0}
          onSwipedLeft={onSwipedLeft}
          onSwipedRight={onSwipedRight}
          verticalSwipe={false}
          stackSize={2}
          backgroundColor={colors.mediumblue}
          cardHorizontalMargin={0}
          cardVerticalMargin={0}
          overlayLabels={{
            left: {
              title: "LIKED IT",
              style: {
                ...styles.cardLeftLabel,
              },
            },
            right: {
              title: "NEXT ONE",
              style: {
                ...styles.cardRightLabel,
              },
            },
          }}
        />
      </View>
      <View style={styles.buttons}>
        <Icon
          name="cards-heart"
          backgroundColor={colors.red}
          size={90}
          onPress={() => swiperRef.current.swipeLeft()} // bug here, calling here as well as in the Icon component (this is custom component created by me)
        />
        <Icon
          name="tshirt-v"
          backgroundColor={colors.green}
          size={90}
          onPress={() => swiperRef.current.swipeRight()}
        />
      </View>
      <View style={styles.cardDescription}>
        <ScrollView>
          <ListItem
            image={require("../assets/person2.jpg")}
            title="asli studio"
            titleStyle={{ color: colors.darkblue }}
            style={styles.postedBy}
          />
          <AppText style={styles.cardDescriptionText}>
            Fashion is a form of self-expression and autonomy at a particular
            period and place and in a specific context, of clothing, footwear,
            lifestyle, accessories, makeup, hairstyle, and body posture. The
            term implies a look defined by the fashion industry as that which is
            trending. Fashion is a form of self-expression and autonomy at a
            particular period and place and in a specific context, of clothing,
            footwear, lifestyle, accessories, makeup, hairstyle, and body
            posture. The term implies a look defined by the fashion industry as
            that which is trending.
          </AppText>
        </ScrollView>
      </View>
      <Footer />
      {/* </View> */}
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    flex: 11,
    // height: "80%",
    overflow: "hidden",
    flexDirection: "row",
  },

  cardHeader: {
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    color: colors.darkblue,
    textAlign: "center",
  },
  cardRightLabel: {
    label: {
      backgroundColor: colors.green,
      color: colors.white,
      fontSize: 30,
      fontWeight: "bold",
    },
    wrapper: {
      position: "absolute",
      top: 350,
      left: 0,
      width: "40%",
    },
  },

  cardLeftLabel: {
    label: {
      backgroundColor: colors.red,
      color: colors.white,
      fontSize: 30,
      fontWeight: "bold",
    },
    wrapper: {
      position: "absolute",
      top: 350,
      right: 0,
      width: "40%",
    },
  },

  buttons: {
    flex: 1.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  postedBy: {
    borderBottomWidth: 2,
    borderBottomColor: colors.darkblue,
    paddingVertical: 2,
    // overflow: "hidden",
  },

  cardDescription: {
    borderColor: colors.darkblue,
    borderWidth: 2,
    borderRadius: 25,
    margin: "3%",
    flex: 3,
  },

  cardDescriptionText: { color: colors.black, margin: 10 },
});
