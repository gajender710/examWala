import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BagScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BagScreen</Text>
    </View>
  )
}

export default BagScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  }
})