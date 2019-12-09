import React from "react";
import "./DeclaracionAcc.css";
import "../../Styles/Commons.css";
import "../../Components/Aside/Aside.css";
import HeaderUser from "../../Components/Header/HeaderUser";
import Footer from "../../Components/Footer/Footer";
import Button from "@material-ui/core/Button";
import {Helmet} from "react-helmet";
import { Route, Link } from "react-router-dom";
import Progressbar from "../../Assets/Estados/Entradas.svg";

class DeclaracionAcc extends React.Component {

  componentDidMount() {
    document.title = "Entradas reservadas en Sale Ciness";
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
            <h1 className="h1-filter">Declaración de accesibilidad</h1>
            <h2 className="li-declaracion">Fecha: 9/12/2019</h2>
            <p className="bajada li-declaracion">En Sale Cine queremos que todos tengan el mismo derecho al disfrute.
            Es por eso que nuestro objetivo es hacer que todas las personas puedan acceder a nuestra plataforma web 
            sin encontrar barreras de ningun tipo. Por esa razón, trabajamos arduamente
            para conseguir cumplir el nivel AA de las Directrices de Accesibilidad 
            para el Contenido Web 2.0. del <i lang="en"> World Wide Web Consortium.</i>
            Tomaremos como referencia para evaluar la conformidad la Ley N° 26.653 Argentina de “Accesibilidad Web”.
            </p>
            <h3>Las pautas que cumplimos en nuestro sitio son:</h3>
            <ul className="ul-declaracion">
              <li className="li-declaracion"><strong>Estructura y maquetado</strong>: Utilizamos un lenguaje HTML5 válido y bien etiquetado, con una estructura 
              de encabezados que permite una navegación fácil por el contenido siguiendo los estándares del W3C.</li>
              <li className="li-declaracion"><strong>Imágenes</strong>: En nuestro sitio, la utilización de imágenes no es un impedimento para 
              poder sacar entradas para ir al cine. Para lograrlo, proporcionamos un texto alternativo en caso de que sea necesario.</li>
              <li className="li-declaracion"><strong>Colores</strong>: Tenemos en consideración que la paleta de colores no afecte a la comprensión del 
              flujo en nuestro sitio. Para ello, nos cercioramos que haya un contraste de mas de 4.5 entre los componentes.</li>
              <li className="li-declaracion"><strong>Navegación por teclado</strong>: Nuestro sitio puede ser perfectamente navegado mediante el teclado, pudiendo
              completar la compra sin trampas ni complicaciones mayores</li>
            </ul>
            <p className="li-declaracion"><strong>Contacto:</strong> <a href="mailto:accesibilidad@salecine.com">accesibilidad@salecine.com</a></p>
          </main>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default DeclaracionAcc;
