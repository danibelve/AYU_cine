import React from "react";
import "./Filter4.css";
import "../../Styles/Commons.css";
import "../../Components/Radiobuttons/radio.css";
import "../../Components/Aside/Aside.css";
import {Helmet} from "react-helmet";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "../../Components/Counter/Counter.css";
import Button from "@material-ui/core/Button";
import Pantalla from "../../Assets/pantalla.svg";
import { Route, Link } from "react-router-dom";
import Progressbar from "../../Assets/Estados/Butacas.svg";
import $ from 'jquery';

class Filter4 extends React.Component {
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
      }
    }));

    this.state = {
      butaca: "",
    };

    this.opciones = [
      {
        label: "Opción 01",
        bajada: "Butacas E4, E5, E6, E7",
        value: "0"
      },
      {
        label: "Opción 02",
        bajada: "Butacas F7, F8, F9, F10",
        value: "1"
      },
      {
        label: "Opción 03",
        bajada: "Butacas H6, H7, H8, H9",
        value: "2"
      },
      {
        label: "Personalizado",
        bajada: "Elegi las butacas vos",
        value: "3"
      }
    ];

    this.handleCheck = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.title = "Mira las opciones que te encontramos en Sale Cine";
    $("#root").focus();
    
  }
  armarButacas(){
    const butacaValue = this.state.butaca;
    let opcionSeleccionada = "Sin definir";
  
      if (butacaValue === "0") {
        opcionSeleccionada = "E4, E5, E6, E7";
      }
      if (butacaValue === "1") {
        opcionSeleccionada = "F7, F8, F9, F10";
      }
      if (butacaValue === "2") {
        opcionSeleccionada = "H6, H7, H8, H9";
      }
      if (butacaValue=== "3") {
        opcionSeleccionada = "Personalizado";
      }
    return opcionSeleccionada;
  }

  handleSubmit(e) {
    if (this.state.butaca !== ""){
      this.props.history.push('/pago');
    }
  }

  handleClick(event) {
    const name = event.target.value;
    let butacaValue = "";
    if (name === "Opción 01"){
      butacaValue= "0"
    }
    if (name === "Opción 02"){
      butacaValue= "1"
    }
    if (name === "Opción 03"){
      butacaValue= "2"
    }
    if (name === "Personalizado"){
      butacaValue= "3"
    }
    this.setState({butaca: butacaValue});
    console.log(this.state);

  }

  handleOptionClick(event){
    this.setState({butaca: event.target.name})
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <html lang="es-AR" />
        </Helmet>
        <Header></Header>
        <div className="box-shadow"></div>
        <div className="divide">
          <main id="mainContent" className="filter">
            <h1 className="h1-filter">Momento de elegir tus lugares</h1>
            <p className="bajada">
            Te damos las mejores opciones de butaca para que puedan disfrutar de la película.
            </p>
            <div className="wrapper-butacas">
              <div>
                <h2>Opciones sugeridas</h2>
                <div className={this.classes.root}>
                  <FormControl
                    component="fieldset"
                    className={this.classes.formControl}
                  >
                    <FormLabel component="legend">
                      <i className="sr-only">Opciones para tu función </i>
                    </FormLabel>
                    <RadioGroup
                      aria-label="opciones de butacas"
                      name="butaca"
                      className="myRadioGroup-block"
                      value={this.state.butaca}
                    >
                      {this.opciones.map((option, key) => {
                        return (
                          <div className="butones-1" id={key}>
                            <FormControlLabel
                              value={option.label}
                              control={
                                <Radio onClick={e => this.handleClick(e)} />
                              }
                              label={option.label}
                              labelPlacement="start"
                              className="strong"
                              checked={this.state.butaca === option.value}
                            />
                            <span className="bajadas">{option.bajada}</span>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <div className="marginauto">
                <p aria-label="pantalla" className="pantalla-span">
                  {" "}
                  PANTALLA{" "}
                </p>
                <img
                  className="pantalla"
                  src={Pantalla}
                  alt=""
                  aria-hidden="true"
                />
                <fieldset className="fieldset" disabled= {this.state.butaca !== "3"}>
                  <legend className="legend">Primeras filas</legend>
                  <div className="wrapperopciones">
                    <div className="izquierda">
                      <div className="padding-bottom">
                        <div className="anchom">A</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="A1" value="A1" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="A2" value="A2" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="A3" value="A3" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div className="padding-bottom">
                      <div className="anchom">B</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="B1" value="B1" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="B2" value="B2" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="B3" value="B3" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div className="padding-bottom">
                      <div className="anchom">C</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="C1" value="C1" disabled= {this.state.butaca !== "3"} />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="C2" value="C2" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="C3" value="C3" disabled= {this.state.butaca !== "3"} />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div className="padding-bottom">
                      <div className="anchom">D</div>
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaD1"
                            value="D1"
                            aria-label="D1"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="D2" value="D2" disabled= {this.state.butaca !== "3"} />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="D3" value="D3" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="centro">
                      <div className="padding-bottom">
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="A4" value="A4" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="A5" value="A5" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="A6" value="A6" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="A7" value="A7" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="A8" value="A8" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="A9" value="A9" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="A10" value="A10" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="A11" value="A11" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="B4" value="B4" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaB5"
                            value="B5"
                            aria-label="B5"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="B6" value="B6" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="B7" value="B7" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="B8" value="B8" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="B9" value="B9" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="B10" value="B10" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="B11" value="B11" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="C4" value="C4" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="C5" value="C5" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="C6" value="C6" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="C7" value="C7" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="C8" value="C8" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="C9" value="C9" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="C10" value="C10" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaC11"
                            aria-label="C11"
                            value="C11"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="D4" value="D4" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="D5" value="D5" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="D6" value="D6" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="D7" value="D7" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="D8" value="D8" disabled= {this.state.butaca !== "3"} />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="D9" value="D9" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="D10" value="D10" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="D11" value="D11" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="derecha">
                      <div className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="A12" value="A12" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaA13"
                            aria-label="A13"
                            value="A13"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="A14" value="A14" disabled= {this.state.butaca !== "3"} />
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">A</div>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="B12" value="B12" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaB13"
                            aria-label="B13"
                            value="B13"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="B15" value="B15" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">B</div>
                      </div>
                      <div className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="C12" value="C12" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="C13" value="C13" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="C14" value="C14" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">C</div>
                      </div>
                      <div>
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="D12" value="D12" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="D13" value="D13" disabled= {this.state.butaca !== "3"} />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="D14" value="D14" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">D</div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="legend">Centro</legend>
                  <div className="wrapperopciones">
                    <div className="izquierda">
                      <div className="padding-bottom">
                      <div className="anchom">E</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="E1" value="E1" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="E2" value="E2" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="E3" value="E3" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div className="padding-bottom">
                      <div className="anchom">F</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="F1" value="F1" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="F2" value="F2" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="F3" value="F3" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div className="padding-bottom">
                      <div className="anchom">G</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="G1" value="G1" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="G2" value="G2" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="G3" value="G3" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div className="padding-bottom">
                      <div className="anchom">H</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="H1" value="H1" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="H2" value="H2" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="H3" value="H3" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="centro">
                      <div  className="padding-bottom">
                        <button
                          onClick={e => this.handleOptionClick(e)}
                          className={this.state.butaca === "0" ? "border-nuestras-sugerencias": "nuestras-sugerencias"}
                          title="Opción 1"
                          name="0"
                          tabIndex="0"
                          aria-label="Nuestra sugerencia. Butacas: E4, E5, E6, E7"
                        >
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              aria-label="E4"
                              value="E4"
                              tabIndex="-1"
                              checked
                              disabled
                            />
                            <span className="checkmark" tabIndex="-1"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              tabIndex="-1"
                              type="checkbox"
                              name="butaca"
                              aria-label="E5"
                              value="E5"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              aria-label="E6"
                              value="E6"
                              checked
                              tabIndex="-1"
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              aria-label="E7"
                              value="E7"
                              tabIndex="-1"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                        </button>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="E8" value="E8" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="E9" value="E9" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="E10" value="E10" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="E11" value="E11" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="F4" value="F4" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="F5" value="F5" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="F6" value="F6" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <button
                          onClick={e => this.handleOptionClick(e)}
                          className= {this.state.butaca === "1" ? "border-nuestras-sugerencias": "nuestras-sugerencias"}
                          tabIndex="0"
                          title="Opción 2"
                          name="1"
                          aria-label="Nuestra sugerencia. Butacas: F7, F8, F9, F10"
                        >
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              aria-label="F7"
                              value="F7"
                              tabIndex="-1"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              aria-label="F8"
                              value="F8"
                              tabIndex="-1"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              aria-label="F9"
                              value="F9"
                              tabIndex="-1"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              aria-label="F10"
                              value="F10"
                              tabIndex="-1"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                        </button>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="F11" value="F11" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div className="padding-bottom">
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaD1"
                            aria-label="G4"
                            value="G4"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaD1"
                            aria-label="G5"
                            value="G5"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaD1"
                            aria-label="G6"
                            value="G6"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="G7" value="G7" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="G8" value="G8" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaD1"
                            aria-label="G9"
                            value="G9"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaD1"
                            aria-label="G10"
                            value="G10"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="G11" value="G11" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="H4" value="H4" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="H5" value="H5" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <button
                          onClick={e => this.handleOptionClick(e)}
                          className={this.state.butaca === "2" ? "border-nuestras-sugerencias": "nuestras-sugerencias"}
                          tabIndex="0"
                          name="2"
                          title="Opción 3"
                          aria-label="Nuestra sugerencia. Butacas: H6, H7, H8, H9"
                        >
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              aria-label="H6"
                              value="H6"
                              tabIndex="-1"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              aria-label="H7"
                              value="H7"
                              tabIndex="-1"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              aria-label="H8"
                              value="H8"
                              tabIndex="-1"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              tabIndex="-1"
                              aria-label="H9"
                              value="H9"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                        </button>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="H10" value="H10" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="H11" value="H11" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="derecha">
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="H12" value="E12" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="H13" value="E13" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="H14" value="E14" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">E</div>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="F12" value="F12" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="F13" value="F13" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="F14" value="F14" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">F</div>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="G12" value="G12" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="G13" value="G13" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="G14" value="G14" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">G</div>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="H12" value="H12" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="13" value="H13" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="H14" value="H14" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">H</div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="fieldset" disabled= {this.state.butaca !== "3"}>
                  <legend className="legend">Últimas filas</legend>
                  <div className="wrapperopciones">
                    <div className="izquierda">
                      <div  className="padding-bottom">
                      <div className="anchom">I</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="I1" value="I1" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="I2" value="I2" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="I3" value="I3" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div>
                      <div className="anchom">J</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="J1" value="J1" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="J2" value="J2" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="J3" value="J3" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="centro">
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="I4" value="I4" disabled= {this.state.butaca !== "3"} />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="I5" value="I5" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="I6" value="I6" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="I7" value="I7" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="I8" value="I8" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="I9" value="I9" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="I10" value="I10" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="I11" value="I11" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="J4" value="J4" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="J5" value="J5" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="J6" value="J6" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="J7" value="J7" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="J8" value="J8" disabled= {this.state.butaca !== "3"} />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="J9" value="J9" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="J10" value="J10" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="J11" value="J11" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="derecha">
                      <div className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="I12" value="I12" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="I13" value="I13" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="I14" value="I14" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">I</div>
                      </div>
                      <div className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="J12" value="J12" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="J13" value="J13" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" aria-label="J14" value="J14" disabled= {this.state.butaca !== "3"}/>
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">J</div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <div className="referencias">
                  <div className="container">
                    <input
                      className="input-ocupado"
                      type="checkbox"
                      name="referencia"
                      value="ocupied"
                      disabled
                      tabIndex="-1"
                      aria-label="Ocupado referencia"
                      checked
                    />
                    Ocupado
                    <span className="checkmark"></span>
                  </div>
                  <span className="container-sugerencia">
                    <input
                      type="checkbox"
                      name="butacaref"
                      value="R1"
                      tabIndex="-1"
                      aria-label="Nuestras sugerencias, referencia"
                      checked
                    />
                    Nuestras sugerencias
                    <span className="checkmark"></span>
                  </span>
                  <span className="container-disponible">
                    <input type="checkbox" aria-label="disponibles, referencia" name="butacarefe" value="ref" tabIndex="-1" />
                    <span className="checkmark"></span>
                    Disponible
                  </span>
                </div>
              </div>
            </div>
          </main>
          <aside className="aside">
            <div className="aside-wrapper">
            <img src={Progressbar} className="progress-bar" alt="Paso actual, selección de batacas"/>
              <h3 className="heading-aside">
                <span className="heading3-padding">
                  Tu selección para <i lang="en">The Joker</i>
                </span>
              </h3>
              <div className="datos-aside">
                <div className="flex-arround">
                  <p className="p-aside">Fecha</p>
                  <p className="violeta">Viernes 29</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside"><abbr title="cantidad">Cant.</abbr> de personas </p>
                  <p className="violeta">Adultos 4.</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Cine </p>
                  <p className="violeta">Hoyts Caballito</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Horario </p>
                  <p className="violeta">23:00h, Subt. 2D</p>
                </div>
                <div className="flex-arround" aria-live="polite">
                  <p className="p-aside">Butacas </p>
                  <p className={this.armarButacas() === "Sin definir" ? "gris" : "violeta"}>{this.armarButacas()}</p>
                </div>
                <div className="subtotal-resumen">
                  <div className="flex-arround">
                      <p className="p-aside">Subtotal </p>
                      <p className="violeta"><i aria-hidden="true">$</i>1200<i class="sr-only">pesos</i></p>
                  </div>
                </div>
              </div>
                <div className="div-vinculo-ingresa">
                  <a href="#" className="vinculo-ingresa">Ingresá a tu cuenta para guardar los datos de tu compra</a>
                </div>
              </div>
            <div className="button-container">
              <Route
                render={({ history }) => (
                  <Button
                    variant="outlined"
                    className="button-outlined-black"
                    onClick={() => {
                      history.push("/filter3");
                    }}
                  >
                    Anterior
                  </Button>
                )}
              />
                <Button
                  variant="outlined"
                  className="button-contained"
                  type="submit"
                  onClick={(e) => this.handleSubmit(e)}
                  disabled= {(this.state.butaca === "") ? true : false}
                >
                  Siguiente
                </Button>
            </div>
          </aside>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Filter4;
