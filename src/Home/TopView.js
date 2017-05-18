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
        let colorArr = ['red', 'green'];
        for(let i = 0; i < colorArr.length; i++){
            itemArr.push(
                <View key={i} style={{backgroundColor:colorArr[i], width:width,height:120}}>
                    <Text>{i}</Text>
                </View>
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