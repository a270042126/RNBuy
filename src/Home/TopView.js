/**
 * Created by dd on 2017/5/18.
 */

import React,{Component} from  'react';
import {
    Dimensions,
    View,
    ScrollView,
    ListView,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import {TopListView} from './TopListView';
// 引入外部的json数据
let TopMenu = require('../LocalData/TopMenu.json');

let {width} = Dimensions.get('window');


export class TopView extends Component{

    constructor(props){
        super(props);
        this.state ={
            activePage: 0
        }
        this.onScrollAnimationEnd = this.onScrollAnimationEnd.bind(this);
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd = {this.onScrollAnimationEnd}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    }

    renderScrollItem(){
        let itemArr = [];
        // 颜色数组 ---> 数据数组
        let dataArr = TopMenu.data;
        for(let i = 0; i < dataArr.length; i++){
            itemArr.push(
                <TopListView key={i}
                             dataArr={dataArr[i]}
                />
            );
        }

        return itemArr;
    }

    renderIndicator(){
        let indicatorArr = [],style;

        // 遍历创建组件
        for(let i=0; i<2; i++){
            // 设置圆点的样式
            style = (i === this.state.activePage) ? {color:'orange'} :  {color:'gray'}
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25}, style]}>&bull;</Text>
            );
        }
        // 返回数组
        return indicatorArr;
    }

    onScrollAnimationEnd(e){
        // 求出当前的页码
        let currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);

        this.setState({activePage: currentPage});
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    indicatorViewStyle:{
        // 改变主轴的方向
        flexDirection:'row',
        // 水平居中
        justifyContent:'center'
    }
});