import React, { Component } from 'react';
import './style.css';

import HeaderForum from '../../components/HeaderForum';
import BannerForum from '../../components/BannerForum';
import FooterForum from '../../components/FooterForum';
import FetchAluraForumService from '../../services/FetchAluraForumService';

import IconeErro from './resources/error.svg';

class FormNovoTopicoPage extends Component {
    
    constructor() {
        super();
        this.state = {
            cursoSelecionado: '',
            errosDeValidacao: {}
        }
    }
    
    enviarDuvida = (event) => {
        event.preventDefault();

        const newTopic = { 
            shortDescription: this.descricaoCurta.value,
            content: this.duvida.value,
            courseName: this.state.cursoSelecionado
        }   

        FetchAluraForumService.post("topics", newTopic)
            .then(json => {
                this.props.history.push('/');
            })
            .catch(error => {
                if(error.httpStatus === 400)
                    return error.responseBody;
                else
                    alert("Algo deu errado com a API")
            })
            .then(errosDeValidacao => this.setState({errosDeValidacao}))
    }

    renderizaMensagemValidacao = (campo) => {
        const { numberOfErrors, errors } = this.state.errosDeValidacao

        if (!numberOfErrors || numberOfErrors <= 0)
            return;
        
        const errosDoCampo = errors.filter(error => error['field'] === campo)        
        return errosDoCampo.length > 0 && (
            <div>{
                errosDoCampo.map(erro => 
                        <span className="validation-message" key={erro.message}>{erro.message}</span>)
            }</div>
        )
    }

    renderizaMensagensGlobais = () => {
        const { numberOfErrors, globalErrorMessages } = this.state.errosDeValidacao;

        if (!numberOfErrors || numberOfErrors <= 0)
            return;

        return globalErrorMessages.length > 0 && (
            <div className="alert" data-category="error" role="alert">
                <img alt="erro de validação" className="alert-icon" src={IconeErro} />
                {
                    globalErrorMessages.map(message => 
                            <p className="alert-message" key={message}>{message}</p>)
                }
            </div>
        );
    }

    render() {
        return (
            <div>
                <HeaderForum />
                <BannerForum />
                <section className="allTopics container">
                    <div className="createTopic-author">
                        <div className="container">

                            {this.renderizaMensagensGlobais()}
                            <form className="createTopic-form" method="post" onSubmit={this.enviarDuvida}>

                                <legend className="title">Novo Tópico</legend>

                                <select value={this.state.cursoSelecionado} 
                                        onChange={(event) => this.setState({cursoSelecionado: event.target.value})}>
                                    <option value={null}>Selecione o curso</option>
                                    {
                                        cursos.map(curso => <option key={curso.id} 
                                                value={curso.nome}>{curso.nome}</option>)
                                    }
                                </select>

                                <input className="createTopic-form-title" type="text" placeholder="Descreva a sua dúvida em uma frase curta"
                                    required ref={input => this.descricaoCurta = input}/>
                                {this.renderizaMensagemValidacao('shortDescription')}

                                <div className="markdownEditor isToggled" id="markdownEditor-">
                                    <div className="markdownEditor-area">
                                        
                                        <textarea className="markdownEditor-source markdownEditor-textArea" placeholder="Detalhes da dúvida"
                                            required maxLength="5000" ref={input => this.duvida = input}></textarea>        
                                    </div>
                                </div>
                                {this.renderizaMensagemValidacao('content')}

                                <input type="submit" className="button buttonAction createTopic-form-button" value="Enviar dúvida" />
                            </form>
                        </div>
                    </div>
                </section>
                <FooterForum /> 
            </div>
        );
    }
}

export default FormNovoTopicoPage;



const cursos = [
    {
        id: 1,
        nome: 'Java e Orientação a Objetos',
    }, 
    {
        id: 2,
        nome: 'Adobe XD',
    }, 
    {
        id: 3, 
        nome: 'Bootstrap', 
    }, 
    {
        id: 4, 
        nome: 'React Native parte 2',
    },
    {
        id: 5, 
        nome: 'MySQL I',
    }, 
    {
        id: 6, 
        nome: 'Scrum',
    }
]