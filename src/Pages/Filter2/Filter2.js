import React from "react";
import "./Filter2.css";
import "../../Styles/Commons.css";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "../../Components/MovieCard/MovieCard.css";
import Cinema from "../../Assets/village.png"
import MovieDetails from "../../Components/MovieDetails/MovieDetails";
import Button from "@material-ui/core/Button";
import { Route, Link } from "react-router-dom";

class Filter2 extends React.Component {
  constructor(props) {
    super(props);

    this.classes = makeStyles(theme => ({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120
      },
      selectEmpty: {
        marginTop: theme.spacing(2)
      },
      root: {
        display: "flex"
      },
      group: {
        margin: theme.spacing(1, 0)
      }
    }));

    this.state = {
      barrio: "",
      provincia: "",
      ciudad: "",
      name: "hai",
      somethingChange: false,
      movies:[
        {
          title: "Cinépolis Caballito",
          img: Cinema,
          provincia: "Buenos Aires",
          ciudad: "Capital Federal",
          barrio: "Caballito"
        },
        {
          title: "Cinépolis Flores",
          img: Cinema,
          provincia: "Buenos Aires",
          ciudad: "Capital Federal",
          barrio: "Flores"
        },
        {
          title: "Cinépolis Recoleta",
          img: Cinema,
          provincia: "Buenos Aires",
          ciudad: "Capital Federal",
          barrio: "Recoleta",
        },
        {
          title: "Cinépolis Rosario",
          img: Cinema,
          ciudad: "Rosario",
          provincia: "Santa fé",
          barrio: "Barrio de Rosario"
        },
        {
          title: "Cinépolis Nueva Córdoba",
          img: Cinema,
          ciudad: "Córdoba",
          provincia: "Córdoba Capital",
          barrio: "Nueva Córdoba"
        }
      ]
    };
  }

  componentDidMount() {
    document.title = "Elijan cuál cine, sale cine";
  }

  handleChange = name => event => {
    this.setState({
      ...this.state,
      [name]: event.target.value,
      somethingChange: true
    });
  };

  render() {
    const filterDropdown = this.state.movies.filter(item => {
        return Object.keys(item).some(key =>
          item[key].includes(this.state.provincia)
        );
      });
    return (
      <React.Fragment>
        <Header></Header>
        <div className="box-shadow"></div>
        <div className="divide">
          <main id="mainContent" className="filter">
            <h1 className="h1-filter">¿A qué cine quieren ir?</h1>
            <p className="bajada">
              Seleccioná el cine que les quede más cómodo
            </p>
            <FormControl className={this.classes.formControl}>
              <NativeSelect
                value={this.state.provincia}
                onChange={this.handleChange("provincia")}
                name="provincia"
                className={this.classes.selectEmpty}
                inputProps={{ "aria-label": "provincia" }}
              >
                <option value="">Seleccioná una provincia</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Santa fé">Santa fé</option>
              </NativeSelect>
            </FormControl>
            <FormControl className={this.classes.formControl}>
              <NativeSelect
                value={this.state.ciudad}
                onChange={this.handleChange("ciudad")}
                name="ciudad"
                className={this.classes.selectEmpty}
                inputProps={{ "aria-label": "ciudad" }}
              >
                <option value="">Seleccioná una ciudad</option>
                <option value="Capital Federal">Capital Federal</option>
                <option value="Córdoba Capital">Córdoba Capital</option>
                <option value="Rosario">Rosario</option>
              </NativeSelect>
            </FormControl>
            <FormControl className={this.classes.formControl}>
              <NativeSelect
                value={this.state.barrio}
                onChange={this.handleChange("barrio")}
                name="barrio"
                className={this.classes.selectEmpty}
                inputProps={{ "aria-label": "barrio" }}
              >
                <option value="">Seleccioná un barrio</option>
                <option value="Caballito">Caballito</option>
                <option value="Nueva Córdoba">Nueva Córdoba</option>
                <option value="Barrio de Rosario">Barrio de Rosario</option>
              </NativeSelect>
            </FormControl>

            {this.state.somethingChange ? (
                <div className="moviedetails-card">
                {(filterDropdown.map((movie,key )=> {
                    return (
                      <MovieDetails
                        image={movie.img}
                        title={movie.title}
                        description={movie.description}
                        id={key}
                      />
                    );
                  }))}
                </div>
            ) : (
                <div className="moviedetails-card">
                {this.state.movies.map((movie, key) => {
                  return (
                    <MovieDetails
                      image={movie.img}
                      title={movie.title}
                      description={movie.description}
                      key={key}
                    />
                  );
                })}
              </div>
            )}
          </main>
          <aside className="aside">
            <div className="aside-wrapper">
              <h3 className="heading-aside">
                <span className="heading3-padding">
                  Tu selección para {this.props.location.state.peli}
                </span>
              </h3>
              <div className="flex-arround">
                <p>Fecha</p>
                <p>{this.props.location.state.cuando}</p>
              </div>
              <div className="flex-arround">
                <p>Cantidad de personas </p>
                <p>{this.props.location.state.cantidadDePersonas}</p>
              </div>
              <div className="flex-arround">
                <p>Horario </p>
                <p>{this.props.location.state.hora}</p>
              </div>
              <div className="flex-arround">
                <p>Butacas </p>
                <p> Sin decidir</p>
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
              <Link to={{
                pathname: '/filter3',
                state: {
                  hora: this.props.location.state.hora,
                  cuando: this.props.location.state.cuando,
                  cantidadDePersonas: this.props.location.state.cantidadDePersonas,
                  peli: this.props.location.state.peli
                }
              }}>
              <Button
                    variant="outlined"
                    className="button-contained"
                    type= "submit"
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

export default Filter2;
