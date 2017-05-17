/**
 * Created by dd on 2017/5/17.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import {StackNavigator} from  'react-navigation';

export const homeNavigator = StackNavigator({
    Home:{
        screen:Home,
    }
});

class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Home
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

