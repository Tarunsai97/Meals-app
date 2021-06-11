import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MEALS } from '../data/Data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
const MealDescription = (props) => {
  const mealId = props.navigation.getParam('mealId')
  const selectedId = MEALS.find((meal) => meal.id === mealId)
  return (
    <View style={styles.screen}>
      <Text>{selectedId.title}</Text>
    </View>
  )
}
MealDescription.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId')
  const selectedItem = MEALS.find((meal) => meal.id === mealId)
  return {
    headerTitle: selectedItem.title,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title='favourite'
            iconName='ios-star'
            onPress={() => {
              console.log('Marked as Favourites')
            }}
          />
        </HeaderButtons>
      )
    },
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default MealDescription
