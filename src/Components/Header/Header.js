import React from 'react';
import Button from '@material-ui/core/Button';
import SkipLinks from 'skip-links';
import logoHeader from '../../Assets/logo_header.svg';
import './Header.css';
import '../../Styles/Commons.css';

const links = [
    {title: 'Ir al contenido principal', to: 'mainContent', style: { backgroundColor: '#5e50b5' }},
    {title: 'Ir al footer', to: 'footer', style: { backgroundColor: '#5e50b5' }}
  ];

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
               <SkipLinks links={links}/>
                <header className="header">
                    <div className="vertical-align">
                        <img alt="logo" className="header-logo" src={logoHeader}></img>
                    </div>
                    <div  className="vertical-align">
                        <ul>
                            <li><Button className="button-verde">Ingresá</Button></li>
                            <li><Button variant="contained" className="button-contained">Registrate</Button></li>
                        </ul>
                    </div>
                </header>
            </React.Fragment>
        )

    }

}

export default Header;