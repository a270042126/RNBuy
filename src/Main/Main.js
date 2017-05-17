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
import {shopNavigator} from '../Shop/Shop';
import {mineNavigator} from '../Mine/Mine';
import {moreNavigator} from '../More/More';


const TabNav = TabNavigator({
    Home:{
        screen:homeNavigator,
    },
    Shop:{
        screen:shopNavigator,
    },
    Mine:{
        screen:mineNavigator,
    },
    More:{
        screen:moreNavigator,
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