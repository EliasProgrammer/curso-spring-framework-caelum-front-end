import React, { Component } from 'react';
import './style.css';
import LogoAlura from './resources/logo-alura.svg';
import IconeYoutube from './resources/icon-youtube.svg';
import IconeFacebook from './resources/icon-facebook.svg';
import IconeTwitter from './resources/icon-twitter.svg';
import IconeHipsters from './resources/icon-hipsters.svg';
import IconeGooglePlay from './resources/icon-googlePlay.svg';
import IconeAppStore from './resources/icon-appStore.svg';

class FooterForum extends Component {
  
    render() {
        return (
            <div>
                <footer className="footer container">
                    <a href="https://cursos.alura.com.br/dashboard" className="footer-logo">
                        <img src={LogoAlura} alt="alura"/>
                    </a>

                    <ul className="footer-menu">
                        <li className="footer-menu-item">
                            <a className="footer-menu-item-link" href="https://www.alura.com.br/sobre" target="">Sobre a Alura</a>
                        </li>

                        <li className="footer-menu-item">
                            <a className="footer-menu-item-link" href="http://suporte.alura.com.br/" target="_blank" rel="noopener noreferrer">Dúvidas frequentes</a>
                        </li>

                        <li className="footer-menu-item">
                            <a className="footer-menu-item-link" href="https://docs.google.com/forms/d/e/1FAIpQLScwKyaSvuFXK9SmMJoLPuYAS2qD_XAAnZPxMZij9qVeflbhBg/viewform"
                                target="_blank" rel="noopener noreferrer">Sugira um curso</a>
                        </li>

                        <li className="footer-menu-item">
                            <a className="footer-menu-item-link" href="https://trello.com/b/kredhcFj/alura-alunos-funcionalidades" target="_blank" rel="noopener noreferrer">Sugira uma funcionalidade</a>
                        </li>

                        <li className="footer-menu-item">
                            <a className="footer-menu-item-link" href="http://blog.alura.com.br/" target="_blank" rel="noopener noreferrer">Blog da Alura</a>
                        </li>
                    </ul>

                    <section role="presentation" className="footer-footerGroup">

                        <div className="footer-links">
                            <h2 className="footer-links-title">Acompanhe-nos</h2>
                
                            <ul role="presentation" className="footer-socialMedia">
                                <li className="footer-socialMedia-item">
                                    <a className="footer-socialMedia-item-link" href="https://www.youtube.com/user/aluracursosonline" target="_blank" title="Youtube da Alura" rel="noopener noreferrer">
                                    <img className="footer-socialMedia-item-icon footer-socialMedia-list-item-youtube" src={IconeYoutube} alt=""/>
                                    </a>
                                </li>

                                <li className="footer-socialMedia-item">
                                    <a className="footer-socialMedia-item-link" href="https://www.facebook.com/AluraCursosOnline/" target="_blank" title="Facebook da Alura" rel="noopener noreferrer">
                                    <img className="footer-socialMedia-item-icon footer-socialMedia-list-item-facebook" src={IconeFacebook} alt=""/>
                                    </a>
                                </li>

                                <li className="footer-socialMedia-item">
                                    <a className="footer-socialMedia-item-link" href="https://twitter.com/aluraonline" target="_blank" title="Twitter da Alura" rel="noopener noreferrer">
                                    <img className="footer-socialMedia-item-icon footer-socialMedia-list-item-twitter" src={IconeTwitter} alt=""/>
                                    </a>
                                </li>

                                <li className="footer-socialMedia-item">
                                    <a className="footer-socialMedia-item-link" href="http://hipsters.tech/" target="_blank" title="Podcast Hipsters Ponto Tech" rel="noopener noreferrer">
                                    <img className="footer-socialMedia-item-icon footer-socialMedia-list-item-hipsters" src={IconeHipsters} alt=""/>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h2 className="footer-links-title">Apps</h2>

                            <ul className="footer-hotLinks-menu footer-hotLinks-mobile">
                                <li className="footer-hotLinks-item">
                                    <a className="footer-hotLinks-item-link" href="https://play.google.com/store/apps/details?id=br.com.alura.mobi&amp;hl=pt_BR"
                                        target="_blank" title="Google Play Store" rel="noopener noreferrer">
                                    <img className="footer-hotLinks-item-icon footer-hotLinks-menu-item-mobile" src={IconeGooglePlay} alt=""/>
                                    </a>
                                </li>

                                <li className="footer-hotLinks-item">
                                    <a className="footer-hotLinks-item-link" href="https://itunes.apple.com/br/app/alura-cursos-online/id1225776635" target="_blank"
                                        title="Apple App Store" rel="noopener noreferrer">
                                    <img className="footer-hotLinks-item-icon footer-hotLinks-menu-item-mobile" src={IconeAppStore} alt=""/>
                                    </a>
                                </li>
                            </ul>
                         </div>
                    </section>
                </footer>
            </div>
        );
    }
}export default FooterForum;