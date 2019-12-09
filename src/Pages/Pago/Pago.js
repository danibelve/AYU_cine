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
import { Route, Link, withRouter } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Progressbar from "../../Assets/Estados/Pago.svg"
import $ from 'jquery';

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
          "Con esta opción vas a poder dividir el total de entradas entre los integrantes de la salida",
        recomendado: true,
        bajada2: "RECOMENDADO",
        beneficio1: "Dividís la cantidad de entradas a pagar",
        beneficio2: "Cada integrante puede pagar como quiere",
        beneficio3:
          "Tienen hasta 40 minutos antes de la película para efectuar la compra.",
        value: "0"
      },
      {
        label: "¡Pago yo!",
        bajada: "Con esta opción vas a pagar vos el total de las entradas",
        recomendado: false,
        bajada2: "MÉTODO CLÁSICO",
        beneficio1: "Te asegurás todas las entradas",
        beneficio2: "La compra es más rápida",
        beneficio3:
          "No es una reserva, la compra se efectúa en el momento.",
        value: "1"
      }
    ];

    this.state = {
      pago: "",
      open: false,
      invalidNombre: false,
      invalidTelefono: false,
      invalidMail: false,
      invalidPass: false,
      invalidPass2: false,
      pass: "",
    };

    this.handleCheck = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.title = "Elegí cómo van a pagar en SaleCine";
    $("#root").focus();
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
    if (!this.state.invalidNombre && 
      !this.state.invalidMail &&
       !this.state.invalidTelefono
         && !this.state.invalidPass
         && !this.state.invalidPass2){
      this.props.history.push('/checkout');
    }
  }

  validatePass(e) {
    const inputValue = e.target.value;
    if (inputValue.length < 3 || inputValue === "") {
      this.setState({ invalidPass: true });
    } else {
      this.setState({ invalidPass: false, pass: inputValue  });
    }
  }

  validatePass2(e) {
    const inputValue = e.target.value;
    if (inputValue !== this.state.pass) {
      this.setState({ invalidPass2: true });
    } else {
      this.setState({ invalidPass2: false });
    }
    console.log("valor", inputValue);
    console.log("valor pass", this.state.pass);
    console.log(this.state.invalidPass2);
  }

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <div className="box-shadow"></div>
        <div className="divide">
          <main id="mainContent" className="filter">
            <h1 className="h1-filter">¿Cómo querés pagar?</h1>
            <p className="bajada">
            En Sale Cine te damos la posibilidad de pagar entre muchos. ¡Que nadie pague de más!
            </p>
            <h2>¡Elegí cómo queres pagarlo y con quién!</h2>
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
                        <p className="bajada-op-pago">{option.bajada}</p>
                        <div
                          className={option.recomendado ? "clase1" : "clase2"}
                        >
                          {option.bajada2}
                        </div>
                        <div className="beneficios-pago">Beneficios</div>
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
            <img src={Progressbar} className="progress-bar" alt="Paso actual, selección de método de pago"/>
              <h3 className="heading-aside">
                <span className="heading3-padding">
                  Tu selección para <i lang="en">The Joker</i>
                </span>
              </h3>
              <div className="datos-aside">
                <div className="flex-arround">
                  <p className="p-aside">Fecha</p>
                  <p className="violeta">30 de enero</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside"><abbr title="cantidad">Cant.</abbr> de personas </p>
                  <p className="violeta">4 adultos.</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Cine </p>
                  <p className="violeta">Hoyts Caballito</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Horario </p>
                  <p className="violeta">21:30</p>
                </div>
                <div className="flex-arround" aria-live="polite">
                  <p className="p-aside">Butacas </p>
                  <p className="violeta">H1, H2, H3, H4</p>
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
                      history.push("/filter4");
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
                <button
                      aria-label="Cerrar modal de registro"
                      className="close-button"
                      onClick={e => this.handleClose(e)}
                      title="Cerrar"
                    >
                      <span aria-hidden="true">X</span>
                    </button>
                  <div className="flex-reverse">
                    ¡Hola! Para continuar tenés que registrarte en Sale Cine
                  </div>
                </DialogTitle>
                <DialogContent>
                <form>
                  <div className="registro-form">
                    <div className="inputs" aria-live="polite">
                      <label for="nombre">
                        Nombre <i role="presentation">*</i>
                      </label>
                      <input
                        autoFocus
                        required
                        placeholder="Juan Perez"
                        id="nombre"
                        type="text"
                        ref={this.textInput}
                        aria-invalid={this.state.invalidNombre}
                        onBlur={e => this.validateNombre(e)}
                      />
                      {this.state.invalidNombre && <p>Ingrese un nombre</p>}
                    </div>
                    <div className="inputs" aria-live="polite">
                      <label for="mail">
                        E-mail <i role="presentation">*</i>
                      </label>
                      <input
                        required
                        type="mail"
                        placeholder="juanperez@gmail.com"
                        id="mail"
                        aria-invalid={this.state.invalidMail}
                        onBlur={e => this.validateMail(e)}
                      />
                      {this.state.invalidMail && <p>Ingrese un mail valido</p>}
                    </div>
                    <div className="inputs" aria-live="polite">
                      <label for="telefono">
                        Teléfono <i role="presentation">*</i>
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
                        <p>Ingrese un teléfono valido</p>
                      )}
                    </div>
                    <div className="inputs" aria-live="polite">
                      <label for="pass">
                        Contraseña <i role="presentation">*</i>
                      </label>
                      <input
                        required
                        type="password"
                        placeholder="*******"
                        id="pass"
                        aria-invalid={this.state.invalidPass}
                        onBlur={e => this.validatePass(e)}
                      />
                      {this.state.invalidPass && (
                        <p>Ingrese una contraseña</p>
                      )}
                    </div>
                    <div className="inputs" aria-live="polite">
                      <label for="pass2">
                        Repetir contraseña <i role="presentation">*</i>
                      </label>
                      <input
                        required
                        type="password"
                        placeholder="*******"
                        id="pass2"
                        aria-invalid={this.state.invalidPass2}
                        onBlur={e => this.validatePass2(e)}
                      />
                      {this.state.invalidPass2 && (
                        <p>Las contraseñas tienen que coincidir</p>
                      )}
                    </div>
                  </div>
                  <div className="botones-registro">
                    <Button className="ya-tengo-cuenta" onClick={e => this.handleClose(e)} color="primary">
                      Ya tengo cuenta
                    </Button>
                    <button
                        id="crear-perfil"
                        className="button-contained guardar-perfil guardar-perfil-modal"
                        type="submit"
                        onClick={(e) => this.handleSubmit()}
                      >
                        GUARDAR PERFIL
                      </button>
                    </div>
                </form>
                </DialogContent>
              </Dialog>
            </div>
          </aside>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default withRouter(Pago);
