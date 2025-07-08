import { StyleSheet, Text, View } from "react-native";

export default function ChatBot() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat Bot</Text>
      <Text style={styles.subtitle}>Chat functionality coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    textAlign: "center",
  },
});
