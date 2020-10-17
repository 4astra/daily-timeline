import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from "react-redux";
import store from "./src/store";
import Colors from './src/constants/Colors';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation></Navigation>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackgroundColor
  },
})
