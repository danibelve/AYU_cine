import React from "react";
import "./Pago.css";
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
import { Route, Link } from "react-router-dom";

class Pago extends React.Component {
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

    this.opciones = [
      {
        label: "Pago compartido",
        bajada:
          "Con esta opción van a poder dividir con tus amigos el total de las entradas.",
        recomendado: true,
        bajada2: "Recomendado",
        beneficio1: "Dividí gastos con tus amigos",
        beneficio2: "Todos pagan lo mismo",
        beneficio3:
          "Tienen hasta 40 minutos antes de la película para efectuar la compra",
        value: "0"
      },
      {
        label: "¡Pago yo!",
        bajada: "Con esta opción vas a pagar vos el total de las entradas.",
        recomendado: false,
        bajada2: "Método clásico",
        beneficio1: "Pagas todo vos solo",
        beneficio2: "No tener que esperar a nadie.",
        beneficio3:
          "No es una reserva, por lo cual la compra se efectúa en el momento.",
        value: "1"
      }
    ];

    this.state = {
      pago: ""
    };

    this.handleCheck = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.title = "Elegí cómo van a pagar en SaleCine";
  }

  handleClick(event) {
    const option = event.target.value;
    this.setState({ pago: option });
    
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
            <h2>Opciones sugeridas</h2>
            <div className={this.classes.root}>
              <FormControl
                component="fieldset"
                className={this.classes.formControl}
              >
                <FormLabel component="legend">
                  <i className="sr-only">Opciones para pagar </i>
                </FormLabel>
                <RadioGroup
                  aria-label="Medios de pago"
                  className="miRadioButtonClass"
                  name="pago"
                  value={this.state.pago}
                >
                  {this.opciones.map((option, key) => {
                    return (
                      <div id={key} className="radiowrapper">
                        <FormControlLabel
                          value={option.value}
                          control={<Radio onClick={e => this.handleClick(e)} />}
                          label={option.label}
                          labelPlacement="start"
                          className="strong"
                          checked={this.state.pago === option.value}
                        />
                        <p>{option.bajada}</p>
                        <div
                          className={option.recomendado ? "clase1" : "clase2"}
                        >
                          {option.bajada2}
                        </div>
                        <div>Beneficios</div>
                        <ul className="beneficios">
                          <li className="beneficios-li">{option.beneficio1}</li>
                          <li className="beneficios-li">{option.beneficio2}</li>
                          <li className="beneficios-li">{option.beneficio3}</li>
                        </ul>
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
              <div className="flex-arround" aria-live="polite">
                <p>Butacas </p>
                <p> {this.props.location.state.butacas}}</p>
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
                  pathname: "/checkout",
                  state: {
                    hora: this.props.location.state.hora,
                    cuando: this.props.location.state.cuando,
                    cantidadDePersonas: this.props.location.state
                      .cantidadDePersona,
                    peli: this.props.location.state.peli,
                    butacas: this.props.location.state.butaca
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

export default Pago;
