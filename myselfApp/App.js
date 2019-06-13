import React from 'react'
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation'
import BottomNavigator from './pages/Main/Main'
import Classify from './pages/classify/classify';

const StackNavigator = createStackNavigator(
    {
        Home: {
            screen: BottomNavigator,
            navigationOptions: {
                title: "首页",
                header:null,
            }
        },
        Classify:{
            screen:Classify,
            navigationOptions:{
                title:'分类'
            }
        }
    },
    {
        initialRouteName: "Home",
        headerLayoutPreset: "center"
    }
)
export default createAppContainer(StackNavigator)
