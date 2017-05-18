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


const MiddleData = require('./MiddleData.json');

export class MineMiddleView extends Component{
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    }

    renderAllItem(){
        // 定义组件数组
        let itemArr = [];
        // 遍历
        for(let i=0; i<MiddleData.length; i++){
            // 取出单独的数据
            let data = MiddleData[i];
            // 创建组件装入数组
            itemArr.push(
                <InnerView key={i} iconName={'../images/'+data.iconName} title={data.title}/>
            );
        }
        // 返回
        return itemArr;
    }
}

class InnerView extends Component{
    render(){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('0')}}>
                <View style={styles.innerViewStyle}>
                    <Image source={require('../images/order1.png')} style={{width:40, height:30, marginBottom:3}}/>
                    <Text style={{color:'gray'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

InnerView.defaultProps = {
    iconName: '',
    title:''
}

const styles = StyleSheet.create({
    container: {
        // 设置主轴的方向
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: 'white',
        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },

    innerViewStyle:{
        width:70,
        height:70,

        // 水平和垂直居中
        justifyContent:'center',
        alignItems:'center'
    }
});
