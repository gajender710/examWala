import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LocationScreen</Text>
    </View>
  )
}

export default LocationScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  }
})