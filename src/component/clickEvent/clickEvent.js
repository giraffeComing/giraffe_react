/**
 * Created by zhangwei36 on 2017/12/27.
 */
import React from 'react';
import './clickEvent.css'
class ClickEvent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type1:'事件处理函数的第一种形式',
            type2:'事件处理函数的第二种形式',
            type3:'事件处理函数的第三种形式'
        };
        // 如果不在这里对事件处理函数进行一下绑定的话，事件处理函数中的this就找不到了，就没法使用this.state中的变量了
        this.getClickOne = this.getClickOne.bind(this)
    }
    // 注意是驼峰大写的onClick，而不是onclick
    // 再就是要注意绑定的事件处理函数要用{}包起来
    // return第一层一定要是一个唯一的根节点
    render(){
        return (
            <div className="click-event">
                <div className="click-block" onClick = {this.getClickOne}>你点我个试试</div>
                <div className="click-block" onClick = {this.getClickTwo}>你再点我个试试</div>
                <div className="click-block" onClick = {(e)=>this.getClickThree(e)}>有本事你再点我个试试</div>
            </div>
        )
    }
    getClickOne(){
        alert(this.state.type1)
    }
    // 这种写法叫做 属性初始化器语法，这样写就不用再在constructor中bind修改this指向了
    // 这种语法在creat react app中默认开启了
    getClickTwo = ()=>{
        alert(this.state.type2)
    }
    // 这第三种还是正常的定义方法，里面想用this就可以用，但是要在事件处理函数调用的时候通过箭头函数调用
    // 第三种每次组件渲染的时候都会创建一个不同的回调函数，效率低性能差，一般不推荐使用
    getClickThree(){
        alert(this.state.type3)
    }
}

export default ClickEvent;