/**
 * Created by zhangwei36 on 2017/12/27.
 */
import React from 'react'
import './list.css'
// List类定义
class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listData : [
                '新闻',
                '娱乐',
                '体育',
                '财经'
            ]
        }
    }
    /***********
    1、注意啊在使用map的时候 遍历一定要用return啊！！！
    2、一定要记得加key属性啊，不然会飘红的
    3、key可以在DOM中的某些元素被增加或删除的时候帮助React识别哪些元素发生了变化
    4、数组的map方法中可以index参数就是对应的索引值
    ************/
    render(){
        // ①、state中的数据先处理后渲染
        const listUl = this.state.listData.map((item,index)=>{
            return <li key={item.toString()}>{'索引值:'+index} : {item}</li>
        });
        // ②、props中的数据直接渲染
        return (
            <div className="list-ul">
                <ul>
                    {listUl}
                </ul>
                <ul>
                    {this.props.list.map((item)=>{
                        return <li key={item.toString()}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }

}

export default List;