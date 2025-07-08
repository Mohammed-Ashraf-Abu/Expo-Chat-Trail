import { Card } from "@/components/card";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const navigateToChatBot = () => {
    // Stack-based navigation - direct paths
    router.push("/chatBot");
  };

  const navigateToChatList = () => {
    // Stack-based navigation - direct paths
    router.push("/chatList");
  };
  const list = [
    {
      title: "ChatBot",
      description: "Wellcome to ChatBot",
      image: require("../assets/images/chatBot.png"),
      onPress: navigateToChatBot,
    },
    {
      title: "Chat List",
      description: "Wellcome to Chats",
      image: require("../assets/images/chatBot.png"),
      onPress: navigateToChatList,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Wellcome to app </Text>
        <Text style={styles.subtitle}>
          Your simple poc to learn expo and chat SDK
        </Text>
      </View>
      {list.map((item) => (
        <Card key={item.title} {...item} onPress={item.onPress} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
    opacity: 0.7,
  },
});
