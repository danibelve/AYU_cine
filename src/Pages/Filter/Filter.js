import React from 'react';
import Button from '@material-ui/core/Button';
import './Filter.css';
import '../../Styles/Commons.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Radio from '../../Components/Radiobuttons/radio';
import Counter from '../../Components/Counter/Counter';


class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.cuando = [
            {
                label: "Jueves 28",
                bajada: "Disponibilidad total",
                value: "0"
            },
            {
                label: "Viernes 29",
                bajada: "Disponibilidad total",
                value: "1"
            },
            {
                label: "Sábado 30",
                bajada: "Disponibilidad parcial",
                value: "2"
            }
        ]
        this.horario =[
            {
                label: "Mañana",
                bajada: "De 9 am a 11 am",
                value: "0"
            },
            {
                label: "Tarde",
                bajada: "De 12 am a 18 pm",
                value: "1"
            },
            {
                label: "Noche",
                bajada: "De 19 pm a 2 am",
                value: "2"
            }
        ]   
    }
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <main id="mainContent" className="filter">
                    <h1 className="h1-filter">Nos ponemos más específicos:</h1>
                    <p className="bajada">Te pedimos más información para filtrar por lo que buscas.</p>
                    <h2>¿Cuándo quieren ir?</h2>
                        <Radio
                            options={this.cuando}
                            legend="Eleguí una opción de día"
                            name="dia"
                        ></Radio>
                    <h2>¿Cuántos van a ser?</h2>
                    <Counter label1="Restar un adulto" label2="Sumar un adulto" id="Adultos"></Counter>
                    <Counter label1="Restar un niño" label2="Sumar un niño" id="Niños" bajada="De 2 a 10 años"></Counter>
                    <Counter label1="Restar un jubilado" label2="Sumar un jubilado" id="Jubilados" bajada="Mayores de 60 años"></Counter>
                    <h2>¿A qué hora quieren ir?</h2>
                    <Radio
                            options={this.horario}
                            legend="Eleguí una opción de horario"
                            name="hora"
                        ></Radio>
                </main>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default Filter;
