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
import IconButton from '@material-ui/core/IconButton';
import Progressbar from "../../Assets/Estados/Funcion.svg";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';


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
      donde: "",
      //value: "",
      inputValueAdulto: 0,
      inputValueNiño: 0,
      inputValueJubilado: 0,
      peli: "",
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

    this.donde = [
      {
        label: "Primeras Filas",
        bajada: "De  fila A a fila D",
        value: "0"
      },
      {
        label: "Centro",
        bajada: "De  fila E a fila H",
        value: "1"
      },
      {
        label: "Últimas filas",
        bajada: "De fila I a fila J",
        value: "2"
      }
    ];


    this.handleCheck = this.handleClick.bind(this);
  }
  componentDidMount() {
    document.title = "Elijan sus preferencias y Sale Cine";
    document.getElementById("Jueves 28").focus();
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
  handleSubmit(e) {
    if (this.state.hora !=="" && this.state.cuando !=="" && 
    (this.state.inputValueAdulto !==0 || this.state.inputValueJubilado !==0 || this.state.inputValueNiño !==0)){
      this.props.history.push('/filter2');
    }
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
                <div className="dias-1">
                <FormLabel component="legend">
                  <i className="sr-only">Elegi una opción de día</i>
                </FormLabel>
                <RadioGroup
                  aria-label="cuando"
                  name="cuando"
                  className="myRadioGroup"
                  required
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
                          id={option.label}
                          ref={(thisMainContent) => {this.mainContent = thisMainContent}}/>
                        <span className="bajadas">{option.bajada}</span>
                      </div>

                    );
                  })}
                </RadioGroup>
                <IconButton className="botonfecha" aria-label="delete">
                  <CalendarTodayIcon />
                </IconButton>
                </div>
              </FormControl>
            </div>
            <h2 className="h2-filter1">¿Cuántos van a ser?</h2>
            <div className="counter-container cuantos-adultos">
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
                  readOnly
                  required
                  id="Adultos"
                  type="text"
                  value={this.state.inputValueAdulto}
                  onChange={this.updateInputValue}
                  aria-live="polite"
                  aria-label={this.state.inputValueAdulto + " Adultos"}/>
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
                required
                  readOnly
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
              <p className="counterBajada bajadas bajada-ninos">De 2 a 10 años</p>
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
                required
                readOnly
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
              <span className="label-contador label-contador-jubilados" id={"label_Jubilados"}>
                Jubilados
              </span>
              <p className="counterBajada bajadas bajada-jubilados">Mayores de 60 años</p>
            </div>
            <h2 className="h2-filter1">¿A qué hora quieren ir?</h2>
            <div className={this.classes.root}>
              <FormControl
                component="fieldset"
                className={this.classes.formControl}
                required
              >
                <FormLabel component="legend" className="dia">
                  <i className="sr-only">"Elegi una opción de horario"</i>
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
            <div className="zona-butacas">
              <h2 className="h2-zonas">¿Qué zona de butacas prefieres?</h2>
              <p className="p-referencia"><a href="">Ver referencia</a></p>
            </div>
            <div className={this.classes.root}>
              <FormControl
                component="fieldset"
                className={this.classes.formControl}
              >
                <div className="dias-1">
                <FormLabel component="legend">
                  <i className="sr-only">Elegi una opción de día</i>
                </FormLabel>
                <RadioGroup
                  aria-label="donde"
                  name="donde"
                  className="myRadioGroup"
                  value={this.state.donde}
                >
                  {this.donde.map((option, key) => {
                    return (
                      <div className="butones-1" key={key}>
                        <FormControlLabel
                          value={option.label}
                          control={<Radio onClick={e => this.handleClick(e)} />}
                          label={option.label}
                          labelPlacement="start"
                          className="zona"
                          id={option.label}
                          />
                        <span className="bajadas">{option.bajada}</span>
                      </div>

                    );
                  })}
                </RadioGroup>
                </div>
              </FormControl>
            </div>
          
          </main>
          <aside className="aside">
            <div className="aside-wrapper">
            <img src={Progressbar} className="progress-bar" alt="Paso actual, selección de función"/>
              <h3 className="heading-aside">
                <span className="heading3-padding">
                  Tu selección para <i lang="en">The Joker</i>
                </span>
              </h3>
              <div className="datos-aside">
                <div className="flex-arround">
                  <p className="p-aside">Fecha</p>
                  <p className={this.armarFecha() === "Sin definir" ? "gris" : "violeta"}>{this.armarFecha()}</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside"><abbr title="cantidad">Cant.</abbr> de personas </p>
                  <p className={this.armarCantidadDePersonas() === "Sin definir" ? "gris" : "violeta"}> {this.armarCantidadDePersonas()}</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Cine </p>
                  <p className="gris">Sin definir</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Horario </p>
                  <p className="gris"> Sin definir</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Butacas </p>
                  <p className="gris"> Sin definir</p>
                </div>
                <div className="subtotal-resumen">
                  <div className="flex-arround">
                      <p className="p-aside aside-subtotal-off">Subtotal </p>
                      <p className="gris aside-subtotal-off-1">El precio se actualizará al elegir la funcion</p>
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
                      history.push("/");
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
                  disabled= {(this.state.hora !=="" && this.state.cuando !=="" && (this.state.inputValueAdulto !==0 || this.state.inputValueJubilado !== 0 || this.state.inputValueNiño !== 0)) ? false : true}
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

export default withRouter(Filter);
