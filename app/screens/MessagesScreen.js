import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import Footer from "../components/Footer";

const initialMessages = [
  {
    id: 1,
    title: "Sana",
    description: "they are giving discount",
    image: require("../assets/person1.jpg"),
  },
  {
    id: 2,
    title: "Waqar",
    description: "check this jeans.",
    image: require("../assets/person2.jpg"),
  },
  {
    id: 3,
    title: "Maria",
    description: "let's go for shopping.",
    image: require("../assets/person3.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={initialMessages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/person2.jpg"),
            },
          ]);
        }}
      />
      <Footer />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
