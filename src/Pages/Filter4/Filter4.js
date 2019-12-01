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
      butaca: ""
    };

    this.opciones = [
      {
        label: "Opción 01",
        bajada: "Butacas C3, C5, C7, C9",
        value: "0"
      },
      {
        label: "Opción 02",
        bajada: "Butacas C3, C5, C7, C9",
        value: "1"
      },
      {
        label: "Opción 03",
        bajada: "Butacas C3, C5, C7, C9",
        value: "2"
      },
      {
        label: "Donde quieran",
        bajada: "Elegi las butacas vos",
        value: "3"
      }
    ];

    this.handleCheck = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.title = "Mira las opciones que te encontramos en Sale Cine";
  }

  handleClick(event) {
    const newValue = event.target.value;
    const name = event.target.name;

    if (newValue === [name]) {
      window.setTimeout(
        function() {
          this.setState({ [name]: "" });
        }.bind(this),
        0
      );
    } else {
      window.setTimeout(
        function() {
          this.setState({ [name]: newValue });
        }.bind(this),
        0
      );
    }
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
                                <Radio onMouseUp={e => this.handleClick(e)} />
                              }
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
                <fieldset className="fieldset" disabled>
                  <legend className="legend">Primeras filas</legend>
                  <div className="wrapperopciones">
                    <div className="izquierda">
                      <div>
                        <div className="anchom">A</div>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="A1" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="A2" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="A3" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                      <div>
                      <div className="anchom">B</div>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="B1" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="B2" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="B3" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                      <div>
                      <div className="anchom">C</div>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C1" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C2" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C3" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                      <div>
                      <div className="anchom">D</div>
                        <span class="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaD1"
                            value="D1"
                            checked
                            disabled
                          />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="D2" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="D3" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="centro">
                      <div>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="A4" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="A5" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="A6" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="A7" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="A8" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="A8" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="A10" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="A10" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="B4" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaB5"
                            value="B5"
                            checked
                            disabled
                          />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="B6" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="B7" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="B8" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="B9" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="B10" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="B11" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C4" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C5" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C6" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C7" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C8" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C9" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C10" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaC11"
                            value="C11"
                            checked
                            disabled
                          />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="D4" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="D5" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="D6" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="D7" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="D8" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="D9" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="D10" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="D11" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="derecha">
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="A12" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaA13"
                            value="A13"
                            checked
                            disabled
                          />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="A14" />
                          <span class="checkmark"></span>
                        </span>
                        <div className="anchom">A</div>
                      </div>
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="B12" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaB13"
                            value="B13"
                            checked
                            disabled
                          />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="B15" />
                          <span class="checkmark"></span>
                        </span>
                        <div className="anchom">B</div>
                      </div>
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C12" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C13" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C14" />
                          <span class="checkmark"></span>
                        </span>
                        <div className="anchom">C</div>
                      </div>
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C12" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C13" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="C14" />
                          <span class="checkmark"></span>
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
                      <div>
                      <div className="anchom">E</div>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="E1" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="E2" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="E3" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                      <div>
                      <div className="anchom">F</div>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="F1" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="F2" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="F3" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                      <div>
                      <div className="anchom">G</div>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="G1" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="G2" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="G3" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                      <div>
                      <div className="anchom">H</div>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="H1" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="H2" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="H3" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="centro">
                      <div>
                        <div
                          className="nuestras-sugerencias"
                          tabIndex="0"
                          aria-label="Nuestra sugerencia. E4,E5,E6,E7"
                        >
                          <span class="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="E4"
                              checked
                            />
                            <span class="checkmark"></span>
                          </span>
                          <span class="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="E5"
                              checked
                            />
                            <span class="checkmark"></span>
                          </span>
                          <span class="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="E6"
                              checked
                            />
                            <span class="checkmark"></span>
                          </span>
                          <span class="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="E7"
                              checked
                            />
                            <span class="checkmark"></span>
                          </span>
                        </div>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="E8" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="E9" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="E10" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="E11" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="F4" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="F5" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="F6" />
                          <span class="checkmark"></span>
                        </span>
                        <div
                          className="nuestras-sugerencias"
                          tabIndex="0"
                          aria-label="Nuestra sugerencia. F7,F8,F9,F10"
                        >
                          <span class="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="F7"
                              checked
                            />
                            <span class="checkmark"></span>
                          </span>
                          <span class="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="F8"
                              checked
                            />
                            <span class="checkmark"></span>
                          </span>
                          <span class="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="F9"
                              checked
                            />
                            <span class="checkmark"></span>
                          </span>
                          <span class="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="F10"
                              checked
                            />
                            <span class="checkmark"></span>
                          </span>
                        </div>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="F11" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                      <div>
                        <span class="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaD1"
                            value="G4"
                            checked
                            disabled
                          />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaD1"
                            value="G5"
                            checked
                            disabled
                          />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaD1"
                            value="G6"
                            checked
                            disabled
                          />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="G7" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="G8" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaD1"
                            value="G9"
                            checked
                            disabled
                          />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-escondido">
                          <input
                            type="checkbox"
                            name="butacaD1"
                            value="G10"
                            checked
                            disabled
                          />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="CG11" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="H4" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="H5" />
                          <span class="checkmark"></span>
                        </span>
                        <div
                          className="nuestras-sugerencias"
                          tabIndex="0"
                          aria-label="Nuestra sugerencia. H6,H7,H8,H9"
                        >
                          <span class="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="H6"
                              checked
                            />
                            <span class="checkmark"></span>
                          </span>
                          <span class="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="H7"
                              checked
                            />
                            <span class="checkmark"></span>
                          </span>
                          <span class="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="H8"
                              checked
                            />
                            <span class="checkmark"></span>
                          </span>
                          <span class="container-sugerencia">
                            <input
                              type="checkbox"
                              name="butaca"
                              value="H9"
                              checked
                            />
                            <span class="checkmark"></span>
                          </span>
                        </div>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="H10" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="H11" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="derecha">
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="E12" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="E13" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="E14" />
                          <span class="checkmark"></span>
                        </span>
                        <div className="anchom">E</div>
                      </div>
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="F12" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="F13" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="F14" />
                          <span class="checkmark"></span>
                        </span>
                        <div className="anchom">F</div>
                      </div>
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="G12" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="G13"/>
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="G14" />
                          <span class="checkmark"></span>
                        </span>
                        <div className="anchom">G</div>
                      </div>
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="H12" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="H13" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="H14" />
                          <span class="checkmark"></span>
                        </span>
                        <div className="anchom">H</div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="fieldset" disabled>
                  <legend className="legend">ÚLTIMAS FILAS</legend>
                  <div className="wrapperopciones">
                    <div className="izquierda">
                      <div>
                      <div className="anchom">I</div>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="I1" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="I2" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="I3" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                      <div>
                      <div className="anchom">J</div>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="J1" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="J2" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="J3" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="centro">
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="I4" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="I5" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="I6" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="I7" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="I8" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="I9" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="I10" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="I11" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="J4" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="J5" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="J6" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="J7" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="J8" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="J9" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="J10" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="J11" />
                          <span class="checkmark"></span>
                        </span>
                      </div>
                    </div>
                    <div className="derecha">
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="I12" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="I13" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="I14" />
                          <span class="checkmark"></span>
                        </span>
                        <div className="anchom">I</div>
                      </div>
                      <div>
                      <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="J12" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="J13" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="container-disponible">
                          <input type="checkbox" name="butaca" value="J14" />
                          <span class="checkmark"></span>
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
                    <span class="checkmark"></span>
                  </div>
                  <span class="container-sugerencia">
                    <input
                      type="checkbox"
                      name="butacaref"
                      value="R1"
                      checked
                    />
                    Nuestras sugerencias
                    <span class="checkmark"></span>
                  </span>
                  <span class="container-disponible">
                    <input type="checkbox" name="butacarefe" value="ref" />
                    <span class="checkmark"></span>
                    Disponible
                  </span>
                </div>
              </div>
            </div>
          </main>
          <aside className="aside">
            <div className="aside-wrapper">
              <h3 className="heading-aside">
                <span className="vertical-align">
                  Tu selección para {this.props.location.state.peli}
                </span>
              </h3>
              <div className="flex-arround">
                <p>Fecha</p>
                <p>{this.props.location.state.cuando}</p>
              </div>
              <div className="flex-arround">
                <p>Cantidad de personas </p>
                <p>{this.props.location.state.cantidadDePersonas}</p>
              </div>
              <div className="flex-arround">
                <p>Horario </p>
                <p>{this.props.location.state.hora}</p>
              </div>
              <div className="flex-arround">
                <p>Butacas </p>
                <p> Sin decidir</p>
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
                  pathname: "/filter4",
                  state: {
                    hora: this.state.hora,
                    cuando: this.props.location.state.cuando,
                    cantidadDePersonas: this.props.location.state
                      .cantidadDePersona,
                    peli: this.props.location.state.peli
                  }
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
