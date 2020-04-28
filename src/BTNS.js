import React from 'react';
import './App.css';


class BTNS extends React.Component {

    render = () => {
        // let btColors = this.props.min < 0 || this.props.min === "" || this.props.min >= this.props.max || this.props.count_start === this.props.max ? 'disabled' : '';
        // let btnColors = this.props.set ? 'disabled' : '';
        // let btnColor = this.props.min < 0 || this.props.min === "" || this.props.min >= this.props.max || this.props.count_start === this.props.max || typeof (this.props.count_start) === 'string' ? 'disabled' : '';
        // let changeColor = this.props.count_start === this.props.max ? 'error' : '';

        return (
            <div>
                            {!this.props.isHidden && <>
                                <span> {this.props.count_value}</span>
                                <button >Inc</button>
                                <button >Reset</button>
                                <button >Set</button>


                            </>}

                            {this.props.isHidden && <>



                            </>}
                        </div>
                )}}


                export default BTNS;



