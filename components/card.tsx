import { cardProps } from "@/types/types";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export const Card: React.FC<cardProps> = ({
  title,
  description,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    gap: 10,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
});
