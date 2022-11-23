import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = () => {
  return (
    <View style={styles.contianer}>
      <View  style={styles.heading}>
        <Text style={{color:'grey',fontWeight:'600'}}>Exam </Text>
        <Text style={{color:'teal'}}>Wala</Text>
      </View>
      
      <View style={styles.navPanel}>
        <Icon  name="menu" size={35}  color={'black'}/>
        <Image source={{uri:"https://ionicframework.com/docs/icons/logo-react-icon.png"}} style={styles.adminImage}/>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  contianer:{
    backgroundColor:'white',
    paddingHorizontal:20,
    
  },
  heading:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  navPanel:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  adminImage:{
    height:40,
    width:40,
  },
})