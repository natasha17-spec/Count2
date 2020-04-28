import React from 'react';
import './App.css';
import BTNS from "./BTNS";



class App extends React.Component {

    state = {
        count_start: 0,
        min: 0,
        max: 20,
        count: true,
        set: false
    };
    componentDidMount() {
        this.restoreState()
    }

    saveState = () =>{
    let stateAsString = JSON.stringify(this.state);
    localStorage.setItem('count',stateAsString);
};
    restoreState = () => {
        let state = {
            count_start: 0,
            min: 0,
            max: 50,
            error: false,
            set: false,

        };

        let stateAsString = localStorage.getItem('count');
        if (stateAsString != null) {
            state = JSON.parse(stateAsString);}
        this.setState(state)};


    //

    maxValue = (e) => {
        let max = e.target.value;
        this.setState({
                max: Number(max)
            }
        )
    };
    minValue = (e) => {
        let min = e.target.value;
        this.setState({
                min: Number(min)

            }
        )
    };


    setValue = () => {
        if (this.state.max > this.state.min && this.state.min >= 0) {
            this.setState({
                count_start: this.state.min,
                error: false,
                set: false
            },
                ()=>{
                    this.saveState()
                }
                )

        }
    };
    count_value = (newValue) => {
        if (this.state.count_start < this.state.max) {
            this.setState({
                    count_start: this.state.count_start + 1
                },
                ()=>{
                    this.saveState()
                }
            );
            if (this.state.count_start === this.state.max) {
                this.setState({
                    error: true,
                    set: false
                },
                    ()=>{
                        this.saveState()
                    }
                    )
            }
        }
    };
    setToZero = () => {
        this.setState({
                count_start: this.state.min
            },
            ()=>{
                this.saveState()
            }
        )
    };

    onSetVisible = () => {
        this.setState({
            count: false,
            set: true
        })
    }
    onCountVisible = () => {
        this.setState({
            count: true,
            set: false,
            count_start:this.state.min,
            min:this.state.min
        })
    };

    render = () => {

        let setDisabled = this.state.min < 0 === true || this.state.max <= this.state.min  === true
        let buttonError = this.state.min < 0 === true || this.state.max <= this.state.min  === true ? 'disabled' : ''
        return (
            <div className='middle'>
                {this.state.count && <div>
                    <span>{this.state.count_start}</span>
                    <button onClick={this.count_value}>ink</button>
                    <button onClick={this.setToZero}>reset</button>
                    <button onClick={this.onSetVisible}>set</button>
                </div>}
                {this.state.set && <div>
                   <span>maxValue</span> <input onChange={this.maxValue} value={this.state.max} type='number'/>
                   <span>minValue</span> <input onChange={this.minValue} value={this.state.min} type="number"/>
                    <button  className={buttonError} disabled={setDisabled} onClick={this.onCountVisible}>set</button>
                </div>}
            </div>
        )
    }
}

export default App;

