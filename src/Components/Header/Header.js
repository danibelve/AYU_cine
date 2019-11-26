import React from 'react';
import Button from '@material-ui/core/Button';
import SkipLinks from 'skip-links';
import logoHeader from '../../Assets/logo_header.svg';
import './Header.css';
import '../../Styles/Commons.css';

const links = [
    {title: 'Ir al contenido principal', to: 'mainContent', style: { backgroundColor: '#2BB2AC' }},
    {title: 'Ir al footer', to: 'footer', style: { backgroundColor: '#2BB2AC' }}
  ];

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
               <SkipLinks links={links}/>
                <header className="header">
                    <div>
                        <img alt="logo" className="header-logo" src={logoHeader}></img>
                    </div>
                    <div>
                        <ul>
                            <li><Button className="button-verde">Ya tengo cuenta</Button></li>
                            <li><Button variant="contained" className="button-contained">Registrarse</Button></li>
                        </ul>
                    </div>
                </header>
            </React.Fragment>
        )

    }

}

export default Header;