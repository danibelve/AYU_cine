import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { Route } from "react-router-dom";
import './Aside.css';
import '../../Styles/Commons.css';
import { createBrowserHistory } from "history";

const history = createBrowserHistory(); 
class Aside extends React.Component {

    constructor(props) {
        super(props);
        this.classes = makeStyles(theme => ({
            root: {
                display: "flex"
            },
            formControl: {
                margin: theme.spacing(3)
            },
            group: {
                margin: theme.spacing(1, 0)
            }
        }));
    }

    render() {
        return (
            <aside className="aside">
                <div className="aside-wrapper">
                    <h3 className="heading-aside"><span className="heading3-padding">Tu selección para The Joker</span></h3>
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
                    onClick={() => { history.push('/filter')}}>Anterior</Button>
                )}/>
                <Route render={({ history}) => (
                    <Button
                    variant="outlined"
                    className="button-contained"
                    onClick={() => { history.push('/filter2')}} >Siguiente</Button>
                )}/>
                </div>
            </aside>
        )
    }

}
export default Aside;
