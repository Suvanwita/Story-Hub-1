import * as React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export default class ReadStoryScreen extends React.Component{
  render(){
    return(
      <View>
      <Header backgroundColor='#F7BAC5'
       centerComponent={{text:'Story Hub',style:{fontSize:20}}}
      />
      <Text>Read a Story</Text>
      </View>
    );
  }
}