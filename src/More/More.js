/**
 * Created by dd on 2017/5/17.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import {CommonCell} from "./CommonCell";


class More extends Component {
    static navigationOptions = {
        tabBarLabel: '更多',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/icon_tabbar_misc.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
        title:'更多',
        headerTintColor:'#FFF',
        headerTitleStyle:{
            backgroundColor:'red',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{marginTop:20}}>
                        <CommonCell title="扫-扫"/>
                    </View>
                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="省流量模式"
                            isSwitch={true}
                        />
                        <CommonCell
                            title="消息提醒"
                        />
                        <CommonCell
                            title="邀请好友使用码团"
                        />
                        <CommonCell
                            title="清空缓存"
                            rightTitle="1.99M"
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="问卷调查"
                        />
                        <CommonCell
                            title="支付帮助"
                        />
                        <CommonCell
                            title="网络诊断"
                        />
                        <CommonCell
                            title="关于码团"
                        />
                        <CommonCell
                            title="我要应聘"
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="精品应用"
                        />
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    icon: {
        width: 26,
        height: 26,
    },
});

export const moreNavigator = StackNavigator({
    More:{
        screen:More,
    }
});