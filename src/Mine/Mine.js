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

import {HeaderView} from './HeaderView';
import {MyCell} from './MyCell';
import {MineMiddleView} from './MineMiddleView';

class Mine extends Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/icon_tabbar_mine.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
        header:false,
        title:'我的',
    }
    render() {
        return (
            <ScrollView style={styles.scrollViewStyle}>
                {/*头部的View*/}
                <HeaderView />
                <View>
                    <MyCell
                        leftIconName={require('../images/collect.png')}
                        leftTitle="我的订单"
                        rightTitle="查看全部订单"
                    />
                    <MineMiddleView />
                </View>
                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName={require('../images/draft.png')}
                        leftTitle="小码哥钱包"
                        rightTitle="账户余额:¥100"
                    />

                    <MyCell
                        leftIconName={require('../images/like.png')}
                        leftTitle="抵用券"
                        rightTitle="10张"
                    />
                </View>


                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName={require('../images/card.png')}
                        leftTitle="积分商城"
                    />
                </View>

                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName={require('../images/new_friend.png')}
                        leftTitle="今日推荐"
                        rightIconName={require('../images/me_new.png')}
                    />
                </View>

                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName={require('../images/pay.png')}
                        leftTitle="我要合作"
                        rightTitle="轻松开店,招财进宝"
                    />
                </View>
            </ScrollView>
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

    scrollViewStyle:{

    }
});

export const mineNavigator = StackNavigator({
    Mine:{
        screen:Mine,
    }
});