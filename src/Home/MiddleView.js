/**
 * Created by dd on 2017/5/18.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

const Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');


// 引入外部的组件类
const CommonView = require('./MiddleCommonView');

// 引入外部数据
const TopMiddleData = require('../LocalData/HomeTopMiddleLeft.json');