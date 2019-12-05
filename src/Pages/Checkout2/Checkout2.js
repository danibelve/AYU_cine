import React from "react";
import "./Checkout2.css";
import "../../Styles/Commons.css";
import "../../Components/Aside/Aside.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "../../Components/Counter/Counter.css";
import Logos from "../../Assets/tarjetas.svg"
import Button from "@material-ui/core/Button";
import { Route, Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';


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
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    }));

    this.state = {
      open: false,
      select: ""
    };
  }

  handleClickSelect = (e) => {
    const selectValue = e.target.value
    this.setState({
      select: selectValue
    })
  }

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
        <Header></Header>
        <div className="box-shadow"></div>
        <div className="divide">
          <main id="mainContent" className="filter">
            <h1 className="h1-filter">¿Quiénes pagan esta salida?</h1>
            <h2>Tu información personal</h2>
            <form className={this.classes.root} noValidate autoComplete="off">
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
              <TextField
                id="standard-basic"
                variant="outlined"
                label="Dirección"
              />
              <FormControl variant="outlined" className={this.classes.formControl}>
                <InputLabel
                  ref="pais"
                  id="demo-simple-select-outlined-label"
                >
                  País
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.select}
                  onChange={(e) => this.handleClickSelect(e)}
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
              <h2>información de pago</h2>
              <div className="white-card">
              <h3>Tarjeta de Crédito/Débito</h3>
              <p>Compras online protegidas. 
                Este sitio hace que tus transacciones online sean tan seguras, rápidas y convenientes.</p>
                <img className="tarjetas-credito" src={Logos} alt="Tarjetas permitidas: mastercard, visa y american express"/>
                
                <TextField
                id="standard-basic"
                variant="outlined"
                label="Numero de tarjeta"
              />
              <TextField
                id="standard-basic"
                variant="outlined"
                label="Nombre en la tarjeta"
              />
              <TextField
                id="standard-basic"
                variant="outlined"
                label="Nombre"
              />
              <TextField
                id="standard-basic"
                variant="outlined"
                label="Vencimiento"
                placeholder="MM/YY"
              />
              </div>
              <div className="white-card">
                <h3>Mercado Pago</h3>
                
              </div>
            </form>
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

export default Checkout2;
