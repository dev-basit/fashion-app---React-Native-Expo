import React from "react";
import { View, Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Footer from "../components/Footer";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const WelcomeScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.headerText}>FashionTime</AppText>
      </View>
      <View style={styles.loginContainer}>
        {/* <AppText style={styles.loginContainerHeaderText}>FashionTime</AppText> */}
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/welcomeScreenLogo.jpg")}
          />
        </View>

        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <>
            <View style={styles.loginCredentials}>
              <AppFormField
                name="email"
                icon="email"
                placeholder="Email or Username"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="emailAddress"
              />

              <AppFormField
                name="password"
                icon="key"
                placeholder="Password"
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                secureTextEntry={true}
              />
            </View>

            <View style={styles.loginButtons}>
              <SubmitButton title="Log In" style={{ marginBottom: 10 }} />
              <SubmitButton title="Register" />

              <AppText style={styles.resetPassword}>
                Forgotten your password?
              </AppText>
            </View>
          </>
        </AppForm>
      </View>
    </Screen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightblue,
  },

  header: {
    // flex: 1,
    height: 50,
    backgroundColor: colors.darkblue,
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: { fontSize: 30, fontWeight: "bold" },

  loginContainer: {
    // flex: 1,
    margin: "5%",
    backgroundColor: colors.whiteblue,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.darkblue,
  },

  loginContainerHeaderText: {
    // flex: 1,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    margin: 5,
    color: "black",
  },

  loginCredentials: {
    // flex: 2,
    // backgroundColor: colors.darkblue,
    margin: 20,
  },

  logoContainer: {
    // flex: 3,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: { width: 180, height: 180, borderRadius: 90 },

  input: {
    // height: 50,
    // margin: 5,
    // marginHorizontal: 25,
    // borderBottomWidth: 1,
    // padding: 5,
    // fontSize: 15,
  },

  loginButtons: {
    // flex: 2,
    margin: 20,
  },

  resetPassword: { textAlign: "center", marginTop: 20, color: "black" },
});
