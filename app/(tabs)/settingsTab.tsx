import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  const navigateToHome = () => {
    router.push("/");
  };

  const navigateToAbout = () => {
    router.push("/about");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Configure your app</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>App Settings</Text>
        <Text style={styles.contentText}>
          This is where you can configure various settings for your ExpoChat
          application. Settings like notifications, privacy, and app preferences
          would go here.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToHome}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToAbout}>
          <Text style={styles.buttonText}>Go to About</Text>
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
