import React from "react";
import "./CheckoutContacto.css";
import "../../Styles/Commons.css";
import {Helmet} from "react-helmet";
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
import Progressbar from "../../Assets/Estados/Pago.svg";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import $ from 'jquery';

class CheckoutContacto extends React.Component {
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
      inputValuePersona1: 0,
      inputValuePersona2: 0
    };
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

  handleClickRestarPersona2(e) {
    const value = this.state.inputValuePersona2;
    if (
      this.state.inputValuePersona2 === "" ||
      this.state.inputValuePersona2 === 0
    ) {
      this.setState({ inputValuePersona2: 0 });
    } else {
      this.setState({
        inputValuePersona2: parseInt(value) - 1
      });
    }
  }
  handleClickSumarPersona2(e) {
    const value = this.state.inputValuePersona2;
    if (this.state.inputValuePersona2 === "") {
      this.setState({ inputValuePersona2: 1 });
    } else {
      this.setState({
        inputValuePersona2: parseInt(value) + 1
      });
    }
  }

  componentDidMount() {
    document.title = "¿Quienés pagan esta salida? En Sale Cine";
    $("#sumar-contacto").focus();
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

  hideItem(e) {
    this.setState({
      hideAdd: true
    });
  }

  validateNombre(e) {
    const inputValue = e.target.value;
    if (inputValue.length < 3) {
      this.setState({ invalidNombre: true });
    } else {
      this.setState({ invalidNombre: false });
    }
  }

  validateTelefono(e) {
    const inputValue = e.target.value;
    if (inputValue.length < 3) {
      this.setState({ invalidTelefono: true });
    } else {
      this.setState({ invalidTelefono: false });
    }
  }

  validateMail(e) {
    const inputValue = e.target.value;
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(inputValue)) {
      this.setState({ invalidMail: false });
    } else {
      this.setState({ invalidMail: true });
    }
  }

  handleSubmit() {
    if (
      !this.state.invalidNombre &&
      !this.state.invalidMail &&
      !this.state.invalidTelefono
    ) {
      this.props.history.push("/checkout-contacto");
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
            <h1 className="h1-filter">¿Quiénes pagan esta salida?</h1>
            <p className="bajada">
              Agregar a tus amigos que vayan a pagar. ¡Podes ver los grupos en
              tu perfil!
            </p>
            <h2 className="h2-quienes-pagan">
              Este es el grupo de The Joker, elegí cuantas entradas paga cada
              integrantes
            </h2>
            <div className="displayflex-contacto">
              <div className="wrapper-contacto">
                <Avatar>EM</Avatar>
                <p className="margin0auto tu-contacto">Exequiel</p>
                <p className="margin0auto tu-contacto-tel">+54 1156439494</p>
                <div className="persona1">
                  <label
                    className="margin0auto checkout-cant-entradas"
                    for="persona1"
                  >
                    CANTIDAD DE ENTRADAS:
                  </label>
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
                        tabIndex="-1"
                        id="persona1"
                        type="text"
                        disabled
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
                </div>
                <div className="">
                  <Button className="editar-perfil">Editar Perfil</Button>
                </div>
              </div>
            </div>
            <div className="displayflex-contacto">
              <div className="wrapper-contacto">
                <Avatar>JP</Avatar>
                <p className="margin0auto tu-contacto">Juan Perez</p>
                <p className="margin0auto tu-contacto-tel">+54 1156439494</p>
                <div className="persona1">
                  <label
                    className="margin0auto checkout-cant-entradas"
                    for="persona2"
                  >
                    CANTIDAD DE ENTRADAS:
                  </label>
                  <div className="counter-center">
                    <div className="persona-card">
                      <Fab
                        variant="round"
                        className="buton-peque"
                        aria-label="Restar una entrada"
                        onClick={e => this.handleClickRestarPersona2(e)}
                      >
                        -
                      </Fab>
                      <TextField
                        readOnly
                        id="persona2"
                        type="text"
                        tabIndex="-1"
                        disabled
                        value={this.state.inputValuePersona2}
                        onChange={this.updateInputValuePersona2}
                        className="input-width"
                        aria-live="polite"
                        aria-label={this.state.inputValuePersona2 + " entradas"}
                        //aria-describedby={'label_' +this.props.id}
                      />
                      <Fab
                        id="sumar-contacto"
                        variant="round"
                        className="buton-peque"
                        aria-label="Sumar una entrada"
                        onClick={e => this.handleClickSumarPersona2(e)}
                      >
                        +
                      </Fab>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Button className="editar-perfil">Editar Perfil</Button>
                </div>
              </div>
            </div>
            <div className="displayflex-contacto displayflex-contacto-add">
              <button
                className="wrapper-contacto wrapper-contacto-add"
                onClick={e => this.hideItem(e)}
              >
                <p className="add-contacto">
                  <i aria-hidden="true">+{" "}</i>
                  <strong className="add-contacto-strong">
                    Agregar contacto
                  </strong>
                </p>
              </button>
            </div>

            <div>
              <p className="aclaracion-contactos">
                A cada contacto se le enviará un link de pago para efectuar la
                compra.
              </p>
            </div>
          </main>
          <aside className="aside">
            <div className="aside-wrapper">
              <img
                src={Progressbar}
                className="progress-bar"
                alt="Paso actual, selección de método de pago"
              />
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
                  <p className="p-aside">Cine </p>
                  <p className="violeta">Hoyts Caballito</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Horario </p>
                  <p className="violeta">23:00h, Subt. 2D</p>
                </div>
                <div className="flex-arround" aria-live="polite">
                  <p className="p-aside">Butacas </p>
                  <p className="violeta">H1, H2, H3, H4</p>
                </div>
                <div className="subtotal-resumen">
                  <div className="flex-arround">
                    <p className="p-aside">Subtotal </p>
                    <p className="violeta"><i aria-hidden="true">$</i>1200<i class="sr-only">pesos</i></p>

                  </div>
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
                      history.push("/checkout");
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
                disabled={(this.state.inputValuePersona1=== 0 || this.state.inputValuePersona2=== 0) ? true : false }
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
                      aria-label="Cerrar modal"
                      className="close-button"
                      onClick={e => this.handleClose(e)}
                      title="Cerrar"
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
                  <ButtonGroup
                    variant="text"
                    color="secondary"
                    size="large"
                    aria-label="large contained secondary button group"
                  >
                    <Button className="button-contained button-contained-modal-1">
                      Reservar entradas
                    </Button>
                    <Link tabIndex="-1" to="/checkout2">
                      <Button className="button-contained button-contained-modal-2">
                        Pagar ahora
                      </Button>
                    </Link>
                  </ButtonGroup>
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

export default CheckoutContacto;
