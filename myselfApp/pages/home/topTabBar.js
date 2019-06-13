import { createMaterialTopTabNavigator ,createAppContainer,createStackNavigator} from 'react-navigation';
import message from './tabBarComponents/message'
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button
} from 'react-native';
class HomeScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View >
            <Text>dhfjhdkfhd</Text>
          </View>
        </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
    );
  }
}
class SettingsScreen2 extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
    );
  }
}
class SettingsScreen3 extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
    );
  }
}
class SettingsScreen4 extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
    );
  }
}
class SettingsScreen5 extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
    );
  }
}
class SettingsScreen6 extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
    );
  }
}

const App = createMaterialTopTabNavigator({
  Test1: { screen: HomeScreen},
  Test2: { screen: SettingsScreen},
  Test2: { screen: SettingsScreen},
  Test3: { screen: SettingsScreen2 },
  Test4: { screen: SettingsScreen3},
  Test5: { screen: SettingsScreen4},
  Test6: { screen: SettingsScreen5},
  Test7: { screen: SettingsScreen6},

},{
  tabBarOptions: {
    tabStyle: {
        width: 70
    },
    swipeEnabled:false,
    upperCaseLabel: false,//是否使标签大写，默认为true
    scrollEnabled: true,//是否支持 选项卡滚动，默认false
    animationEnabled:false,//是否允许动画切换
    // activeTintColor: 'white',//label和icon的前景色 活跃状态下（选中）
    // inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
    style: {
        backgroundColor: '#678',//TabBar 的背景颜色
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white',
    },//标签指示器的样式
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
    },//文字的样式
},
});

const TopBar = createAppContainer(createStackNavigator({
  app: {
    screen: App,
    navigationOptions: {
      title: 'Screen title',
      header:null
    },
  },
},
{
  initalRouteName:'app',
  headerLayoutPreset: "center",
 
}));
export default TopBar;