import React from 'react';
import './App.css';
import Count_1 from "./Count_1";
import Count_2 from "./count2";

class App extends React.Component {

    state = {
        count_start: 0,
        min: 0,
        max: 20,
        error: false,
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
            set: false
        };

        let stateAsString = localStorage.getItem('count');
        if (stateAsString != null) {
            state = JSON.parse(stateAsString);}
        this.setState(state)};


    incorrect = () => { //при некорректном значении
        if (this.state.min < 0 || this.state.min === "" || this.state.min >= this.state.max) {
            this.setState({
                count_start: 'error',
                set: true,
                error: true
            },
                ()=>{
                    this.saveState()
                }
                )
        }
    };

    MaxValue = (e) => {
        let max = e.target.value;
        this.setState({
                max: Number(max),
                set: true,
                error: true,
                count_start: 'press set'
            },
            () => {
                this.incorrect()
            }
        )
    };
    MinValue = (e) => {
        let min = e.target.value;
        this.setState({
                min: Number(min),
                set: true,
                error: true,
                count_start: 'press set'
            },
            () => {
                this.incorrect()
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

    render = () => {
        return (
            <div className='middle'>
                <Count_1 count_start={this.state.count_start}
                         setToZero={this.setToZero}
                         count_value={this.count_value}
                         error={this.state.error}
                         max={this.state.max}
                         MinValue={this.MinValue}
                         MaxValue={this.MaxValue}
                         // isDisabledRes={this.state.count_start}
                         // isDisabledInc={this.state.count_start}

                />

                <Count_2
                    min={this.state.min}
                    max={this.state.max}
                    MinValue={this.MinValue}
                    MaxValue={this.MaxValue}
                    set={!this.state.set}
                    setValue={this.setValue}
                    incorrect={this.props.incorrect}
                />
                }
            </div>
        )
    }
}

export default App;

