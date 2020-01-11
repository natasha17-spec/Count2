import React from 'react';
import './App.css';
import BTNS from "./BTNS";
import Value from "./Value";




class Count_1 extends React.Component {



    render = () => {

        return (
            <div className='counter_box'>
                <div className='counters'>
                    <div className='center'>
                        <Value count_start={this.props.count_start}
                        max={this.props.max}
                        />
                        <BTNS count_value={this.props.count_value}
                              setToZero={this.props.setToZero}
                              count_start={this.props.count_start}
                              min={this.props.min}
                              max={this.props.max}
                              errorForReset={this.props.error}
                              errorForInc={typeof(this.props.count_start) === 'string'}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default Count_1;

