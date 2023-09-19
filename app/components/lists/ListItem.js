import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import colors from "../../config/colors";

const ListItem = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
  style,
  titleStyle,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.whiteblue} onPress={onPress}>
        <View style={[styles.container, { ...style }]}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.details}>
            <AppText
              style={[{ ...styles.title }, { ...titleStyle }]}
              numberOfLines={1}
            >
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.darkblue}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },

  image: { width: 100, height: 100, borderRadius: 50 },

  details: { margin: 15, flex: 1, justifyContent: "center" },

  title: { color: colors.black, fontWeight: "bold", fontSize: 22 },

  subTitle: { color: colors.medium, fontStyle: "italic" },
});
