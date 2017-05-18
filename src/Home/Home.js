/**
 * Created by dd on 2017/5/17.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    ScrollView,
    TextInput,
    Button,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import {StackNavigator} from  'react-navigation';
let {width, height} = Dimensions.get('window');

import {TopView} from './TopView';

class Home extends Component {
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/icon_tabbar_homepage.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),

        header:false,
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView>
                    <TopView/>
                </ScrollView>
            </View>
        );
    }

    // 首页的导航条
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                <Button title="广州" onPress={this.pushToDetail}/>
                <TextInput placeholder="输入商家, 品类, 商圈" style={styles.topInputStyle}
                           underlineColorAndroid='transparent'
                />
                <TouchableOpacity onPress={()=>{alert("点击了")}}>
                    <Image source={require('../images/icon_homepage_scan.png')} style={styles.navRightImgStyle}/>
                </TouchableOpacity>
            </View>

        );
    }

    pushToDetail(){
        alert("点击了");
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    icon: {
        width: 26,
        height: 26,
    },
    navBarStyle:{
        height:Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // 设置主轴的对齐方式
        justifyContent:'space-around',
    },
    topInputStyle:{
        width:width * 0.71,
        height:Platform.OS == 'ios' ? 35 : 30,
        backgroundColor:'#FFF',
        borderRadius:17,
        paddingLeft:10,
        marginTop:Platform.OS == 'ios' ? 18 : 0,
    },
    navRightImgStyle:{
        width:Platform.OS == 'ios' ? 28: 24,
        height:Platform.OS == 'ios' ? 28: 24
    }
});

export const homeNavigator = StackNavigator({
    Home:{
        screen:Home,
    }
});