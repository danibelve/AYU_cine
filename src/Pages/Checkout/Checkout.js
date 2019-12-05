import React from "react";
import "./Checkout.css";
import "../../Styles/Commons.css";
import "../../Components/Aside/Aside.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Avatar from "@material-ui/core/Avatar";
import "../../Components/Counter/Counter.css";
import Button from "@material-ui/core/Button";
import { Route, Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
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
      open: false,
      inputValuePersona1: 0
    };

    this.handleCheck = this.handleClick.bind(this);
  }

  handleClickRestarPersona1(e) {
    const value = this.state.inputValuePersona1;
    if (
      this.state.inputValuePersona1 === "" ||
      this.state.inputValuePersona1 === 0
    ) {
      this.setState({ inputValuePersona1: 0 });
    } else {
      this.setState({
        inputValuePersona1: parseInt(value) - 1
      });
    }
  }
  handleClickSumarPersona1(e) {
    const value = this.state.inputValuePersona1;
    if (this.state.inputValuePersona1 === "") {
      this.setState({ inputValuePersona1: 1 });
    } else {
      this.setState({
        inputValuePersona1: parseInt(value) + 1
      });
    }
  }

  componentDidMount() {
    document.title = "¿Quienés pagan esta salida? En Sale Cine";
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
            <h1 className="h1-filter">¿Quiénes pagan esta salida?</h1>
            <p className="bajada">
              Agregar a tus amigos que vayan a pagar. ¡Podes ver los grupos en
              tu perfil!
            </p>
            <h2>
              Este es el grupo de Joker, elegí cuantas entradas paga cada
              integrantes
            </h2>
            <div className="displayflex-contacto">
              <div className="wrapper-contacto">
                <Avatar>OP</Avatar>
                <p className="margin0auto">Tu contacto</p>
                <p className="margin0auto">+54 1156439494</p>
                <div className="persona1">
                  <div className="counter-center">
                    <div className="persona-card">
                      <Fab
                        variant="round"
                        className="buton-peque"
                        aria-label="Restar una entrada"
                        onClick={e => this.handleClickRestarPersona1(e)}
                      >
                        -
                      </Fab>
                      <TextField
                        id="persona1"
                        type="text"
                        value={this.state.inputValuePersona1}
                        onChange={this.updateInputValuePersona1}
                        className="input-width"
                        aria-live="polite"
                        aria-label={this.state.inputValuePersona1 + " entradas"}
                        //aria-describedby={'label_' +this.props.id}
                      />
                      <Fab
                        variant="round"
                        className="buton-peque"
                        aria-label="Sumar una entrada"
                        onClick={e => this.handleClickSumarPersona1(e)}
                      >
                        +
                      </Fab>
                    </div>
                  </div>
                  <label className="margin0auto" for="persona1">
                    Entradas a pagar
                  </label>
                </div>
                <div className="fondo-violeta">
                  <Button className="editar-perfil">Editar Perfil</Button>
                </div>
              </div>
            </div>
            <div className="displayflex-contacto">
              <div className="wrapper-contacto">
                <Avatar>OP</Avatar>
                <p className="margin0auto">Tu contacto</p>
                <p className="margin0auto">+54 1156439494</p>
                <div className="persona1">
                  <div className="counter-center">
                    <div className="persona-card">
                      <Fab
                        variant="round"
                        className="buton-peque"
                        aria-label="Restar una entrada"
                        onClick={e => this.handleClickRestarPersona1(e)}
                      >
                        -
                      </Fab>
                      <TextField
                        id="persona2"
                        type="text"
                        value={this.state.inputValuePersona2}
                        onChange={this.updateInputValuePersona2}
                        className="input-width"
                        aria-live="polite"
                        aria-label={this.state.inputValuePersona2 + " entradas"}
                        //aria-describedby={'label_' +this.props.id}
                      />
                      <Fab
                        variant="round"
                        className="buton-peque"
                        aria-label="Sumar una entrada"
                        onClick={e => this.handleClickSumarPersona2(e)}
                      >
                        +
                      </Fab>
                    </div>
                  </div>
                  <label className="margin0auto" for="persona1">
                    Entradas a pagar
                  </label>
                </div>
                <div className="fondo-violeta">
                  <Button className="editar-perfil">Editar Perfil</Button>
                </div>
              </div>
            </div>
            <div></div>
          </main>
          <aside className="aside">
            <div className="aside-wrapper">
              <h3 className="heading-aside">
                <span className="heading3-padding">
                  Tu selección para <span lang="en">The Joker</span>
                </span>
              </h3>
              <div className="flex-arround">
                <p>Fecha</p>
                <p></p>
              </div>
              <div className="flex-arround">
                <p>Cantidad de personas </p>
                <p></p>
              </div>
              <div className="flex-arround">
                <p>Horario </p>
                <p></p>
              </div>
              <div className="flex-arround">
                <p>Butacas </p>
                <p></p>
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
                    ¡Ya enviaste todos los links de pagos a tus contactos!
                  </div>
                </DialogTitle>
                <DialogContent>
                  <p className="texto-dialogo">
                    Podes hacer tu compra ahora o dejar las entradas reservadas
                    a tu nombre. Recordá que tenes hasta 40 minutos antes de la
                    función para comprarlas.
                  </p>
                </DialogContent>
                <DialogActions className="button-columns">
                  <Button onClick={e => this.handleClose(e)} color="primary">
                    Reservar mis entradas
                  </Button>
                  <Link
                    to={{
                      pathname: "/checkout2"
                    }}
                  >
                    <Button
                      variant="outlined"
                      className="button-contained"
                      type="submit"
                    >
                      Comprar mis entradas
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

export default Checkout;
