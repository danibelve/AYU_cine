import React from 'react';
import './Filter2.css';
import '../../Styles/Commons.css';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from "@material-ui/core/styles";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Aside from '../../Components/Aside/Aside';
import '../../Components/MovieCard/MovieCard.css';
import Cinema from "../../Assets/village.png";
import MovieDetails from '../../Components/MovieDetails/MovieDetails';


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
                    <Aside></Aside>
                </div>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default Filter2;
