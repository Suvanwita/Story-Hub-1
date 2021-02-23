import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Image} from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteStory extends React.Component{
  constructor(){
    super();
    this.state={
      
    }
  }

  
 

  render(){
    return(
      <View>
      <Header backgroundColor='#F7BAC5'
       centerComponent={{text:'Story Hub',style:{fontSize:20}}}
      />
      <TextInput placeholder="Story Title" style={{borderWidth:2,margin:5,padding:5}}/>
      <TextInput placeholder="Author" style={{borderWidth:2,margin:5,padding:5}}/>
      <TextInput placeholder="Write a story" style={{borderWidth:2,margin:5,padding:5,height:350}}  multiline/>
      <TouchableOpacity style={{backgroundColor:"#f7bac5",alignSelf:'center',padding:6,margin:5}}>
      <Text>Submit</Text>
      </TouchableOpacity>
      </View>
    );
   }

}