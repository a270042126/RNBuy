/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TabNavigator  } from 'react-navigation';


const Home = require('../Home/Home');
const Shop = require('../Shop/Shop');
const Mine = require('../Mine/Mine');
const More = require('../More/More');


const TabNav = TabNavigator({
    Home:{
        screen:Home,
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