import React, { Component } from 'react';
import './style.css';

import HeaderForum from '../../components/HeaderForum';
import BannerForum from '../../components/BannerForum';
import FooterForum from '../../components/FooterForum';

import HeaderTopico from '../../components/HeaderTopico';
import DuvidaTopico from '../../components/DuvidaTopico';
import RespostaTopico from '../../components/RespostaTopico';
import NovaRespostaTopico from '../../components/NovaRespostaTopico';
import FetchAluraForumService from '../../services/FetchAluraForumService';

class TopicoPage extends Component {

    constructor() {
        super();
        this.state = {
            topico: {
                answers: []
            }
        };
    }

    componentDidMount() {
        const { idTopico } = this.props.history.location.state;

        FetchAluraForumService.get(`topics/${idTopico}`)
            .then(topico => this.setState({topico}));
    }
    
    showSolvedLabel() {
        const { topico } = this.state;
        if (topico.status === 'SOLVED') {
            return (
                <div className="allTopics topic-solved">
                    <div className="container">
                        <p className="topic-solved-text">Solucionado</p>
                    </div>
                </div>
            );
        }
    }

    atualizaRepostas = (novaResposta) => {
        const novaLista = [
            ...this.state.topico.answers,
            novaResposta
        ]

        const topicoAtualizado = {
            ...this.state.topico,
            answers: novaLista
        }

        this.setState({topico: topicoAtualizado})
    }

    renderAnswers = () => {
        const { id, answers } = this.state.topico;
        answers.sort((x, y) => x.id - y.id)

        return answers.map(resposta => 
            <RespostaTopico key={String(resposta.id)} 
                idTopico={id} resposta={resposta}/>)
    }
    
    render() {
        const { topico } = this.state;

        return (
            <div>
                <HeaderForum />
                <BannerForum />

                {this.showSolvedLabel()}
                <section className="allTopics container">
                    <HeaderTopico topico={topico}/>
                    <DuvidaTopico topico={topico}/>
                </section>

                <div className="topic-answers-banner">
                    <div className="container">
                        {topico.numberOfResponses} <span>respostas</span>
                    </div>
                </div>

                <section className="allTopics container">
                    {this.renderAnswers()}
                </section>

                <NovaRespostaTopico idTopico={topico.id} solved={topico.status === 'SOLVED'} 
                        atualizaRespostas={this.atualizaRepostas}/>
                <FooterForum />
            </div>
        );
    }
}

export default TopicoPage;