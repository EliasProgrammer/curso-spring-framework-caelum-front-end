import React, { Component } from 'react';
import IconeAlerta from './resources/alert.svg';
import FetchAluraForumService from '../../services/FetchAluraForumService';

class NovaRespostaTopico extends Component {

    constructor() {
        super();
        this.state = {
            errosDeValidacao: {}
        }
    }

    adicionaResposta = (event) => {
        event.preventDefault();

        const novaResposta = {
            content: this.resposta.value
        }

        const atualizaTopico = (novaResposta) => 
                this.props.atualizaRespostas(novaResposta)

        FetchAluraForumService.post(`topics/${this.props.idTopico}/answers`, novaResposta)
            .then(novaResposta => {
                atualizaTopico(novaResposta)
                this.resposta.value = '';
            })
            .catch(error => {
                if(error.httpStatus === 400)
                    return error.responseBody;
                else
                    alert("Algo deu errado com a API")
            })
            .then(erros => this.setState({errosDeValidacao: erros}))
    }

    renderizaMensagemValidacao = (campo) => {
        if (!this.state.errosDeValidacao)
            return;

        const { numberOfErrors, errors } = this.state.errosDeValidacao

        if (!numberOfErrors || numberOfErrors <= 0)
            return;
        
        const errosDoCampo = errors.filter(error => error['field'] === campo)        
        return errosDoCampo.length > 0 && (
            <div>{
                errosDoCampo.map(erro => 
                    <div style={{backgroundColor: '#f9fbfd', paddingTop: '5px'}} key={erro.message}>
                        <span className="validation-message">{erro.message}</span>
                        <br/>
                    </div>)
            }</div>
        )
    }

    render() {
        return (
            <div className="container">

                {this.props.solved &&
                    <div className="container">
                        <div className="alert" data-category="alert" role="alert">
                            <img alt="" className="alert-icon" src={IconeAlerta} />
                            <p className="alert-message">Esta dúvida já foi marcada como solucionada, se a dúvida ainda persiste, por favor abra outra discussão.</p>
                        </div>
                    </div>
                }

                <section className="topic-reply">
                    <div className="container">
                        <h2 className="topic-reply-title">O que você acha disso?</h2>

                        <form className="topic-reply-form">
                            <div className="markdownEditor isToggled" id="markdownEditor-">
                                
                                <div className="markdownEditor-buttons ">
                                    <button className="markdownEditor-button markdownEditor-button-code " data-insert-code="insira seu código aqui" type="button">
                                        Deixe sua resposta
                                    </button>
                                </div>

                                <div className="markdownEditor-area">
                                    <textarea aria-live="polite" aria-atomic="true" 
                                        className="markdownEditor-source markdownEditor-textArea"
                                        maxLength="5000" id="markdownEditor--ta"
                                        required={true} ref={textarea => this.resposta = textarea}></textarea>
                                </div>
                                {this.renderizaMensagemValidacao('content')}  
                            </div>
                            <input className="topic-reply-form-submit" type="submit" value="Responder" 
                                onClick={this.adicionaResposta}/>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default NovaRespostaTopico;