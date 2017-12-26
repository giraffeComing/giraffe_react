import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 引入测试组件
import Test from './component/test/test';
import Clock from './component/clock/clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          {/*使用自定的测试组件*/}
          <Test></Test>
          <Test></Test>
          <Clock name="clockOne"></Clock>
      </div>
    );
  }
}

export default App;
