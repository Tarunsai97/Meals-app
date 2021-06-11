import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import MealDescription from '../screens/MealDescription'
import Colors from '../constants/Colors'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FavouriteScreen from '../screens/FavouritesScreen'
import { Ionicons } from '@expo/vector-icons'

const MealsNavigation = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoriesMeals: CategoriesMealsScreen,
    MealsDescription: {
      screen: MealDescription,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.secondaryColor,
      },
      headerTintColor: Colors.primaryColor,
      headerTitleAlign: 'center',
    },
  }
)

const MealFavTabNavigation = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigation,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name='ios-restaurant' color='blue' size={25} />
        },
      },
    },
    Favouites: {
      screen: FavouriteScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name='ios-star' color='blue' size={25} />
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
    },
  }
)

export default createAppContainer(MealFavTabNavigation)
