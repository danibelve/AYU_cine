import React from "react";
import "./Checkout.css";
import "../../Styles/Commons.css";
import "../../Components/Aside/Aside.css";
import {Helmet} from "react-helmet";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Avatar from "@material-ui/core/Avatar";
import "../../Components/Counter/Counter.css";
import Button from "@material-ui/core/Button";
import { Route, withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import Progressbar from "../../Assets/Estados/Pago.svg";
import $ from 'jquery';

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      inputValuePersona1: 0,
      hideAdd: false,
      invalidNombre: false,
      invalidTelefono: false,
      invalidMail: false,
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

  hideItem(e) {
    this.setState({
      hideAdd: true
    });
    $("#nombre").focus();
  }
  
  handleSubmit() {
    if (!this.state.invalidNombre && !this.state.invalidMail && !this.state.invalidTelefono){
      this.props.history.push('/checkout-contacto');
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
            Agregá a las personas que van a pagar esta vez. En tu perfil 
            vas a poder ver los grupos de pago de cada salida. 
            </p>
            <h2 className="h2-quienes-pagan">
            Este es tu grupo para ver “The Joker”, seleccioná cuántas entradas paga cada uno.
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
                        disabled
                        id="persona1"
                        type="text"
                        value={this.state.inputValuePersona1}
                        onChange={this.updateInputValuePersona1}
                        className="input-width"
                        aria-live="polite"
                        aria-label={"pagás " + this.state.inputValuePersona1 + " entradas"}
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
            <div
              className={
                this.state.hideAdd
                  ? "displayflex-contacto form-contacto-visible"
                  : "displayflex-contacto form-contacto"
              }
            >
              <div className="wrapper-contacto wrapper-contacto-form">
                <form>
                  <div className="persona2-form">
                    <div className="inputs" aria-live="polite">
                      <label for="nombre">
                        Nombre <i aria-hidden="true">*</i>
                      </label>
                      <input
                        required
                        placeholder="Juan Perez"
                        id="nombre"
                        type="text"
                        ref={this.textInput}
                        aria-invalid={this.state.invalidNombre}
                        onBlur={e => this.validateNombre(e)}
                      />
                      {this.state.invalidNombre && <p>Ingresá un nombre</p>}
                    </div>
                    <div className="inputs" aria-live="polite">
                      <label for="mail">
                        E-mail <i aria-hidden="true">*</i>
                      </label>
                      <input
                        required
                        type="mail"
                        placeholder="juanperez@gmail.com"
                        id="mail"
                        aria-invalid={this.state.invalidMail}
                        onBlur={e => this.validateMail(e)}
                      />
                      {this.state.invalidMail && <p>Ingresá un mail válido</p>}
                    </div>
                    <div className="inputs" aria-live="polite">
                      <label for="telefono">
                        Teléfono <i aria-hidden="true">*</i>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="1158604322"
                        id="telefono"
                        aria-invalid={this.state.invalidTelefono}
                        onBlur={e => this.validateTelefono(e)}
                      />
                      {this.state.invalidTelefono && (
                        <p>Ingresá un teléfono válido</p>
                      )}
                    </div>
                  </div>
                  <div className="fondo-violeta">

                    <button
                      id="guardar-perfil"
                      className="editar-perfil guardar-perfil"
                      onClick={(e) => this.handleSubmit()}
                    >
                      GUARDAR PERFIL
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="displayflex-contacto displayflex-contacto-add">
            <Route
                render={({ history }) => (
                  <button
                className="wrapper-contacto wrapper-contacto-add"
                onClick={() => {
                  history.push("/checkout1");
                }}
              >
                <p className="add-contacto">
                  <i aria-hidden="true">+{" "}</i>
                  <strong className="add-contacto-strong">
                    Agregar contacto
                  </strong>
                </p>
              </button>
                )}
              />
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
                  <p className="p-aside">Cant. de personas </p>
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
                      history.push("/pago");
                    }}
                  >
                    Anterior
                  </Button>
                )}
              />
              <Button
                disabled
                variant="outlined"
                className="button-contained"
                type="submit"
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

export default withRouter(Checkout);
