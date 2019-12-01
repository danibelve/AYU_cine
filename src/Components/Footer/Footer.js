import React from 'react';
import Link from '@material-ui/core/Link';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoFooter from '../../Assets/logo_footer.svg'
import './Footer.css';
import '../../Styles/Commons.css'

library.add(faFacebookF, faInstagram, faTwitter)
const preventDefault = event => event.preventDefault();
class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div>
                    <img alt="logo" src={logoFooter} className="footer-logo"/>
                </div>
                <div>
                    <ul className="lista">
                        <li>
                            <Link href="#" onClick={preventDefault}>
                                Contacto
                                </Link>
                        </li>
                        <li>
                            <Link href="#" onClick={preventDefault}>
                                Sobre Nosotros
                                </Link>
                        </li>
                        <li>
                            <Link href="#" onClick={preventDefault}>
                                Políticas de privacidad
                                </Link>
                        </li>
                    </ul>
                </div>
                <div className="icons">
                        <ul>
                            <li>
                                <Link href="#" title="Facebook" onClick={(e) => preventDefault()} aria-label="Ir a Facebook">
                                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" title="Instagram" onClick={(e) => preventDefault()} aria-label="Ir a Instagram">
                                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" title="Twitter" onClick={(e) => preventDefault()} aria-label="Ir a Twitter">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                                </Link>
                            </li>
                        </ul>
                    </div>


            </footer>
        )

    }

}

export default Footer;