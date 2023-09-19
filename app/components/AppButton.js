import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

const AppButton = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { ...style }]}>
      <AppText style={styles.buttonText}>{text}</AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.darkblue,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
