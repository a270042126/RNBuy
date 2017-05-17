/**
 * Created by dd on 2017/5/17.
 */



import React,{Component} from 'react';

const LaunchImage = require('./Main/LaunchImage');
const Main = require('./Main/Main');


class Root extends Component{

    constructor(props){
        super(props);
        this.state = {
            loaded:false
        }
    }

    render() {
        if (!this.state.loaded)
            return (
            <LaunchImage/>
            )
        else
            return (
                <Main/>
            );
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
               loaded:true
            });
        },1500);
    }
}

// 输出组件类
module.exports = Root;