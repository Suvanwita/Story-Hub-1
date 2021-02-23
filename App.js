import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './Screens/WriteStory';
import ReadStoryScreen from './Screens/ReadStory';

export default function App() {
  return (
     <AppContainer/>
  );
}


const TabNavigator= createBottomTabNavigator(
  {
    WriteStory:{screen:WriteStoryScreen},
    ReadStory:{screen:ReadStoryScreen}
  },
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName
      if(routeName==="WriteStory"){
        return(
          <Image source={require('./assets/write.png')} style={{width:30,height:30,padding:5,margin:5}} />
        )
      }else if(routeName==="ReadStory"){
        return(
          <Image source={require('./assets/read.png')} style={{width:30,height:30,padding:5,margin:5}} />
        )
      }
    }
  })
}
)


const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  
 
});
