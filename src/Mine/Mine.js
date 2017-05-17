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
import {StackNavigator} from 'react-navigation';

class Mine extends Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/icon_tabbar_mine.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Mine
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
export const mineNavigator = StackNavigator({
    Mine:{
        screen:Mine,
    }
});