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
import Button from "@material-ui/core/Button";
import { Route, Link, withRouter } from "react-router-dom";
import {Helmet} from "react-helmet";


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
      }
    }));

    this.state = {
      cuando: "",
      hora: "",
      //value: "",
      inputValueAdulto: 0,
      inputValueNiño: 0,
      inputValueJubilado: 0,
      peli: ""
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
    this.setState({
      peli: this.props.location.state.peli
    });
  }

  armarCantidadDePersonas() {
    let cantidadDePersonas = "";
    const nino = this.state.inputValueNiño;
    const jubilado = this.state.inputValueJubilado;
    const adulto = this.state.inputValueAdulto;
    if (
      this.state.inputValueNiño === 0 &&
      this.state.inputValueAdulto === 0 &&
      this.state.inputValueJubilado === 0
    ) {
      cantidadDePersonas = "Sin definir";
    } else {
      if (this.state.inputValueAdulto > 0) {
        cantidadDePersonas += "Adultos: " + adulto + ". ";
      }
      if (this.state.inputValueNiño > 0) {
        cantidadDePersonas += "Niño: " + nino + ". ";
      }

      if (this.state.inputValueJubilado > 0) {
        cantidadDePersonas += "Jubilado: " + jubilado + ". ";
      }
    }
    return cantidadDePersonas;
  }

  handleClickRestarAdulto(e) {
    const value = this.state.inputValueAdulto;
    if (
      this.state.inputValueAdulto === "" ||
      this.state.inputValueAdulto === 0
    ) {
      this.setState({ inputValueAdulto: 0 });
    } else {
      this.setState({
        inputValueAdulto: parseInt(value) - 1
      });
    }
  }
  handleClickSumarAdulto(e) {
    const value = this.state.inputValueAdulto;
    if (this.state.inputValueAdulto === "") {
      this.setState({ inputValueAdulto: 1 });
    } else {
      this.setState({
        inputValueAdulto: parseInt(value) + 1
      });
    }
  }
  handleClickRestarNiño(e) {
    const value = this.state.inputValueNiño;
    if (this.state.inputValueNiño === "" || this.state.inputValueNiño === 0) {
      this.setState({ inputValueNiño: 0 });
    } else {
      this.setState({
        inputValueNiño: parseInt(value) - 1
      });
    }
  }
  handleClickSumarNiño(e) {
    const value = this.state.inputValueNiño;
    if (this.state.inputValueNiño === "") {
      this.setState({ inputValueNiño: 1 });
    } else {
      this.setState({
        inputValueNiño: parseInt(value) + 1
      });
    }
  }
  handleClickRestarJubilado(e) {
    const value = this.state.inputValueJubilado;
    if (
      this.state.inputValueJubilado === "" ||
      this.state.inputValueJubilado === 0
    ) {
      this.setState({ inputValueJubilado: 0 });
    } else {
      this.setState({
        inputValueJubilado: parseInt(value) - 1
      });
    }
  }
  handleClickSumarJubilado(e) {
    const value = this.state.inputValueJubilado;
    if (this.state.inputValueJubilado === "") {
      this.setState({ inputValueJubilado: 1 });
    } else {
      this.setState({
        inputValueJubilado: parseInt(value) + 1
      });
    }
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

  armarHora() {
    let hora = "";
    const horaValue = this.state.hora;
    if (this.state.hora === "") {
      hora = "Sin definir";
    } else {
      hora = horaValue;
    }
    return hora;
  }
  armarFecha() {
    let cuando = "";
    const cuandoValue = this.state.cuando;
    if (this.state.cuando === "") {
      cuando = "Sin definir";
    } else {
      cuando = cuandoValue;
    }
    return cuando;
  }

  handleClickMain(){
    this.mainContent.focus()
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
                          control={<Radio onClick={e => this.handleClick(e)} />}
                          label={option.label}
                          labelPlacement="start"
                          className="dias"
                          ref={(thisMainContent) => {this.mainContent = thisMainContent}}/>
                        <span className="bajadas">{option.bajada}</span>
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
                  onClick={e => this.handleClickRestarAdulto(e)}
                >
                  -
                </Fab>
                <TextField
                  id="Adultos"
                  type="text"
                  value={this.state.inputValueAdulto}
                  onChange={this.updateInputValue}
                  aria-live="polite"
                  aria-label={this.state.inputValueAdulto + " Adultos"}
                  //aria-describedby={'label_' +this.props.id}
                />
                <Fab
                  variant="round"
                  className="buton-peque"
                  aria-label="Sumar un adulto"
                  onClick={e => this.handleClickSumarAdulto(e)}
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
                  onClick={e => this.handleClickRestarNiño(e)}
                >
                  -
                </Fab>
                <TextField
                  id="Niños"
                  type="text"
                  value={this.state.inputValueNiño}
                  onChange={this.updateInputValue}
                  aria-live="polite"
                  aria-label={this.state.inputValueNiño + " Niños"}
                  //aria-describedby={'label_' +this.props.id}
                />
                <Fab
                  variant="round"
                  className="buton-peque"
                  aria-label="Sumar un niño"
                  onClick={e => this.handleClickSumarNiño(e)}
                >
                  +
                </Fab>
              </div>
              <span className="label-contador" id={"label_Niños"}>
                Niños
              </span>
              <p className="counterBajada bajadas">De 2 a 10 años</p>
            </div>
            <div className="counter-container">
              <div className="butones-2">
                <Fab
                  variant="round"
                  className="buton-peque"
                  aria-label="Restar un Jubilado"
                  onClick={e => this.handleClickRestarJubilado(e)}
                >
                  -
                </Fab>
                <TextField
                  id="Jubilados"
                  type="text"
                  value={this.state.inputValueJubilado}
                  onChange={this.updateInputValue}
                  aria-live="polite"
                  aria-label={this.state.inputValueJubilado + " Jubilados"}
                  //aria-describedby={'label_' +this.props.id}
                />
                <Fab
                  variant="round"
                  className="buton-peque"
                  aria-label="Sumar un Jubilado"
                  onClick={e => this.handleClickSumarJubilado(e)}
                >
                  +
                </Fab>
              </div>
              <span className="label-contador" id={"label_Jubilados"}>
                Jubilados
              </span>
              <p className="counterBajada bajadas">Mayores de 60 años</p>
            </div>
            <h2>¿A qué hora quieren ir?</h2>
            <div className={this.classes.root}>
              <FormControl
                component="fieldset"
                className={this.classes.formControl}
              >
                <FormLabel component="legend" className="dia">
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
                          control={
                            <Radio onMouseUp={e => this.handleClick(e)} />
                          }
                          label={option.label}
                          labelPlacement="start"
                          className="strong"
                          name="hora"
                        />
                        <span className="bajadas">{option.bajada}</span>
                      </div>
                    );
                  })}
                </RadioGroup>
              </FormControl>
            </div>
          </main>
          <aside className="aside">
            <div className="aside-wrapper">
              <h3 className="heading-aside">
                <span className="heading3-padding">
                  Tu selección para {this.state.peli}
                </span>
              </h3>
              <div className="datos-aside">
                <div className="flex-arround">
                  <p className="p-aside">Fecha</p>
                  <p className={this.armarFecha() === "Sin definir" ? "gris" : "violeta"}>{this.armarFecha()}</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Cant. de personas </p>
                  <p className={this.armarCantidadDePersonas() === "Sin definir" ? "gris" : "violeta"}> {this.armarCantidadDePersonas()}</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Horario </p>
                  <p className="gris"> Sin definir</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Butacas </p>
                  <p className="gris"> Sin definir</p>
                </div>
              </div>
            </div>
            <div className="button-container">
              <Route
                render={({ history }) => (
                  <Button
                    variant="outlined"
                    className="button-outlined-black"
                    onClick={() => {
                      history.push("/");
                    }}
                  >
                    Anterior
                  </Button>
                )}
              />
              <Link
                to={{
                  pathname: "/filter2",
                  state: {
                    hora: this.state.hora,
                    cuando: this.state.cuando,
                    cantidadDePersonas: this.armarCantidadDePersonas(),
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

export default withRouter(Filter);
