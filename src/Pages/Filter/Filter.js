import React from "react";
import "./Filter.css";
import "../../Styles/Commons.css";
import "../../Components/Radiobuttons/radio.css";
import "../../Components/Aside/Aside.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import "../../Components/Counter/Counter.css";
import Button from '@material-ui/core/Button';
import { Route } from "react-router-dom";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.classes = makeStyles(theme => ({
      root: {
        display: "flex",
        "& > *": {
          margin: theme.spacing(1)
        }
      },
      formControl: {
        margin: theme.spacing(3)
      },
      group: {
        margin: theme.spacing(1, 0)
      },
      container: {
        display: "flex",
        flexWrap: "wrap"
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
      },
      extendedIcon: {
        marginRight: theme.spacing(1)
      },
    }));

    this.state = {
      cuando: "",
      hora: "",
      //value: "",
      inputValue: 0,
    };
    this.cuando = [
      {
        label: "Jueves 28",
        bajada: "Disponibilidad total",
        value: "0"
      },
      {
        label: "Viernes 29",
        bajada: "Disponibilidad total",
        value: "1"
      },
      {
        label: "Sábado 30",
        bajada: "Disponibilidad parcial",
        value: "2"
      }
    ];
    this.horario = [
      {
        label: "Mañana",
        bajada: "De 9 am a 11 am",
        value: "0"
      },
      {
        label: "Tarde",
        bajada: "De 12 am a 18 pm",
        value: "1"
      },
      {
        label: "Noche",
        bajada: "De 19 pm a 2 am",
        value: "2"
      }
    ];
    this.handleCheck = this.handleClick.bind(this);
  }
  componentDidMount() {
    document.title = "Elijan sus preferencias y Sale Cine";
  }
  handleClickRestar(e) {
    const value = this.state.inputValue;
    if (this.state.inputValue === "" || this.state.inputValue === 0) {
      this.setState({ inputValue: 0 });
    } else {
      this.setState({
        inputValue: parseInt(value) - 1
      });
    }
  }
  handleClickSumar(e) {
    const value = this.state.inputValue;
    if (this.state.inputValue === "") {
      this.setState({ inputValue: 1 });
    } else {
      this.setState({
        inputValue: parseInt(value) + 1
      });
    }
  }
  handleClick(event) {
    console.log(event.target);
    const newValue = event.target.value;
    const name = event.target.name

    if (newValue === [name]) {
        window.setTimeout(
      function() {
        this.setState({[name]: ""});
      }.bind(this),
      0)
    } else {
        window.setTimeout(
            function() {
            this.setState({[name]: newValue});
            }.bind(this),
            0)
    }
    console.log(this.state);
  }
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <div className="box-shadow"></div>
        <div className="divide">
          <main id="mainContent" className="filter">
            <h1 className="h1-filter">Nos ponemos más específicos:</h1>
            <p className="bajada">
              Te pedimos más información para filtrar por lo que buscas.
            </p>
            <h2>¿Cuándo quieren ir?</h2>
            <div className={this.classes.root}>
              <FormControl
                component="fieldset"
                className={this.classes.formControl}
              >
                <FormLabel component="legend">
                  <i className="sr-only">Eleguí una opción de día</i>
                </FormLabel>
                <RadioGroup
                  aria-label="cuando"
                  name="cuando"
                  className="myRadioGroup"
                  value={this.state.diaValue}
                >
                  {this.cuando.map((option, key) => {
                    return (
                      <div className="butones-1" key={key}>
                        <FormControlLabel
                          value={option.label}
                          control={<Radio onMouseUp={e => this.handleClick(e)} />}
                          label={option.label}
                          labelPlacement="start"
                          className="strong"
                        />
                        <span>{option.bajada}</span>
                      </div>
                    );
                  })}
                </RadioGroup>
              </FormControl>
            </div>
            <h2>¿Cuántos van a ser?</h2>
            <div className="counter-container">
              <div className="butones-2">
                <Fab
                  variant="round"
                  className="buton-peque"
                  aria-label="Restar un adulto"
                  onClick={e => this.handleClickRestar(e)}
                >
                  -
                </Fab>
                <TextField
                  id="Adultos"
                  type="text"
                  value={this.state.inputValue}
                  onChange={this.updateInputValue}
                  aria-live="polite"
                  aria-label={this.state.inputValue + " Adultos"}
                  //aria-describedby={'label_' +this.props.id}
                />
                <Fab
                  variant="round"
                  className="buton-peque"
                  aria-label="Sumar un adulto"
                  onClick={e => this.handleClickSumar(e)}
                >
                  +
                </Fab>
              </div>
              <span className="label-contador" id={"label_Adultos"}>
                Adultos
              </span>
              <p className="counterBajada"></p>
            </div>
            <div className="counter-container">
              <div className="butones-2">
                <Fab
                  variant="round"
                  className="buton-peque"
                  aria-label="Restar un niño"
                  onClick={e => this.handleClickRestar(e)}
                >
                  -
                </Fab>
                <TextField
                  id="Niños"
                  type="text"
                  value={this.state.inputValue}
                  onChange={this.updateInputValue}
                  aria-live="polite"
                  aria-label={this.state.inputValue + " Niños"}
                  //aria-describedby={'label_' +this.props.id}
                />
                <Fab
                  variant="round"
                  className="buton-peque"
                  aria-label="Sumar un niño"
                  onClick={e => this.handleClickSumar(e)}
                >
                  +
                </Fab>
              </div>
              <span className="label-contador" id={"label_Niños"}>
                Niños
              </span>
              <p className="counterBajada">De 2 a 10 años</p>
            </div>
            <div className="counter-container">
              <div className="butones-2">
                <Fab
                  variant="round"
                  className="buton-peque"
                  aria-label="Restar un Jubilado"
                  onClick={e => this.handleClickRestar(e)}
                >
                  -
                </Fab>
                <TextField
                  id="Jubilados"
                  type="text"
                  value={this.state.inputValue}
                  onChange={this.updateInputValue}
                  aria-live="polite"
                  aria-label={this.state.inputValue + " Jubilados"}
                  //aria-describedby={'label_' +this.props.id}
                />
                <Fab
                  variant="round"
                  className="buton-peque"
                  aria-label="Sumar un Jubilado"
                  onClick={e => this.handleClickSumar(e)}
                >
                  +
                </Fab>
              </div>
              <span className="label-contador" id={"label_Jubilados"}>
                Jubilados
              </span>
              <p className="counterBajada">Mayores de 60 años</p>
            </div>
            <h2>¿A qué hora quieren ir?</h2>
            <div className={this.classes.root}>
              <FormControl
                component="fieldset"
                className={this.classes.formControl}
              >
                <FormLabel component="legend">
                  <i className="sr-only">"Eleguí una opción de horario"</i>
                </FormLabel>
                <RadioGroup
                  aria-label="hora"
                  name="hora"
                  className="myRadioGroup"
                  value={this.state.value}
                >
                  {this.horario.map((option, key) => {
                    return (
                      <div className="butones-1" key={key}>
                        <FormControlLabel
                          value={option.label}
                          control={<Radio onMouseUp={e => this.handleClick(e)} />}
                          label={option.label}
                          labelPlacement="start"
                          className="strong"
                          name="hora"
                        />
                        <span>{option.bajada}</span>
                      </div>
                    );
                  })}
                </RadioGroup>
              </FormControl>
            </div>
          </main>
          <aside className="aside">
                <div className="aside-wrapper">
                    <h3 className="heading-aside"><span className="vertical-align">Tu selección</span></h3>
                    <div className="flex-arround">
                        <p>Fecha</p>
                        <p>{this.state.cuando}</p>
                    </div>
                    <div className="flex-arround">
                        <p>Cantidad de personas </p>
                        <p> Sin decidir</p>
                    </div>
                    <div className="flex-arround">
                        <p>Horario </p>
                        <p> {this.state.hora}</p>
                    </div>
                    <div className="flex-arround">
                        <p>Butacas </p>
                        <p> Sin decidir</p>
                    </div>

                </div>
                <div className="button-container">
                <Route render={({ history}) => (
                    <Button
                    variant="outlined"
                    className="button-outlined-black"
                    onClick={() => { history.push('/')}}>Anterior</Button>
                )}/>
                <Route render={({ history}) => (
                    <Button
                    variant="outlined"
                    className="button-contained"
                    onClick={() => { history.push('/filter2')}} >Siguiente</Button>
                )}/>
                </div>
            </aside>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Filter;
