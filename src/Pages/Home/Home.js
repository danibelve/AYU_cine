import React from "react";
import Button from "@material-ui/core/Button";
import {Helmet} from "react-helmet";
import "./Home.css";
import "../../Styles/Commons.css";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

class Home extends React.Component {
  componentDidMount() {
    document.title = "Sale Cine: Elegí, dividí y paga";
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <html lang="es-AR" />
        </Helmet>
        <Header></Header>
        <div className="box-shadow"></div>
        <main id="mainContent" className="flex">
          <div className="banner">
            <div className="info-container">
              <h1>¡Elegís, Dividís y Disfrutás!</h1>
              <p className="desc">
                Dividí la cantidad de entradas, pagalas entre tus amigos y ¡Sale
                cine!
              </p>
              <p>
                <strong className="strong">
                  Armá tu perfil, tus grupos y más registrándote
                </strong>
              </p>
            </div>
            <div className="button-container">
              <Button variant="outlined" className="button-outlined">
                Ingresá
              </Button>
              <Button variant="contained" className="button-contained">
                Registrate
              </Button>
            </div>
          </div>
          <div className="peliculas">
            <h2>¿Qué quieren ver?</h2>
            <p className="p-peli">¡Tenemos muchos estrenos! Elegí la película que quieren ver.</p>
            <MovieCard></MovieCard>
          </div>
        </main>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Home;
