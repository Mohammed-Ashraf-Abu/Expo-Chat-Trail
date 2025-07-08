import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <>
      <Stack>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen
          name="index"
          options={{
            title: "Chat App",
            headerShown: true,
            headerStyle: {
              backgroundColor: "cyan",
            },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name="chatBot"
          options={{
            title: "Chat Bot",
            headerBackTitle: "Back",
            headerShown: true,
            headerStyle: {
              backgroundColor: "cyan",
            },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name="chatList"
          options={{
            title: "Chat List",
            headerBackTitle: "Back",
            headerShown: true,
            headerStyle: {
              backgroundColor: "cyan",
            },
            headerTintColor: "black",
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
