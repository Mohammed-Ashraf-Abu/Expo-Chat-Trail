import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="indexTab"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 24 }}>🏠</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="aboutTab"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 24 }}>ℹ️</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="settingsTab"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 24 }}>⚙️</Text>
          ),
        }}
      />
    </Tabs>
  );
}
