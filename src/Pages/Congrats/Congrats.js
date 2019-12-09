import React from "react";
import "./Congrats.css";
import "../../Styles/Commons.css";
import "../../Components/Aside/Aside.css";
import {Helmet} from "react-helmet";
import HeaderUser from "../../Components/Header/HeaderUser";
import Footer from "../../Components/Footer/Footer";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link  } from "react-router-dom";
import Progressbar from "../../Assets/Estados/Entradas.svg";
import Ezeticket from "../../Assets/eze-ticket.svg";
import Juanticket from "../../Assets/juanperez-ticket.svg";
import $ from 'jquery';

class Checkout2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminder: false
    };
  }

  handleChange(e) {
    if (this.state.reminder === true) {
      this.setState({
        reminder: false
      });
    } else {
      this.setState({
        reminder: true
      });
    }
  }

  componentDidMount() {
    document.title = "Entradas reservadas en Sale Ciness";
    $("#root").focus();
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <html lang="es-AR" />
        </Helmet>
        <HeaderUser></HeaderUser>
        <div className="box-shadow"></div>
        <div className="divide">
          <main id="mainContent" className="filter">
            <h1 className="h1-filter">¡Qué disfrutes de Joker!</h1>
            <p className="bajada">
              Te dejamos el detalle con la compra. ¡También podes fijarte quien
              falta pagar en tu perfil!
            </p>
            <h2>Acá vas a poder ver quiénes faltan pagar</h2>
            <div className="ticket-container">
              <div className="ticket-exe">
                <img className="img-ticket" src={Ezeticket} alt="" />
                <p className="text-center text-center-exe">PAGO REALIZADO</p>
                <Button className="descargar-qr">Descargar QR</Button>
              </div>
              <div className="ticket-juan">
                <img className="img-ticket img-ticket-juan" src={Juanticket} alt="" />
                <p className="text-center text-center-juan">PAGO PENDIENTE</p>
                {/*<FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.reminder}
                        onChange={e => this.handleChange(e)}
                        value="reminder"
                        className="enviar-alerta"
                      />
                    }
                    label="Enviar alerta 1 hr antes de la función"
                  />
                </FormGroup>*/}
              </div>
            </div>
          </main>
          <aside className="aside">
            <div className="aside-wrapper">
              <img
                src={Progressbar}
                className="progress-bar"
                alt="¡Felicitaciones! Ya tenés tus entradas"
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
                    <abbr title="cantidad">Cant.</abbr> de personas
                  </p>
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
                    <p className="violeta"><i aria-hidden="true">$</i>600<i class="sr-only">pesos</i></p>
                  </div>
                </div>
                <div className="subtotal-resumen descuento-resumen">
                  <div className="flex-arround">
                    <p className="p-aside descuento">Descuento</p>
                    <p className="violeta descuento-pesos">-<i aria-hidden="true">$</i>300<i class="sr-only">pesos</i></p>
                  </div>
                </div>
                <div className="subtotal-resumen total-resumen">
                  <div className="flex-arround">
                    <p className="p-aside total">Total</p>
                    <p className="violeta total-pesos"><i aria-hidden="true">$</i>300<i class="sr-only">pesos</i></p>
                  </div>
                </div>
              </div>
            </div>
            <Button className="desc-resumen">Descargar resumen de compra</Button>
            <div className="button-container">
              <Link
              tabIndex="-1"
            
                to={{
                  pathname: "/"
                }}
              >
                <Button
                  variant="outlined"
                  className="button-contained"
                  type="submit"
                >
                  Ver estado de compra en Mi perfil
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
