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

class More extends Component {
    static navigationOptions = {
        tabBarLabel: '更多',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/icon_tabbar_misc.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    More
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
module.exports = More;