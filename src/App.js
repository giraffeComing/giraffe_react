import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 引入测试组件
import Test from './component/test/test';
import Clock from './component/clock/clock';
import ClickEvent from './component/clickEvent/clickEvent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          {/*使用自定的测试组件*/}
          {/*原来自定义的组件在使用的时候不需要配对的标签，直接用闭合标签就好了，这样还不会提示下划线警告*/}
          <Test/>
          <Test/>
          <Clock name="clockOne"/>
          <Clock name="clockTwo"/>
          <ClickEvent/>
      </div>
    );
  }
}

export default App;
