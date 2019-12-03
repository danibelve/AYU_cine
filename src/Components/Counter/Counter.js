import React from 'react';
import '../../Styles/Commons.css';
import './Counter.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.classes = makeStyles(theme => ({
            root: {
                '& > *': {
                    margin: theme.spacing(1),
                },
            },
            container: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            textField: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
                width: 200,
            },
            extendedIcon: {
                marginRight: theme.spacing(1),
            },
        }));

        this.state = {
            inputValue: 0
        }
    }

    handleClickRestar(e) {
        const value = this.state.inputValue;
        if (this.state.inputValue === "" || this.state.inputValue === 0) {
            this.setState({ inputValue: 0 })
        } else {
            this.setState({
                inputValue: parseInt(value) - 1
            })
        }
    }
    handleClickSumar(e) {
        const value = this.state.inputValue;
        if (this.state.inputValue === "") {
            this.setState({ inputValue: 1 })
        } else {
            this.setState({
                inputValue: parseInt(value) + 1
            })
        }
    }

    render() {
        return (
            <div className="counter-container">
                <div className="butones-2">
                    <Fab variant="round" className="buton-peque" aria-label={this.props.label1} onClick={(e) => this.handleClickRestar(e)}>-</Fab>
                    <TextField
                        id={this.props.id}
                        type="text"
                        
                        value={this.state.inputValue}
                        onChange={this.updateInputValue}
                        aria-live="polite"
                        aria-label={this.state.inputValue + ' ' +this.props.id}
                        //aria-describedby={'label_' +this.props.id}
                    />
                    <Fab variant="round" className="buton-peque" aria-label={this.props.label2} onClick={(e) => this.handleClickSumar(e)}>+</Fab>
                </div>
                <span className="label-contador" id={'label_' +this.props.id}>{this.props.id}</span>
                <p className="counterBajada">{this.props.bajada}</p>
            </div>
        );
    }
}

export default Counter;