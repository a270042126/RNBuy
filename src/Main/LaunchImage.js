/**
 * Created by dd on 2017/5/17.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';

const Dimensions = require('Dimensions');
let {width,height} = Dimensions.get('window');

class LaunchImage extends Component {
    static  navigationOptions = {
        header: false
    }

    render() {
        return (
            <Image source={require('../images/launchimage.png')} resizeMode={Image.resizeMode.stretch}
                   style={styles.launchImageStyle}/>
        );
    }
}

const styles = StyleSheet.create({
    launchImageStyle:{
        width:width,
        height:height
    },
});

// 输出组件类
module.exports = LaunchImage;