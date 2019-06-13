
import {createStackNavigator,createAppContainer} from 'react-navigation'
import {View,Image,StatusBar} from 'react-native';
import TabNavigator from '../Main/Main'
import Classify from '../classify/classify'
const RootStacks = createStackNavigator({
    Home:{
        screen:TabNavigator,
        navigationOptions: {
            //header: null  //顶部导航很多都会自己自定义，这里就为空
        }
    }
   
},{
    initalRouteName:'Home',
    defaultNavigationOptions: () => {
        return {
          headerStyle: {
            paddingTop,
            height: Platform.OS === 'ios' ? headerHeight - paddingTop : headerHeight,
            borderBottomWidth: 1,
            borderBottomColor: '#f2f2f2',
            elevation: 0,
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            flex: 1,
          },
          headerRight: React.createElement(View, null, null),
          headerBackTitle: null,
        };
      },
    headerLayoutPreset: "center",
   
})
export default createAppContainer(RootStacks)