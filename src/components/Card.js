import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = (props) => {
  return (
    <View style={!props.lineView? styles.container : styles.recent }>
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
    elevation:10,
    shadowOffset: {width: -2, height: 4},  
    shadowColor: 'black',  
    shadowOpacity: 0.9,  
    shadowRadius: 1, 
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:10,
    padding:5,
  },
  recent:{
    height:45,
    width:'100%',
    backgroundColor:'white',
    borderRadius:10,
    flexDirection:'row',
    elevation:2,
    shadowOffset: {width: -2, height: 4},  
    shadowColor: 'black',  
    shadowOpacity: 0.9,  
    shadowRadius: 4, 
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:5,
    paddingHorizontal:10,
  }

})