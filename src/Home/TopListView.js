/**
 * Created by dd on 2017/5/18.
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';

const Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');

// 全局的变量
const cols = 5;
const cellW = Platform.OS == 'ios' ? 70: 60;
const cellH = 70;
const vMargin = (width - cellW * cols) / (cols + 1);

export class TopListView extends Component{
    constructor(props){
        super(props);

        let ds = new ListView.DataSource({rowHasChanged:(row1,row2)=> row1 !== row2});
        this.state = {
            dataSource:ds.cloneWithRows(this.props.dataArr)
        }
    }

    render(){
        return(
            <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    }

    renderRow(rowdata){
        return(
            <TouchableOpacity onPress={()=>{alert('0')}}>
                <View style={styles.cellStyle}>
                    <Image source={{uri: rowdata.image}} style={{width:52, height:52}}/>
                    <Text style={styles.titleStyle}>{rowdata.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

TopListView.defaultProps = {
    dataArr: []
}

const styles = StyleSheet.create({
    contentViewStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        // 多个cell在同一行显示
        flexWrap:'wrap',
        // 宽度
        width:width
    },

    cellStyle:{
        // backgroundColor:'red',
        width:cellW,
        height:cellH,
        // 水平居中和垂直居中
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:vMargin
    },

    titleStyle:{
        fontSize:Platform.OS == 'ios' ? 14 : 12,
        color:'gray'
    }
});