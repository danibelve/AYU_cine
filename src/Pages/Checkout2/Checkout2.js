import React from "react";
import "./Checkout2.css";
import "../../Styles/Commons.css";
import "../../Components/Aside/Aside.css";
import HeaderUser from "../../Components/Header/HeaderUser";
import Avatar from "@material-ui/core/Avatar";
import Footer from "../../Components/Footer/Footer";
import "../../Components/Counter/Counter.css";
import Logos from "../../Assets/tarjetas.svg";
import LogosMP from "../../Assets/logoMP.jpg";
import Button from "@material-ui/core/Button";
import { Route, Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Progressbar from "../../Assets/Estados/Pago.svg";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

class Checkout2 extends React.Component {
  constructor(props) {
    super(props);

    this.classes = makeStyles(theme => ({
      root: {
        "& > *": {
          margin: theme.spacing(1)
        }
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120
      },
      selectEmpty: {
        marginTop: theme.spacing(2)
      }
    }));

    this.promo = [
      {
        label: "Promo 2x1",
        bajada: "Cinépolis ofrece un 2x1 a todas las personas por motivo de apertura. ¡No te lo pierdas!",
        value: "0"
      },
      {
        label: "Promo 365",
        bajada: "2X1",
        value: "1"
      },
      {
        label: "Promo Claro",
        bajada: "Disponibilidad total",
        value: "2"
      },
    ];

    this.state = {
      open: false,
      select: ""
    };
  }

  handleClickSelect = e => {
    const selectValue = e.target.value;
    this.setState({
      select: selectValue
    });
  };

  componentDidMount() {
    document.title = "¿Quienés pagan esta salida? En Sale Cine";
  }

  handleClick(event) {
    const option = event.target.value;
    this.setState({ pago: option });
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <HeaderUser></HeaderUser>
        <div className="box-shadow"></div>
        <div className="divide">
          <main id="mainContent" className="filter">
            <h1 className="h1-filter">¿Quiénes pagan esta salida?</h1>
            <h2 className="h2-filter1">Tu información personal</h2>
            <form className={this.classes.root} noValidate autoComplete="off">
              <div className="form-nom-ape">
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  label="Nombre"
                />
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  label="Apellido"
                />
              </div>
              <div className="form-direccion">
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  label="Dirección"
                />
              </div>
              <div className="form-pais-ciudad">
                <FormControl
                  variant="outlined"
                  className={this.classes.formControl}
                >
                  <InputLabel ref="pais" id="demo-simple-select-outlined-label">
                    País
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={this.state.select}
                    onChange={e => this.handleClickSelect(e)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Argentina</MenuItem>
                    <MenuItem value={20}>Brasil</MenuItem>
                    <MenuItem value={30}>Chile</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  label="Ciudad"
                />
              </div>
              <div className="form-cp-tel">
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  label="Código Postal"
                />
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  label="Teléfono"
                />
              </div>
              <div className="info-de-pago">
                <h2>Información de pago</h2>
                <div className="white-card">
                  <h3 className="h3-tc">Tarjeta de Crédito/Débito</h3>
                  <img
                    className="tarjetas-credito"
                    src={Logos}
                    alt="Tarjetas permitidas: mastercard, visa y american express"
                  />
                  <p>
                    Compras online protegidas. Este sitio hace que tus
                    transacciones online sean tan seguras, rápidas y
                    convenientes.
                  </p>
                  <div className="numero-tc">
                    <TextField
                      id="standard-basic"
                      variant="outlined"
                      label="Número de tarjeta"
                    />
                  </div>
                  <div className="otros-campos-tc">
                    <div className="nombre-tc otros">
                      <TextField
                        id="standard-basic"
                        variant="outlined"
                        label="Nombre en la tarjeta"
                      />
                    </div>
                    <div className="venc-tc otros">
                      <TextField
                        id="standard-basic"
                        variant="outlined"
                        label="Venc."
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="cvv-tc otros">
                      <TextField
                        id="standard-basic"
                        variant="outlined"
                        label="CVV"
                        placeholder="Código de seguridad"
                      />
                    </div>
                  </div>
                </div>
                <div className="white-card white-card-mp">
                  <h3 className="h3-tc">Mercado Pago</h3>
                  <img
                    className="tarjetas-credito logo-mp"
                    src={LogosMP}
                    alt="Tarjetas permitidas: mastercard, visa y american express"
                  />
                  <p>
                    Serás redirigido hacia el sitio de Mercado Pago para
                    completar la compra de las entradas de manera segura.
                  </p>
                </div>
        
                  <h3 className="h3-tc">Promociones</h3>
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
                  aria-label="promociones"
                  name="promo"
                  className="myRadioGroup"
                  value={this.state.promo}
                >
                  {this.promo.map((option, key) => {
                    return (
                      <div className="butones-1 butones-promos" key={key}>
                        <FormControlLabel
                          value={option.label}
                          control={<Radio onClick={e => this.handleClick(e)} />}
                          label={option.label}
                          labelPlacement="start"
                          className="promo"
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

              </div>
            </form>
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
                  Tu selección para <span lang="en">The Joker</span>
                </span>
              </h3>
              <div className="datos-aside">
                <div className="flex-arround">
                  <p className="p-aside">Fecha</p>
                  <p className="violeta">Viernes 29</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">
                    <abbr title="cantidad">Cant.</abbr> de personas{" "}
                  </p>
                  <p className="violeta">Adultos 4.</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Cine </p>
                  <p className="violeta">Cinépolis Caballito</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Horario </p>
                  <p className="violeta">23:00h, Subt. 2D</p>
                </div>
                <div className="flex-arround" aria-live="polite">
                  <p className="p-aside">Butacas </p>
                  <p className="violeta">Opción 01. H1, H2, H3, H4</p>
                </div>
                <div className="subtotal-resumen">
                  <div className="flex-arround">
                    <p className="p-aside">Subtotal </p>
                    <p className="violeta">$600</p>
                  </div>
                </div>
                <div className="subtotal-resumen descuento-resumen">
                  <div className="flex-arround">
                    <p className="p-aside descuento">Descuento</p>
                    <p className="violeta descuento-pesos">-$300</p>
                  </div>
                </div>
                <div className="subtotal-resumen total-resumen">
                  <div className="flex-arround">
                    <p className="p-aside total">Total</p>
                    <p className="violeta total-pesos">$300</p>
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
              <Link
                to={{
                  pathname: "/congrats"
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

export default Checkout2;
