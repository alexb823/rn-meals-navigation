import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {enableScreens} from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  enableScreens();
  const [appReady, setAppReady] = useState(false);

  const prepareResources = async () => {
    await Font.loadAsync({
      openSans: require('./assets/fonts/OpenSans-Regular.ttf'),
      openSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    });
    setAppReady(true);
  };

  useEffect(() => {
    if (!appReady) {
      try {
        SplashScreen.preventAutoHideAsync();
      } catch (error) {
        console.warn(error);
      }
      prepareResources();
    } else {
      SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) return null;

  return (
    <MealsNavigator>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </MealsNavigator>
  );
}
