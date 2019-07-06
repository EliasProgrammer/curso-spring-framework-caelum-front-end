import React, { Component } from 'react';
import './style.css';

import UltimaAtualizacao from '../UltimaAtualizacao';

class HeaderTopico extends Component {

    fechaTopico = () => {
        alert("Ainda não implementamos essa feature =)")
    }
    
    render() {
        const { topico } = this.props;

        return (
            <header className="topic-header">
                <div className="topic-header-container">
                    <div className="topic-header-container-info">
                        <h1 itemProp="name" className="topic-header-container-title">
                            {topico.shortDescription}
                        </h1>

                        <nav className="topic-breadCrumb">
                            <ol className="topic-breadCrumb-list">

                                <li className="topic-breadCrumb-item">
                                    <span className={`topic-breadCrumb-item-link topic-breadCrumb-item-category-${topico.categoryName}`}>{topico.categoryName}</span>
                                </li>

                                <li className="topic-breadCrumb-item">
                                    <span className={`topic-breadCrumb-item-link topic-breadCrumb-item-category-${topico.categoryName} subcategory`}>{topico.subcategoryName}</span>
                                </li>

                                <li className="topic-breadCrumb-item">
                                    <span className={`topic-breadCrumb-item-link topic-breadCrumb-item-category-${topico.categoryName} course`}>{topico.courseName}</span>
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <div className="topic-header-container-details">
                        <div style={textStyle} className="topic-header-container-details-date">
                            Atualizado <UltimaAtualizacao lastUpdate={topico.lastUpdate}/>
                        </div>

                        <div className="topic-container-details-moderator">
                            <span style={linkStyle} onClick={this.fechaTopico}>
                                Fechar tópico
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderTopico;

const linkStyle = {
    color: '#c0392b',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '350',
    textDecoration: 'underline'
}

var textStyle = {
    fontSize: '18px',
    fontWeight: '350'
};