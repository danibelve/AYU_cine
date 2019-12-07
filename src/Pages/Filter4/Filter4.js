import React from "react";
import "./Filter4.css";
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
import "../../Components/Counter/Counter.css";
import Button from "@material-ui/core/Button";
import Pantalla from "../../Assets/pantalla.svg";
import { Route, Link } from "react-router-dom";

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
  }
  armarButacas(){
    const butacaValue = this.state.butaca;
    let opcionSeleccionada = "Sin definir";
  
      if (butacaValue === "0") {
        opcionSeleccionada = "Opción 01. E4, E5, E6, E7";
      }
      if (butacaValue === "1") {
        opcionSeleccionada = "Opción 02. F7, F8, F9, F10";
      }
      if (butacaValue === "2") {
        opcionSeleccionada = "Opción 03. H6, H7, H8, H9";
      }
      if (butacaValue=== "3") {
        opcionSeleccionada = "Personalizado";
      }
    return opcionSeleccionada;
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
        <Header></Header>
        <div className="box-shadow"></div>
        <div className="divide">
          <main id="mainContent" className="filter">
            <h1 className="h1-filter">Estas son las opciones finales</h1>
            <p className="bajada">
              ¡Mirá todas las opciones que encontramos para vos y tus amigos!
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
                  role="presentation"
                />
                <fieldset className="fieldset" disabled= {this.state.butaca !== "3"}>
                  <legend className="legend">Primeras filas</legend>
                  <div className="wrapperopciones">
                    <div className="izquierda">
                      <div className="padding-bottom">
                        <div className="anchom">A</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="A1" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="A2" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="A3" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div className="padding-bottom">
                      <div className="anchom">B</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="B1" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="B2" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="B3" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div className="padding-bottom">
                      <div className="anchom">C</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C1" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C2" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C3" />
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
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="D2" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="D3" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="centro">
                      <div className="padding-bottom">
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="A4" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="A5" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="A6" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="A7" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="A8" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="A8" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="A10" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="A10" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="B4" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaB5"
                            value="B5"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="B6" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="B7" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="B8" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="B9" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="B10" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="B11" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C4" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C5" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C6" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C7" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C8" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C9" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C10" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaC11"
                            value="C11"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="D4" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="D5" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="D6" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="D7" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="D8" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="D9" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="D10" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="D11" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="derecha">
                      <div className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="A12" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaA13"
                            value="A13"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="A14" />
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">A</div>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="B12" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaB13"
                            value="B13"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="B15" />
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">B</div>
                      </div>
                      <div className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C12" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C13" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C14" />
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">C</div>
                      </div>
                      <div>
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C12" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C13" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="C14" />
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
                          <input type="checkbox" name="butaca" value="E1" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="E2" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="E3" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div className="padding-bottom">
                      <div className="anchom">F</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="F1" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="F2" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="F3" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div className="padding-bottom">
                      <div className="anchom">G</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="G1" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="G2" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="G3" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div className="padding-bottom">
                      <div className="anchom">H</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="H1" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="H2" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="H3" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="centro">
                      <div  className="padding-bottom">
                        <button
                          onClick={e => this.handleOptionClick(e)}
                          className={ this.state.butaca === 0 ? "nuestras-sugerencias--outline" : "nuestras-sugerencias"  }
                          title="Opción 1"
                          name="0"
                          tabIndex="0"
                          aria-label="Nuestra sugerencia. E4, E5, E6, E7"
                        >
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="E4"
                              tabIndex="-1"
                              checked
                              disabled
                            />
                            <span className="checkmark" tabIndex="-1"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="E5"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="E6"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="E7"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                        </button>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="E8" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="E9" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="E10" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="E11" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="F4" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="F5" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="F6" />
                          <span className="checkmark"></span>
                        </span>
                        <button
                          onClick={e => this.handleOptionClick(e)}
                          className="nuestras-sugerencias"
                          tabIndex="0"
                          title="Opción 2"
                          name="1"
                          aria-label="Nuestra sugerencia. F7, F8, F9, F10"
                        >
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="F7"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="F8"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="F9"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="F10"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                        </button>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="F11" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div className="padding-bottom">
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaD1"
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
                            value="G6"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="G7" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="G8" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaD1"
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
                            value="G10"
                            checked
                            disabled
                          />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="G11" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="H4" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="H5" />
                          <span className="checkmark"></span>
                        </span>
                        <button
                          onClick={e => this.handleOptionClick(e)}
                          className="nuestras-sugerencias"
                          tabIndex="0"
                          name="2"
                          title="Opción 3"
                          aria-label="Nuestra sugerencia. H6, H7, H8, H9"
                        >
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="H6"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="H7"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="H8"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                          <span className="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="H9"
                              checked
                            />
                            <span className="checkmark"></span>
                          </span>
                        </button>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="H10" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="H11" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="derecha">
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="E12" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="E13" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="E14" />
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">E</div>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="F12" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="F13" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="F14" />
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">F</div>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="G12" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="G13"/>
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="G14" />
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">G</div>
                      </div>
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="H12" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="H13" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="H14" />
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
                          <input type="checkbox" name="butaca" value="I1" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="I2" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="I3" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div>
                      <div className="anchom">J</div>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="J1" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="J2" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="J3" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="centro">
                      <div  className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="I4" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="I5" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="I6" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="I7" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="I8" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="I9" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="I10" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="I11" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                      <div className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="J4" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="J5" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="J6" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="J7" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="J8" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="J9" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="J10" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="J11" />
                          <span className="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="derecha">
                      <div className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="I12" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="I13" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="I14" />
                          <span className="checkmark"></span>
                        </span>
                        <div className="anchom">I</div>
                      </div>
                      <div className="padding-bottom">
                      <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="J12" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="J13" />
                          <span className="checkmark"></span>
                        </span>
                        <span className="container-disponible">
                          <input type="checkbox" name="butaca" value="J14" />
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
                      checked
                    />
                    Nuestras sugerencias
                    <span className="checkmark"></span>
                  </span>
                  <span className="container-disponible">
                    <input type="checkbox" name="butacarefe" value="ref" />
                    <span className="checkmark"></span>
                    Disponible
                  </span>
                </div>
              </div>
            </div>
          </main>
          <aside className="aside">
            <div className="aside-wrapper">
              <div className="steps">
                  <div className="container-steps">
                    <ul className="progressbar">
                      <li className="funcion linea"><p>FUNCIÓN</p></li>
                      <li className="butacas-after butacas linea"><p>BUTACAS</p></li>
                      <li className="pago-after pago linea inactivo"><p>PAGO</p></li>
                      <li className="entradas linea inactivo"><p>ENTRADAS</p></li>
                    </ul>
                  </div>
                </div>
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
                  <p className="p-aside">Cantidad de personas </p>
                  <p className="violeta">Adultos 4.</p>
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
                      <p className="violeta">$1200</p>
                  </div>
                </div>
              </div>
                <div className="div-vinculo-ingresa">
                  <a href="" className="vinculo-ingresa">Ingresá a tu cuenta para guardar los datos de tu compra</a>
                </div>
              </div>
            <div className="button-container">
              <Route
                render={({ history }) => (
                  <Button
                    variant="outlined"
                    className="button-outlined-black"
                    onClick={() => {
                      history.push("/filter");
                    }}
                  >
                    Anterior
                  </Button>
                )}
              />
              <Link
                to={{
                  pathname: "/pago"
                }}
              >
                <Button
                  variant="outlined"
                  className="button-contained"
                  type="submit"
                >
                  Siguiente
                </Button>
              </Link>
            </div>
          </aside>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Filter4;
