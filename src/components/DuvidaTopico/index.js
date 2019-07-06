import React, { Component } from 'react';
import './style.css';
import './prettify.css';

import FotoDePerfil from './resources/foto-perfil.png';

class DuvidaTopico extends Component {

    render() {
        const { topico } = this.props; 

        return (
            <section className="topic-post" id="686943">
                <div className="container">
                    <section className="topic-post-header">
                        <section itemProp="author" itemScope="" itemType="http://schema.org/Person" className="topic-post-author">
                            <a href="/user/pedronunesfx" className="topic-post-author-photo">
                                <img src={FotoDePerfil}
                                    alt="" className="topic-post-author-photo-img" />
                            </a>
                            <div className="topic-post-author-details">
                                <span itemProp="name" className="topic-post-author-name">
                                    {topico.ownerName}
                                </span>
                                <div style={{marginLeft: '10px'}} className="topic-post-author-exp">(1.8k <span>xp</span>, 5 <span>posts</span>)</div>
                                <span className="topic-post-author-desc">Usuário da Alura</span>
                            </div>
                        </section>
                    </section>

                    <section itemProp="text" className="topic-post-content">
                        {topico.content}
                    </section>
                </div>
            </section>
        );
    }
}

export default DuvidaTopico;