import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = (props) => {
  return (
    <View  style={[styles.container,props.lineView && styles.recent]}>
      {props.children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container:{
    height:130,
    width:110,
    backgroundColor:'white',
    borderRadius:10,
    elevation:8,
    shadowOffset: {width: -10, height: 10},  
    shadowColor: '#000000',  
    shadowOpacity: 0.9,  
    shadowRadius: 1, 
    justifyContent:'space-between',
    alignItems:'center',
    padding:5,
  },
  recent:{
    height:45,
    width:'100%',
    flexDirection:'row',
    elevation:2,
    marginVertical:5,
    paddingHorizontal:10,
  }

})