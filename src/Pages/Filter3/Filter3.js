import React from "react";
import "./Filter3.css";
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
import { Route, Link } from "react-router-dom";

class Filter2 extends React.Component {
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

    this.state = {
      hora: "",
    };

    this.subDosD = [
      {
        label: "19:00",
        bajada: "Disponibilidad total",
        value: "0"
      },
      {
        label: "20:30",
        bajada: "Quedan 10 butacas",
        value: "1"
      },
      {
        label: "23:00",
        bajada: "Quedan 15 butacas",
        value: "2"
      }
    ];
    this.subTresD = [
      {
        label: "18:30",
        bajada: "Disponibilidad total",
        value: "3"
      },
      {
        label: "21:30",
        bajada: "Quedan 10 butacas",
        value: "5"
      },
      {
        label: "00:00",
        bajada: "Quedan 15 butacas",
        value: "6"
      }
    ];

    this.dobTresD = [
        {
          label: "18:35",
          bajada: "Disponibilidad total",
          value: "7"
        },
        {
          label: "21:40",
          bajada: "Quedan 10 butacas",
          value: "8"
        },
        {
          label: "23:15",
          bajada: "Quedan 15 butacas",
          value: "9"
        }
      ];
    this.handleCheck = this.handleClick.bind(this);
  }

  armarHora(){
    let hora = "";
    const horaValue = this.state.hora;
    if (this.state.hora === ''){
        hora = "Sin definir";
    }else{
        hora = horaValue
    }
    return hora;

  }

  componentDidMount() {
    document.title = "Mira las opciones que te encontramos en Sale Cine";
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

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <div className="box-shadow"></div>
        <div className="divide">
          <main id="mainContent" className="filter">
            <h1 className="h1-filter">Estas son las opciones finales</h1>
            <p className="bajada">
             ¡Mirá todas las opciones que encontramos para vos y tus amigos!
            </p>
            <h2>Subtituladas 2D <i className="italic">- Precio: $300</i></h2>
            <div className={this.classes.root}>
              <FormControl
                component="fieldset"
                className={this.classes.formControl}
              >
                <FormLabel component="legend">
                  <i className="sr-only">Opciones para funciones subtituladas 2D</i>
                </FormLabel>
                <RadioGroup
                  aria-label="opciones subtituladas 2D"
                  name="hora"
                  className="myRadioGroup"
                  value={this.state.hora}
                >
                  {this.subDosD.map((option, key) => {
                    return (
                      <div className="butones-1" key={key}>
                        <FormControlLabel
                          value={option.label}
                          control={
                            <Radio onClick={e => this.handleClick(e)} />
                          }
                          label={option.label}
                          labelPlacement="start"
                          className="strong"
                          aria-label = { "opción para función subtituladas en 2D" + option.label}
                        />
                        <span className="bajadas">{option.bajada}</span>
                      </div>
                    );
                  })}
                </RadioGroup>
              </FormControl>
            </div>
            <h2>Subtituladas 3D <i className="italic">- Precio: $400</i></h2>
            <div className={this.classes.root}>
              <FormControl
                component="fieldset"
                className={this.classes.formControl}
              >
                <FormLabel component="legend">
                  <i className="sr-only">Opciones para funciones subtituladas 3D</i>
                </FormLabel>
                <RadioGroup
                  aria-label="opciones subitituladas 3D"
                  name="hora"
                  className="myRadioGroup"
                  value={this.state.hora}
                >
                  {this.subTresD.map((option, key) => {
                    return (
                      <div className="butones-1" key={key}>
                        <FormControlLabel
                          value={option.label}
                          control={
                            <Radio onClick={e => this.handleClick(e)} />
                          }
                          label={option.label}
                          aria-label = { "opción para función subtitulada en 3D" + option.label}
                          labelPlacement="start"
                          className="strong"
                        />
                        <span className="bajadas">{option.bajada}</span>
                      </div>
                    );
                  })}
                </RadioGroup>
              </FormControl>
            </div>
            <h2>Dobladas 2D <i className="italic">- Precio: $300</i></h2>
            <p className="noOpcion"> No encontramos funciones que se ajusten a sus necesidades.
            <strong><Link to={{
                pathname: '/filter',
                state: {
                  hora: "",
                  cuando: "",
                  cantidadDePersonas: "",
                  peli: ""
                }
              }}> Seguir buscando</Link></strong></p>
            <h2>Dobladas 3D <i className="italic">- Precio: $400</i></h2>
            <div className={this.classes.root}>
              <FormControl
                component="fieldset"
                className={this.classes.formControl}
              >
                <FormLabel component="legend">
                  <i className="sr-only">Opciones para funciones dobladas 3D</i>
                </FormLabel>
                <RadioGroup
                  aria-label="opciones dobladas 3D"
                  name="hora"
                  className="myRadioGroup"
                  value={this.state.hora}
                >
                  {this.dobTresD.map((option, key) => {
                    return (
                      <div className="butones-1" key={key}>
                        <FormControlLabel
                          value={option.label}
                          control={
                            <Radio onClick={e => this.handleClick(e)} />
                          }
                          label={option.label}
                          aria-label = { "opción para función doblada en 3D" + option.label}
                          labelPlacement="start"
                          className="strong"
                        />
                        <span className="bajadas">{option.bajada}</span>
                      </div>
                    );
                  })}
                </RadioGroup>
              </FormControl>
            </div>
          </main>
          <aside className="aside">
            <div className="aside-wrapper">
              <h3 className="heading-aside">
                <span className="heading3-padding">
                  Tu selección para {this.props.location.state.peli}
                </span>
              </h3>
              <div class="datos-aside">
                <div className="flex-arround">
                  <p className="p-aside">Fecha</p>
                  <p className="violeta">Viernes 29</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Cant. de personas </p>
                  <p className="violeta">Adultos: 4.</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Horario </p>
                  <p className={this.armarHora() === "Sin definir" ? "gris" : "violeta"}>{this.armarHora()}</p>
                </div>
                <div className="flex-arround">
                  <p className="p-aside">Butacas </p>
                  <p className="gris"> Sin definir</p>
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
                      history.push("/filter");
                    }}
                  >
                    Anterior
                  </Button>
                )}
              />
              <Link to={{
                pathname: '/filter4',
                state: {
                  hora: this.state.hora,
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
