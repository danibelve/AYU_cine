import React from 'react';
import './Filter3.css';
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
                <main> <h1>HOLO</h1>
                
                    </main>
                    <aside className="aside">
                <div className="aside-wrapper">
                    <h3 className="heading-aside"><span className="vertical-align">Tu selección</span></h3>
                    <div className="flex-arround">
                        <p>Fecha</p>
                        <p> Sin decidir</p>
                    </div>
                    <div className="flex-arround">
                        <p>Cantidad de personas </p>
                        <p> Sin decidir</p>
                    </div>
                    <div className="flex-arround">
                        <p>Horario </p>
                        <p> Sin decidir</p>
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
                    onClick={() => { history.push('/filter2')}}>Anterior</Button>
                )}/>
                <Route render={({ history}) => (
                    <Button
                    variant="outlined"
                    className="button-contained"
                    onClick={() => { history.push('/filter3')}} >Siguiente</Button>
                )}/>
                </div>
            </aside>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default Filter2;
