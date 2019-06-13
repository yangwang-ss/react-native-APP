import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import React,{Component} from 'react';
import {View,Image,Text,StyleSheet,WebView} from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import SearchHeader from '../components/searchHeader';
import TopBar from './topTabBar'
export default class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<View style={{flex:1}}>
            <SearchHeader/>
            <TopBar/>
            {/* <ScrollableTabView
                    renderTabBar={() => <DefaultTabBar underlineHeight={2} textStyle={{ fontSize: 13, marginTop: 6 }} style={{ height: 30 }}
                        />}
                    tabBarBackgroundColor="#fcfcfc"
                    tabBarUnderlineColor="red"
                    tabBarActiveTextColor="red"
                    tabBarInactiveTextColor="gray"
                    tabBarPosition='top'
                    >
                    <View tabLabel="首页" style={styles.center}>
                        <Text>首页</Text>
                    </View>

                    <View tabLabel="海外购" style={styles.center}>
                        <Text>海外购</Text>
                    </View>
                    <View tabLabel="分享购" style={styles.center}>
                        <WebView style={styles.webview_style}
                            source={{ url: 'http://m.yougou.com/p-7864a7fa0bd24384b8871c8375a08060' }}                     
                            domStorageEnabled={true}
                            javaScriptEnabled={true}
                            >
                        </WebView>
                    </View>
            </ScrollableTabView> */}
        </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        top:20,

        backgroundColor: 'rgb(240, 240, 240)'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(240, 240, 240)'

    },
    // webview_style:{
    //     height:Common.window.height-90-60,
    //     width:Common.window.width,
    // }
});