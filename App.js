import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MealFavTabNavigation from './navigations/MealsNavigation'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { enableScreens } from 'react-native-screens'

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  enableScreens
  const [dataLoaded, setDataLoaded] = React.useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={setDataLoaded(true)}
        onError={(err) => {
          console.log(err)
        }}
      />
    )
  }
  return <MealFavTabNavigation />
}
