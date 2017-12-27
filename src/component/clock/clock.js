/**
 * Created by zhangwei36 on 2017/12/26.
 */
import React from 'react';
// 记得导入样式表
import './clock.css'
// 组件类继承自React.Component
class Clock extends React.Component {
    constructor (props){
        // super 一下 props之后就可以在下面使用propsl了
        super(props);
        // 赋值给组件内部的属性，其实应该就是state
        // state定义了之后不能直接更新状态，而是要使用this.setState方法
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
    // 更新状态的方法,state中定义的状态不能直接改变，只能通过setState方法来更新state里面的值
    tick(){
        this.setState({
            date : new Date()
        })
    }
    render() {
        // 使用props
        // 注意this.state.date后面要加上toLocaleTimeString方法，不然会报个错
        return (
            <div className="clock-block">
                <div>Hi~</div>
                <div>{this.props.name}</div>
                <div>{this.state.date.toLocaleTimeString()}</div>
            </div>
        );
    }
}
// 导出Clcok类
export default Clock;