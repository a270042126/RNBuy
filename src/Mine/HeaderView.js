/**
 * Created by dd on 2017/5/18.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Platform,
    Text,
    TouchableOpacity
} from 'react-native';

let {width} = Dimensions.get('window');

export class HeaderView extends Component{

    render(){
        return(
            <View style={styles.container}>
                {/*上部分*/}
                {this.renderTopView()}
                {/*下部分*/}
                {this.renderBottomView()}
            </View>
        );
    }

    /**--上部分--**/
    renderTopView(){
        return(
            <View style={styles.topViewStyle}>
                <Image source={require('../images/see.png')} style={styles.leftIconStyle}/>
                <View style={styles.centerViewStyle}>
                    <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>小码哥电商</Text>
                    <Image source={require('../images/avatar_vip.png')} style={{width:17, height:17}}/>
                </View>
                <Image source={require('../images/icon_cell_rightarrow.png')} style={{width:8, height:13, marginRight:8}}/>
            </View>
        );
    }
    /**--下部分--**/
    renderBottomView() {
        return (
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        );
    }

    renderBottomItem(){
        let itemArr = [];
        let data = [{'number':'100', 'title':'码哥券'},{'number':'12', 'title':'评价'},{'number':'50', 'title':'收藏'}];
        for(let i = 0; i < data.length; i++){
            let item = data[i];
            itemArr.push(
                <TouchableOpacity key={i}>
                    <View style={styles.bottomInnerViewStyle}>
                        <Text style={{color:'white'}}>{item.number}</Text>
                        <Text style={{color:'white'}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:150,
        backgroundColor:'rgba(255,96,0,1.0)'
    },

    topViewStyle:{
        flexDirection:'row',
        // 设置侧轴的对齐方式
        alignItems:'center',
        // 设置主轴的对齐方式
        justifyContent:'space-around',
        marginTop: 20,
    },

    leftIconStyle:{
        width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)'
    },
    centerViewStyle:{
        flexDirection:'row',
        width:width * 0.72
    },
    bottomViewStyle:{
        flexDirection:'row',
        // 绝对定位
        position:'absolute',
        bottom:0
    },
    bottomInnerViewStyle:{
        width:(width/3)+1,
        height:40,
        backgroundColor:'rgba(255,255,255,0.4)',

        justifyContent:'center',
        alignItems:'center',

        borderRightWidth:1,
        borderRightColor:'white'
    }
});