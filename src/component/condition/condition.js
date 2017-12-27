/**
 * Created by zhangwei36 on 2017/12/27.
 */
// 引入react
import React from 'react';
// 导入样式表
import './condition.css';

// 定义内部的子组件1
class ChildOne extends React.Component{
    render(){
        return (
            <div>
                I`m ChildOne.
            </div>
        )
    }
}
// 定义内部的子组件2
class ChildTwo extends React.Component{
    render(){
        return (
            <div>
                I`m ChildTwo.
            </div>
        )
    }
}
// 定义内部的子组件3
class ChildThree extends React.Component{
    render(){
        return (
            <div>
                I`m ChildThree.
            </div>
        )
    }
}

// 1、条件渲染在正常的js语句中进行
class Condition extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current : 1
        }
    }
    render(){
        // 在正常的js中分条件返回需要渲染的子组件
        if(this.state.current === 1){
            return(
                <div>
                    <ChildOne/>
                </div>
            )
        }else if(this.state.current === 2){
            return(
                <div>
                    <ChildTwo/>
                </div>
            )
        }
    }
}

// 2、条件渲染在jsx语法中进行
class Condition2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current : 2,
            showThree : true
        }
    }
    render(){
        /********
        1、在jsx语法中进行判断和返回
        2、三目运算
        3、逻辑运算
        **********/
        return(
            <div>
                {
                    this.state.current === 1? <ChildOne/>: <ChildTwo/>
                }
                {
                    this.state.showThree && <ChildThree/>
                }
            </div>
        )
    }
}

// 1、多个模块导出 使用export而不是export default，而且要用{}括起来，
// 2、在其他模块中引用的时候要import {Condition,Condition2}
export {Condition,Condition2};