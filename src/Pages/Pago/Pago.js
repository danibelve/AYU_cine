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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

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
      pago: "",
      open: false
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

  handleClickOpen = e => {
    this.setState({
      open: true
    });
  };

  handleClose = e => {
    this.setState({
      open: false
    });
  };

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
                  Tu selección para <i lang="en">The Joker</i>
                </span>
              </h3>
              <div className="flex-arround">
                <p>Fecha</p>
                <p>30 de enero</p>
              </div>
              <div className="flex-arround">
                <p>Cantidad de personas </p>
                <p>4 adultos.</p>
              </div>
              <div className="flex-arround">
                <p>Horario </p>
                <p>21:30</p>
              </div>
              <div className="flex-arround" aria-live="polite">
                <p>Butacas </p>
                <p> Opcion 1: H1, H2, H3, H4</p>
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
              <Button
                variant="outlined"
                className="button-contained"
                type="submit"
                onClick={this.handleClickOpen}
              >
                Siguiente
              </Button>
              <Dialog
                open={this.state.open}
                onClose={e => this.handleClose(e)}
                aria-labelledby="form-dialog-title"
                maxWidth="xs"
              >
                <DialogTitle id="form-dialog-title" className="heading-modal">
                  <div className="flex-reverse">
                    <button
                      aria-label="Cerrar modal de registro"
                      className="close-button"
                      onClick={e => this.handleClose(e)}
                    >
                      <span aria-hidden="true">X</span>
                    </button>
                    ¡Hola! Para continuar tenés que registrarte en Sale Cine
                  </div>
                </DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email"
                    type="mail"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="name"
                    label="Contraseña"
                    type="password"
                    variant="outlined"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions className="button-columns">
                  <Button onClick={e => this.handleClose(e)} color="primary">
                    Ya tengo cuenta
                  </Button>
                  <Link
                    to={{
                      pathname: "/checkout",
                    }}
                  >
                    <Button
                      variant="outlined"
                      className="button-contained"
                      type="submit"
                    >
                      Registrarse
                    </Button>
                  </Link>
                </DialogActions>
              </Dialog>
            </div>
          </aside>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Pago;
