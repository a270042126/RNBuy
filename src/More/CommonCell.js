/**
 * Created by dd on 2017/5/18.
 */

import React,{Component} from  'react';
import {
    View,
    TouchableOpacity,
    Platform,
    Text,
    Switch,
    StyleSheet,
    Image
} from 'react-native';

export class CommonCell extends Component{



    constructor(props){
        super(props)
        this.state ={
            isOn:false
        }
    }

    render(){
        return(
            <TouchableOpacity>
                <View style={styles.container}>
                    {/*左边*/}
                    <Text style={{marginLeft:8}}>{this.props.title}</Text>
                    {/*右边*/}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    }

    // cell右边显示的内容
    renderRightView(){
        if(this.props.isSwitch){
            return(
                <Switch value={this.state.isOn == true} onValueChange={()=>{
                    this.setState({isOn:!this.state.isOn});
                }} style={{marginRight:8}}/>
            );
        }else {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {this.rightTitle()}
                    <Image source={require('../images/icon_cell_rightarrow.png')} style={{width:8, height:13, marginRight:8}}/>
                </View>
            );
        }
    }

    rightTitle(){
        if(this.props.rightTitle.length > 0){
            return(
                <Text style={{color:'gray', marginRight:3}}>
                    {this.props.rightTitle}
                </Text>
            );
        }
    }
}

CommonCell.defaultProps = {
    title:'',// 标题
    isSwitch:false,// 是否展示开关
    rightTitle:''
}


const styles = StyleSheet.create({
    container:{
        height:Platform.OS == 'ios' ? 40: 30,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,

        flexDirection:'row',
        // 主轴的对齐方式
        justifyContent:'space-between',
        // 垂直居中
        alignItems:'center'
    }
});