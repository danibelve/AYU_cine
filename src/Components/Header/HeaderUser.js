import React from 'react';
import SkipLinks from 'skip-links';
import logoHeader from '../../Assets/logo_header.svg';
import './Header.css';
import '../../Styles/Commons.css';

const links = [
    {title: 'Ir al contenido principal', to: 'mainContent', style: { backgroundColor: '#5e50b5' }},
    {title: 'Ir al footer', to: 'footer', style: { backgroundColor: '#5e50b5' }}
  ];

class HeaderUser extends React.Component {
    render() {
        return (
            <React.Fragment>
               <SkipLinks links={links}/>
                <header className="header">
                    <div className="vertical-align">
                        <img alt="logo" className="header-logo" src={logoHeader}></img>
                    </div>
                    <div  className="vertical-align">
                        <p className="contacto-header">Exequiel</p>
                        <div className="avatar">
                            <p className="p-avatar">E</p>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        )

    }

}

export default HeaderUser;