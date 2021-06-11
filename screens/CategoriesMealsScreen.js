import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import MealItem from '../components/MealItems'
import CATEGORIES, { MEALS } from '../data/Data'

const CategoriesMealsScreen = (props) => {
  const catID = props.navigation.getParam('catId')
  const selectedItems = CATEGORIES.find((item) => item.id === catID)

  const displayedItems = MEALS.filter(
    (items) => items.categoryIds.indexOf(catID) >= 0
  )

  const handleRender = (itemData) => {
    return (
      <MealItem
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealsDescription',
            params: {
              mealId: itemData.item.id,
            },
          })
        }}
        title={itemData.item.title}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedItems}
        keyExtractor={(item, index) => item.id}
        renderItem={handleRender}
        style={{ width: '100%' }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

CategoriesMealsScreen.navigationOptions = (navigationData) => {
  const catID = navigationData.navigation.getParam('catId')
  const selectedItems = CATEGORIES.find((item) => item.id === catID)
  return {
    headerTitle: selectedItems.title,
  }
}

export default CategoriesMealsScreen
