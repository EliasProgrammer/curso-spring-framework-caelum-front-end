import React, { Component } from 'react';
import './style.css';
import './prettify.css';

import FotoDePerfil from './resources/foto-perfil.png';
import UltimaAtualizacao from '../UltimaAtualizacao';

class RespostaTopico extends Component {

    marcaSolucao = (event) => {
        event.preventDefault();
        const { idTopico, resposta } = this.props;

        alert(`Ainda vamos implementar essa feature: /api/topics/${idTopico}/answers/${resposta.id}`);
    }

    render() {
        const { idTopico, resposta } = this.props;

        return (
            <section itemProp="suggestedAnswer" itemScope="" itemType="http://schema.org/Answer" className="topic-post" id="690911">
                <div className="container">

                    {resposta.solution && 
                        <div className="topic-post-solved">
                            <span className="topic-post-solved-text">solução</span>
                        </div>
                    }

                    <section className="topic-post-header">
                        <section itemProp="author" itemScope="" itemType="http://schema.org/Person" className="topic-post-author">
                            <span className="topic-post-author-photo">
                                <img src={FotoDePerfil}
                                    alt="" className="topic-post-author-photo-img" />
                            </span>

                            <div className="topic-post-author-details">
                                <span itemProp="name" className="topic-post-author-name">
                                    {resposta.ownerName}
                                </span>
                                <div style={{marginLeft: '10px'}} className="topic-post-author-exp">(2412.4k <span>xp</span>, 4824 <span>posts</span>)</div>
                                <span className="topic-post-author-desc">Usuário da Alura</span>
                            </div>
                        </section>

                        <span className="topic-post-date">
                            <UltimaAtualizacao lastUpdate={resposta.creationTime} />
                        </span>
                    </section>

                    <section itemProp="text" className="topic-post-content">
                        {resposta.content}
                    </section>

                    <div className="topic-post-actions answer-options">
                        {!this.props.isSolution && 
                            <form className="topic-post-solveForm">
                                <button onClick={this.marcaSolucao} className="topic-button topic-post-solveButton">
                                    <span className="topic-post-solveButton-hideMobile">Marcar como</span> solução</button>
                            </form>
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default RespostaTopico;