import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import { ListItem, ListItemSeparator } from "../components/lists";
import Icon from "../components/Icon";
import Footer from "../components/Footer";
import colors from "../config/colors";

const menuItems = [
  {
    title: "Edit profile",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.lightblue,
    },
  },
  {
    title: "Notifications settings",
    icon: {
      name: "email",
      backgroundColor: colors.lightblue,
    },
  },
  {
    title: "Privacy",
    icon: {
      name: "account-lock",
      backgroundColor: colors.lightblue,
    },
  },
  {
    title: "Info",
    icon: {
      name: "information",
      backgroundColor: colors.lightblue,
    },
  },
  {
    title: "Terms & conditions",
    icon: {
      name: "information-variant",
      backgroundColor: colors.lightblue,
    },
  },
  {
    title: "Log Out",
    icon: {
      name: "logout",
      backgroundColor: colors.lightblue,
    },
  },
];

const ProfileScreen = () => {
  return (
    <Screen style={{ flex: 1 }}>
      <ListItem
        title="asli studio"
        subTitle="dev.basit2020@gmail.com"
        image={require("../assets/person2.jpg")}
      />

      <FlatList
        style={styles.settings}
        data={menuItems}
        keyExtractor={(menuItem) => menuItem.title}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            IconComponent={
              <Icon
                name={item.icon.name}
                backgroundColor={item.icon.backgroundColor}
              />
            }
          />
        )}
      />

      <Footer />
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  settings: { flex: 1, marginVertical: 10 },
});
