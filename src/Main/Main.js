/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TabNavigator  } from 'react-navigation';

import {
    StyleSheet,
    Image,
    Platform,   // 判断当前运行的系统
} from 'react-native';


import {homeNavigator} from '../Home/Home';
const Shop = require('../Shop/Shop');
const Mine = require('../Mine/Mine');
const More = require('../More/More');





const TabNav = TabNavigator({
    Home:{
        screen:homeNavigator,
    },
    Shop:{
        screen:Shop,
    },
    Mine:{
        screen:Mine,
    },
    More:{
        screen:More,
    }
},{

    tabBarPosition:'bottom',
    tabBarOptions:{
        showIcon:true,
        labelStyle: {
            fontSize: 12,
            marginBottom:Platform.OS === 'ios' ? 2 : 0,
            marginTop:2,
        },
        activeTintColor:'orange',
        inactiveTintColor:'#868586',
        style: {
            backgroundColor: '#f7f7f7',
            borderTopWidth:1,
            borderTopColor:'#d0d0d0',
        },
        indicatorStyle:{
          height:0,
        },
    }
});
class Main extends Component {
    render() {
        return (
            <TabNav />
        );
    }
}



// 输出组件类
module.exports = Main;