import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import GridItem from '../components/GridItem'
import Colors from '../constants/Colors'
import CATEGORIES from '../data/Data'

const CategoriesScreen = (props) => {
  const handleRender = (itemData) => {
    return (
      <GridItem
        title={itemData.item.title}
        onClick={() =>
          props.navigation.navigate({
            routeName: 'CategoriesMeals',
            params: {
              catId: itemData.item.id,
            },
          })
        }
        color={itemData.item.color}
      />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={handleRender}
      keyExtractor={(item, index) => item.id}
      numColumns={2}
    />
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
}
const styles = StyleSheet.create({})
export default CategoriesScreen
