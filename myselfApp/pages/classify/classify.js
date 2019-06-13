import React,{Component} from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
export default class Classify extends Component{
    static navigationOptions = {
        title: '分类',
      };
 constructor(props){
    super(props)
    this.state = {
     
    }
 }
 render(){
     return(<View>
         <Text>分类</Text>
     </View>)
 }
}