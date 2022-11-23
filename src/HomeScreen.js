import { FlatList, Image, StyleSheet, Text, TextInput, Touchable, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Card from './components/Card'

const HomeScreen = () => {

  let personName = "Pratham"
  const courses = [
    {name:"SSC"},
    {name:"UPSC"},
    {name:"Railway"}
  ]

  const recentList = [
    {name:"Recent Notes"},
    {name:"Recent Test Series"},
    {name:"Recent Live Class"}
  ]

  let imageURL = "https://ionicframework.com/docs/icons/logo-react-icon.png"

  const renderCourses = ({item}) =>{
    return(
      <View style={{marginHorizontal:10,}}>
        <Card>
              <Image source={{uri:imageURL}} style={styles.courseImage}/>
              <Text style={{color:'black'}}>{item.name}</Text>
        </Card>
      </View>
    )
  }

  const renderRecents = ({item})=>{
    return(
      <Card lineView = {true}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon  name="document-text-outline" size={30}  color={'teal'}/>
                <Text style={{fontSize:11,marginLeft:10,}}>{item.name}</Text>
            </View>
            <Icon  name="arrow-forward" size={25}  color={'teal'}/>

      </Card>
    )
  }

  return (
    <View style={styles.container}>

      <View style={styles.searchBox}>
        <Text style={styles.textSmall} >Hello,</Text>
          <Text style={styles.textLarge}>{personName}</Text>
        <View style={styles.searchBar}>
        <Card lineView = {true} >
          <TextInput placeholder='Search...' style={styles.search}/>
        </Card>  
        <TouchableWithoutFeedback>
            <View style={styles.searchButton}>
              <Icon name='search' color={'white'} size={30}/>
            </View>   
        </TouchableWithoutFeedback>
          
        </View>
      </View>
       

      <View>
          <View style = {styles.contentHeading}>
              <Text style={{color:'black',marginLeft:20}}>Courses</Text>
              <TouchableWithoutFeedback>
                <Text style={[styles.textSmall,{fontSize:10}]}>See All {">"}</Text>
              </TouchableWithoutFeedback>              
          </View>
          <FlatList data = {courses} renderItem={(item)=>renderCourses(item)} style={styles.coursesList} horizontal showsHorizontalScrollIndicator={false}/>
          
      </View>

     
          <View style = {styles.contentHeading}>
              <Text style={{color:'black',marginLeft:20}}>Recently learned</Text>
              <TouchableWithoutFeedback>
                <Text style={[styles.textSmall,{fontSize:10}]} >See All {">"}</Text>
              </TouchableWithoutFeedback>              
          </View>
        <FlatList data={recentList}  renderItem={(item)=>renderRecents(item)} showsHorizontalScrollIndicator={false} style={{marginHorizontal:20}}/>
   
     

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'white',
  },
    searchBar:{
        width:"80%",
        backgroundColor:'white',
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:18,
    },
    searchBox:{
      marginHorizontal:20,
      marginTop:35,
    },
    search:{
        width:'70%',
        fontSize:10,
    },
    searchButton:{
      backgroundColor:'#1EA1A1',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      height:45,
      width:45,
      marginLeft:10,
    },
    textSmall:{
      color:'gray',
      fontSize:10,
    },
    textLarge:{
      fontSize:22,
    },
    contentHeading:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:2,
      marginTop:10,
      marginRight:20,
    },
    coursesList:{
      height:170,
      paddingVertical:10,
    },
    courseImage:{
      height:50,
      width:50,   
      marginTop:20,
    },

    recentImage:{
      height:20,
      width:20, 
    },



})