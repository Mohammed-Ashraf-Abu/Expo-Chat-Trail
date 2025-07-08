import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <>
      <Stack>
        {/* Tab-based navigation (commented out) */}
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}

        {/* Stack-based navigation (new approach) */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: true,
            // headerStyle: {
            //   backgroundColor: "#007AFF",
            // },
            // headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            title: "About",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#007AFF",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#007AFF",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
