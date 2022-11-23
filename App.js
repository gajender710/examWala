
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomeScreen from './src/HomeScreen';
import Header from './src/components/Header';
import BagScreen from './src/BagScreen';
import LocationScreen from './src/LocationScreen';

const App = ()  => {

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{tabBarShowLabel:false,header:()=><Header/>  ,tabBarStyle:{borderTopWidth:0,elevation:0}}}  initialRouteName={'HomeScreen'}>
        <Tab.Screen name="LocationScreen"  component={LocationScreen} options={{title:"",tabBarIcon:({focused})=><Icon  name="location" size={35}  color={focused? 'black': 'grey'}/> ,tabBarActiveTintColor:"pink"}} />
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarIcon:({focused})=><Icon  name="home" size={35}  color={focused? 'black': 'grey'} />}}/>
        <Tab.Screen name="BagScreen" component={BagScreen} options={{tabBarIcon:({focused})=><Icon  name="logo-bitbucket" size={35} color={focused? 'black': 'grey'}  />}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};



export default App;
