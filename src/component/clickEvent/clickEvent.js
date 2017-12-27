/**
 * Created by zhangwei36 on 2017/12/27.
 */
import React from 'react';
import './clickEvent.css'
class ClickEvent extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        // 如果不在这里对事件处理函数进行一下绑定的话，事件处理函数中的this就找不到了，就没法使用this.state中的变量了
        this.getClick = this.getClick.bind(this)
    }
    // 注意是驼峰大写的onClick，而不是onclick
    // 再就是要注意绑定的事件处理函数要用{}包起来
    render(){
        return (
            <div className="click-block" onClick = {this.getClick}>你点我个试试</div>
        )
    }
    getClick(){
        alert(this)
    }
}

export default ClickEvent;