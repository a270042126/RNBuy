/**
 * Created by dd on 2017/5/17.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class Shop extends Component {
    static navigationOptions = {
        tabBarLabel: '商家',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/icon_tabbar_merchant_normal.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Shop
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    icon: {
        width: 26,
        height: 26,
    },
});

// 输出组件类
module.exports = Shop;