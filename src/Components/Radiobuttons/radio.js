import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import '../../Styles/Commons.css';
import './radio.css';


class MyRadio extends React.Component {

    constructor(props) {
        super(props);
        this.classes = makeStyles(theme => ({
            root: {
                display: "flex"
            },
            formControl: {
                margin: theme.spacing(3)
            },
            group: {
                margin: theme.spacing(1, 0)
            }
        }));

        this.state = {
            value: "",
        }
    }

    handleClick(event) {
        if (event.target.value === this.value) {
            this.setState({
                value: ""
            })
        } else {
            this.setState({
                value: event.target.value
            })
        }
    }

    render() {
        return (
            <div className={this.classes.root}>
                <FormControl component="fieldset" className={this.classes.formControl}>
                    <FormLabel component="legend"> <i className="sr-only">{this.props.legend}</i></FormLabel>
                    <RadioGroup
                        aria-label={this.props.name}
                        name={this.props.name}
                        className="myRadioGroup"
                        value={this.state.value}
                    >
                        {this.props.options.map((option, key) => {
                                return <div className="butones-1" key={key}> 
                                    <FormControlLabel
                                        value={option.value}
                                        control={<Radio onClick={(e) => this.handleClick(e)} />}
                                        label={option.label}
                                        labelPlacement="start"
                                        className="strong"
                                    />
                                    <span>{option.bajada}</span>
                                </div>
                            })
                        }
                    </RadioGroup>
                </FormControl>
            </div>
        );

    }
}

export default MyRadio;