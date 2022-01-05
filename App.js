import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens'
import {useEffect} from 'react';

enableScreens();

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  // if (!fontLoaded) {
  //   return (
  //     <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={(err) => console.log(err)} />
  //   );
  // }
  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
