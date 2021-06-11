import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native'

const GridItem = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onClick}
      style={[styles.gridItem, { backgroundColor: props.color }]}
    >
      <View>
        <Text style={styles.text} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  text: {
    fontSize: 15,
    color: 'black',
    fontWeight: '10',
    marginTop: '20%',
    marginLeft: '25%',
    textAlign: 'right',
    fontWeight: '500',
  },
  container: {
    flex: 1,
  },
})

export default GridItem
