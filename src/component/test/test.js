/**
 * Created by zhangwei36 on 2017/12/25.
 */
import React, { Component } from 'react';
import './test.css';
// { Component } from 'react' 就不用再使用 React.Component了，直接使用Component方法即可
class Test extends Component {
    render(){
        // 添加class属性的时候要用className,更符合规范，虽然直接用class也ok
        return <div className="test-block">test block.</div>
    }
}

export default Test;