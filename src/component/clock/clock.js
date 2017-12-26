/**
 * Created by zhangwei36 on 2017/12/26.
 */
import React from 'react';

class Clock extends React.Component {

    constructor (props){
        super(props);
        console.log(props);
        this.state = props
    }
    render() {
        return (
            <div>
                <div>Hi~</div>
                <div>{this.state.name}</div>
            </div>
        );
    }
}

export default Clock;