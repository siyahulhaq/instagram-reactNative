import React from "react";
import { Platform, SafeAreaView, StyleSheet} from "react-native";

import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";

import { useFonts } from "expo-font";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./Routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
        <StatusBar style='auto'/>
          <Routes />
        </SafeAreaView>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});