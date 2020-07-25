import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import store from './store';
import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [appReady, setAppReady] = useState(false);

  const prepareResources = async () => {
    await Font.loadAsync({
      openSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
      openSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    setAppReady(true);
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.log(e);
      }
      prepareResources();
    })()
  }, []);

  if (!appReady) return null;

  return (
    <Provider store={store}>
      <MealsNavigator>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </MealsNavigator>
    </Provider>
  );
}
