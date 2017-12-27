import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// 引入测试组件
import Test from './component/test/test';
import Clock from './component/clock/clock';
import ClickEvent from './component/clickEvent/clickEvent'
import {Condition, Condition2} from './component/condition/condition'
import List from './component/list/list'

class App extends Component {
    /*自定义组件在使用的时候不需要配对的标签，直接用闭合标签就好了，这样还不会提示下划线警告*/
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <Test/>
                <Clock name="clockOne"/>
                <Clock name="clockTwo"/>
                <ClickEvent/>
                <Condition/>
                <Condition2/>
                <List list={[1, 22, 333, 4444, 55555]}/>
            </div>
        );
    }
}

export default App;
