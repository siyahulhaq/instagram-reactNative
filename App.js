import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";

import { AppLoading } from "expo";

import { useFonts } from "expo-font";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./Routes";
import store from "./Redux/store";
import { Provider } from "react-redux";

export default function App() {
  //importing fonts in expo
  let [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>{/* Redux Provider */}
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <Routes />
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
