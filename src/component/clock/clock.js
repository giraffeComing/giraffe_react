/**
 * Created by zhangwei36 on 2017/12/26.
 */
import React from 'react';

class Clock extends React.Component {

    constructor (props){
        super(props);
        // 查看父组件传过来的数据
        console.log(props);
        // 赋值给组件内部的属性，其实应该就是state
        this.props = props;

        this.state = {
            date : new Date()
        }
    }
    // 生命周围挂载完成之后，感觉相当于vue的mounted
    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.tick()
        },1000)
    }
    // 解绑定时器
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    // 更新状态的方法
    tick(){
        this.setState({
            date : new Date()
        })
    }
    render() {
        // 注意this.state.date后面要加上toLocaleTimeString方法，不然会报个错
        return (
            <div>
                <div>Hi~</div>
                <div>{this.props.name}</div>
                <div>{this.state.date.toLocaleTimeString()}</div>
            </div>
        );
    }
}

export default Clock;