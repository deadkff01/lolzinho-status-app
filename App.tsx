import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./src/screens/Main";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "LolzinhoStatus",
          headerStyle: {
            backgroundColor: "#101010",
            borderBottomColor: "#101010",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 30,
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
