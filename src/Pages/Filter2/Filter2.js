import React from 'react';
import './Filter2.css';
import '../../Styles/Commons.css';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from "@material-ui/core/styles";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import '../../Components/MovieCard/MovieCard.css';
import Cinema from "../../Assets/village.png";
import MovieDetails from '../../Components/MovieDetails/MovieDetails';
import Button from '@material-ui/core/Button';
import { Route } from "react-router-dom";


class Filter2 extends React.Component {
    constructor(props) {
        super(props);

        this.classes = makeStyles(theme => ({
            formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
            root: {
                display: "flex"
            },
            group: {
                margin: theme.spacing(1, 0)
            }
        }));

        this.Movies = [
            {
              title: "Cinépolis Caballito",
              img: Cinema,
            },
            {
                title: "Cinépolis Caballito",
                img: Cinema,
            },
            {
                title: "Cinépolis Caballito",
                img: Cinema,
            },
            {
                title: "Cinépolis Caballito",
                img: Cinema,
            },
            {
                title: "Cinépolis Caballito",
                img: Cinema,
            },
            {
                title: "Cinépolis Caballito",
                img: Cinema,
            },
          ]

        this.state= {
            age: '',
            name: 'hai',
          }
    }

    componentDidMount(){
        document.title = "Elijan cuál cine, sale cine"
        console.log(this.props.location.state);
    }

    handleChange = name => event => {
        this.setState({
          ...this.state,
          [name]: event.target.value,
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
                        <p className="bajada">Seleccioná el cine que les quede más cómodo</p>
                        <FormControl className={this.classes.formControl}>
                            <NativeSelect
                                value={this.state.age}
                                onChange={this.handleChange('age')}
                                name="age"
                                className={this.classes.selectEmpty}
                                inputProps={{ 'aria-label': 'age' }}
                            >
                                <option value="">None</option>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                        </FormControl>
                        <FormControl className={this.classes.formControl}>
                            <NativeSelect
                                value={this.state.age}
                                onChange={this.handleChange('age')}
                                name="age"
                                className={this.classes.selectEmpty}
                                inputProps={{ 'aria-label': 'age' }}
                            >
                                <option value="">None</option>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                        </FormControl>
                        <FormControl className={this.classes.formControl}>
                            <NativeSelect
                                value={this.state.age}
                                onChange={this.handleChange('age')}
                                name="age"
                                className={this.classes.selectEmpty}
                                inputProps={{ 'aria-label': 'age' }}
                            >
                                <option value="">None</option>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                        </FormControl>
                        <div className="moviedetails-card">
                            {this.Movies.map((movie, key) => {
                            return <MovieDetails
                                image={movie.img}
                                title={movie.title}
                                description={movie.description}
                                key={key}/>
                            })}
                        </div>
                    </main>
                    <aside className="aside">
                <div className="aside-wrapper">
                    <h3 className="heading-aside"><span className="vertical-align">Tu selección</span></h3>
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
                <Route render={({ history}) => (
                    <Button
                    variant="outlined"
                    className="button-outlined-black"
                    onClick={() => { history.push('/filter')}}>Anterior</Button>
                )}/>
                <Route render={({ history}) => (
                    <Button
                    variant="outlined"
                    className="button-contained"
                    onClick={() => { history.push('/filter3')}} >Siguiente</Button>
                )}/>
                </div>
            </aside>
                </div>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default Filter2;
