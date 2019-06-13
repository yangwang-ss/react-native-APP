import React,{Component} from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Home from '../home/home';
import Classify from '../classify/classify';
import Shoping from '../shoping/shoping';
import Personal from '../pesonal/personal'
import Ionicons from 'react-native-vector-icons/Ionicons'
const BottomNavigator = createBottomTabNavigator(
	{
			Home: {
					screen: Home,
					navigationOptions: {
							title: "首页",
							tabBarIcon:({ focused, horizontal, tintColor })=>{
									return <Ionicons name={'ios-home'} size={25} style={{color:tintColor}}/>
							}
					}
			},
			Classify: {
					screen: Classify,
					navigationOptions: {
							title: "分类",
							tabBarIcon:({ focused, horizontal, tintColor })=>{
									return <Ionicons name={'ios-heart'} size={25} style={{color:tintColor}}/>
							}
					}
			},
			Shoping: {
				screen: Shoping,
				navigationOptions: {
						title: "购物",
						tabBarIcon:({focused,horizontal,tintColor})=>{
								return <Ionicons name={'md-settings'} size={25} style={{color:tintColor}}/>
						}
				}
		},
			My: {
					screen: Personal,
					navigationOptions: {
							title: "我的",
							tabBarIcon:({focused,horizontal,tintColor})=>{
									return <Ionicons name={'logo-octocat'} size={25} style={{color:tintColor}}/>
							}
					}
			}, 
			
	},
	{
			tabBarOptions:{
					activeTintColor:"red"
			}
	}
)
export default BottomNavigator