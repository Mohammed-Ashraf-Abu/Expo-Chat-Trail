import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AboutScreen() {
  const navigateToHome = () => {
    router.push("/");
  };

  const navigateToSettings = () => {
    router.push("/settings");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>About ExpoChat</Text>
        <Text style={styles.subtitle}>Version 1.0.0</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>About This App</Text>
        <Text style={styles.contentText}>
          ExpoChat is a simple chat application built with React Native and Expo
          Router. It demonstrates basic navigation between screens using both
          tab navigation and programmatic navigation.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToHome}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToSettings}>
          <Text style={styles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>
      </View>
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
  contentContainer: {
    gap: 16,
    marginBottom: 40,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  contentText: {
    fontSize: 14,
    lineHeight: 20,
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
