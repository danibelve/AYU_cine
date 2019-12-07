import React from "react";
import "./Congrats.css";
import "../../Styles/Commons.css";
import "../../Components/Aside/Aside.css";
import HeaderUser from "../../Components/Header/HeaderUser";
import Footer from "../../Components/Footer/Footer";
import Button from "@material-ui/core/Button";
import { Route, Link } from "react-router-dom";
import Progressbar from "../../Assets/Estados/Entradas.svg";

class Checkout2 extends React.Component {

  componentDidMount() {
    document.title = "Entradas reservadas en Sale Ciness";
  }

  render() {
    return (
      <React.Fragment>
        <HeaderUser></HeaderUser>
        <div className="box-shadow"></div>
        <div className="divide">
          <main id="mainContent" className="filter">
            <h1 className="h1-filter">¡Qué disfrutes de Joker!</h1>
            <p className="bajada">Te dejamos el detalle con la compra. ¡También podes fijarte quien falta pagar en tu perfil!</p>
  
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
                  pathname: "/"
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
