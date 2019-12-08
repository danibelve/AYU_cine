import React from "react";
import "./Filter2.css";
import "../../Styles/Commons.css";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "../../Components/MovieCard/MovieCard.css";
import Cinema from "../../Assets/village.png";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import { Route, Link } from "react-router-dom";
import Progressbar from "../../Assets/Estados/Funcion.svg"

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
      cine: "Sin definir",
      barrio: "",
      provincia: "",
      ciudad: "",
      name: "hai",
      filterOptionLength: "5",
      somethingChange: false,
      movies: [
        {
          title: "Hoyts Caballito",
          img: Cinema,
          provincia: "Buenos Aires",
          ciudad: "Capital Federal",
          barrio: "Caballito",
          description: "Av. Rivadavia 1921"
        },
        {
          title: "Cinépolis Flores",
          img: Cinema,
          provincia: "Buenos Aires",
          ciudad: "Capital Federal",
          barrio: "Flores",
          description: "Av. Rivadavia 1921"
        },
        {
          title: "Hoyts Recoleta",
          img: Cinema,
          provincia: "Buenos Aires",
          ciudad: "Capital Federal",
          barrio: "Recoleta",
          description: "Av. Rivadavia 1921"
        },
        {
          title: "Cinépolis Rosario",
          img: Cinema,
          ciudad: "Rosario",
          provincia: "Santa fé",
          barrio: "Barrio de Rosario",
          description: "Av. Rivadavia 1921"
        },
        {
          title: "Hoyts Córdoba",
          img: Cinema,
          ciudad: "Córdoba",
          provincia: "Córdoba Capital",
          barrio: "Nueva Córdoba",
          description: "Av. Rivadavia 1921"
        }
      ]
    };
    this.handleCheck = this.handleClick.bind(this);
    
  }

  componentDidMount() {
    document.title = "Elijan cuál cine, sale cine";
  }

  handleClick(event) {
    const newValue = event.target.value;
    const name = event.target.name;

    if (newValue === [name]) {
      window.setTimeout(
        function() {
          this.setState({ [name]: "" });
        }.bind(this),
        0
      );
    } else {
      window.setTimeout(
        function() {
          this.setState({ [name]: newValue });
        }.bind(this),
        0
      );
    }
  }

  handleChange = name => event => {
    const filterDropdown = this.state.movies.filter(item => {
      return Object.keys(item).some(key =>
        item[key].includes(event.target.value)
      );
    });

    this.setState({
      ...this.state,
      [name]: event.target.value,
      somethingChange: true,
      filterOption: filterDropdown,
      filterOptionLength: filterDropdown.length
    });
  };

  render() {
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
  <span className="sr-only" aria-live="polite">Opciones disponibles: {this.state.filterOptionLength}</span>
            {this.state.somethingChange ? (
              <div className="moviedetails-card">
                <RadioGroup
                  aria-label="Cine"
                  name="cine"
                  className="myRadioGroup"
                  value={this.state.cine}
                >
                {this.state.filterOption.map((movie, key) => {
                  return (
                    <div className="radioimages">
                      <img src={movie.img} alt="" className="img-radio"/>
                      <div key={key} className="img-butones">
                        <FormControlLabel
                          value={movie.title}
                          control={
                            <Radio onClick={e => this.handleClick(e)} />
                          }
                          label={movie.title}
                          labelPlacement="start"
                          className="strong"
                          name="cine"
                        />
                        <span className="bajadas">{movie.description}</span>
                      </div>
                    </div>
                  );
                })}
                </RadioGroup>
              </div>
            ) : (
              <div className="moviedetails-card">
                <RadioGroup
                  aria-label="Cine"
                  name="cine"
                  className="myRadioGroup"
                  value={this.state.cine}
                >
                {this.state.movies.map((movie, key) => {
                  return (
                    <div className="radioimages">
                      <img src={movie.img} alt="" className="img-radio"/>
                      <div key={key} className="img-butones">
                        <FormControlLabel
                          value={movie.title}
                          control={
                            <Radio onClick={e => this.handleClick(e)} />
                          }
                          label={movie.title}
                          labelPlacement="start"
                          className="strong"
                          name="cine"
                        />
                        <span className="bajadas">{movie.description}</span>
                      </div>
                    </div>
                  );
                })}
                </RadioGroup>
              </div>
            )}
          </main>
          <aside className="aside">
            <div className="aside-wrapper">
            <img src={Progressbar} className="progress-bar" alt="Paso actual, selección de función"/>
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
                  <p className="p-aside"><abbr title="cantidad">Cant.</abbr> de personas </p>
                  <p className="violeta">Adultos: 4.</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Cine </p>
                  <p className={this.state.cine === "Sin definir" ? "gris" : "violeta"}> {this.state.cine}</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Horario </p>
                  <p className="gris">Sin definir</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Butacas </p>
                  <p className="gris"> Sin definir</p>
                </div>
                <div className="subtotal-resumen">
                  <div className="flex-arround">
                    <p className="p-aside aside-subtotal-off">Subtotal </p>
                    <p className="gris aside-subtotal-off-1">
                      El precio se actualizará al elegir la funcion
                    </p>
                  </div>
                </div>
              </div>
              <div className="div-vinculo-ingresa">
                <a href="salecine.com/signin" className="vinculo-ingresa">
                  Ingresá a tu cuenta para guardar los datos de tu compra
                </a>
              </div>
            </div>
            <div className="button-container">
              <Route
                render={({ history }) => (
                  <Button
                    variant="outlined"
                    className="button-outlined-black"
                    onClick={() => {
                      history.push("/filter2");
                    }}
                  >
                    Anterior
                  </Button>
                )}
              />
              <Link
                to={{
                  pathname: "/filter3"
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

export default Filter2;
