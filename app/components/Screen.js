import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";

import colors from "../config/colors";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.mediumblue,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  view: { flex: 1 },
});
