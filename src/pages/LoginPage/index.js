import React, { Component } from 'react';
import './style.css';
import './login-form.css';
import './card-category.css';

import IconeMobile from './resources/mobile.svg';
import IconeBusiness from './resources/business.svg';
import IconeDesignUX from './resources/design-ux.svg';
import IconeFrontEnd from './resources/front-end.svg';
import IconeInfra from './resources/infraestrutura.svg';
import IconeProgramacao from './resources/programacao.svg';
import IconeErro from './resources/error.svg'

import HeaderForum from '../../components/HeaderForum';
import FooterForum from '../../components/FooterForum';
import FetchAluraForumService from '../../services/FetchAluraForumService';

class LoginPage extends Component {

    constructor() {
        super();
        this.state = {
            mensagemDeValidacao: ''
        }
    }

    efetuaLogin = (event) => {
        event.preventDefault();

        const loginInfo = {
            email: this.inputEmail.value,
            password: this.inputPassword.value
        };

        const requestDetails = {
            method: 'POST',
            body: JSON.stringify(loginInfo),
            headers: new Headers({
                "Content-Type": "application/json",
                "Accept-Language": "pt-BR"
            })      
        }

        fetch('http://localhost:8080/api/auth', requestDetails)
            .then(response => {
                if (response.ok)
                    return response.json();

                throw new Error('Não foi possível efetuar login. Email ou senha inválida')
            })
            .then(jwt => {
                localStorage.setItem('jwt', jwt.token);
                this.props.history.push('/');
            })
            .catch(error => this.setState({mensagemDeValidacao: error.message}));
    }

    renderizaMensagemValidacao = () => {
        if (this.state.mensagemDeValidacao !== '')
            return (
                <div className="alert" data-category="error" role="alert">
                    <img alt="" className="alert-icon" src={IconeErro} />
                    <p className="alert-message">{this.state.mensagemDeValidacao}</p>
                </div>
            );
    }

    render() {
        return (
            <div>
                <HeaderForum />

                <div className="container">

                    {this.renderizaMensagemValidacao()}

                    <section className="sign">
                        <section className="signin">
                            <h2 className="title">Já é nosso aluno?</h2>
                            <p className="subtitle">Faça seu login e boa aula!</p>
                            <form className="signin-form" action="/signin" method="post" 
                                    onSubmit={this.efetuaLogin}>
                                
                                <label htmlFor="login-email">E-mail</label>
                                <input type="email" required name="email" id="login-email" 
                                        ref={(input) => this.inputEmail = input}/>

                                <label htmlFor="password">Senha</label>
                                <input type="password" required name="password" id="password" 
                                        ref={(input) => this.inputPassword = input}/>

                                <input type="hidden" name="uriOnError" value="" />

                                <button className="btn-login" type="submit">
                                    Entrar
                                </button>
                            </form>
                        </section>

                        <section className="forgotPassword">
                            <h2 className="title">Recuperar senha</h2>
                            <p className="subtitle">Esqueceu sua senha? Digite seu e-mail que enviaremos um link para definir uma nova senha.</p>

                            <form className="forgotPassword-form" action="/auth/sendPasswordRecoveryEmail" method="post">
                                <input type="email" required="" placeholder="E-mail" id="email" name="email" className="input forgot-password-email" defaultValue="" />

                                <button className="forgotPassword-btn" type="submit">
                                    Recuperar
                                </button>
                            </form>
                        </section>

                        <section className="signup-invite">
                            <h2 className="signup-invite-title">Ainda não é aluno da alura?</h2>
                            <p className="signup-invite-text">São centenas de cursos nas seguintes áreas:</p>

                            <div className="category-cardList ">
                                <section className="cardCategory mobile">
                                    <a className="category-card-link" href="https://www.alura.com.br/cursos-online-mobile">
                                        <div className="category-icon">
                                            <img src={IconeMobile} alt="" className="" />
                                        </div>
                                        <h3 className="category-title">Mobile</h3>
                                        <p className="category-description">iOS, Android, PhoneGap, e mais...</p>
                                    </a>
                                </section>

                                <section className="cardCategory programacao">
                                    <a className="category-card-link" href="https://www.alura.com.br/cursos-online-programacao">
                                        <div className="category-icon">
                                            <img src={IconeProgramacao} alt="" className="" />
                                        </div>
                                        <h3 className="category-title">Programação</h3>
                                        <p className="category-description">Java, C#, Ruby, PHP, Python e mais...</p>
                                    </a>
                                </section>

                                <section className="cardCategory frontend">
                                    <a className="category-card-link" href="https://www.alura.com.br/cursos-online-front-end">
                                        <div className="category-icon">
                                            <img src={IconeFrontEnd} alt="" className="" />
                                        </div>
                                        <h3 className="category-title">Front-end</h3>
                                        <p className="category-description">HTML, CSS, Angular, JavaScript e mais...</p>
                                    </a>
                                </section>

                                <section className="cardCategory infra">
                                    <a className="category-card-link" href="https://www.alura.com.br/cursos-online-infraestrutura">
                                        <div className="category-icon">
                                            <img src={IconeInfra} alt="" className="" />
                                        </div>
                                        <h3 className="category-title">Infraestrutura</h3>
                                        <p className="category-description">Linux, SQL, Git, Docker e mais...</p>
                                    </a>
                                </section>

                                <section className="cardCategory designux">
                                    <a className="category-card-link" href="https://www.alura.com.br/cursos-online-design-ux">
                                        <div className="category-icon">
                                            <img src={IconeDesignUX} alt="" className="" />
                                        </div>
                                        <h3 className="category-title">Design &amp; UX</h3>
                                        <p className="category-description">Photoshop, Illustrator, Usabilidade e mais...</p>
                                    </a>
                                </section>

                                <section className="cardCategory business">
                                    <a className="category-card-link" href="https://www.alura.com.br/cursos-online-business">
                                        <div className="category-icon">
                                            <img src={IconeBusiness} alt="" className="" />
                                        </div>
                                        <h3 className="category-title">Business</h3>
                                        <p className="category-description">Agilidade, Startup, Marketing SEO e mais...</p>
                                    </a>
                                </section>

                            </div>

                            <div className="signup-invite-cta">
                                <h3 className="signup-invite-cta-title">Decole sua carreira!</h3>
                                <p className="signup-invite-cta-text">Acesse todo o conteúdo</p>
                                <a href="https://www.alura.com.br/planos-cursos-online" className="signup-invite-cta-button">Matricule-se</a>
                            </div>
                        </section>
                    </section>
                </div>

                <FooterForum />
            </div>
        );
    }
}

export default LoginPage;