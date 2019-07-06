import React, { Component } from 'react';
import './style.css';
import IconeNotSolved from './resources/icon-not-solved.svg';
import IconeSolved from './resources/icon-solved.svg';
import FotoPerfil from './resources/foto-perfil.png';
import UltimaAtualizacao from '../UltimaAtualizacao';

class ItemDuvidaForum extends Component {

    render() {
        const { duvida } = this.props;

        return (
        <div>

            <li className="forumList-item" itemID="/forum/topico-respostas-iguais-na-questao-sobre-fluxo-binario-65105" itemScope="" itemType="http://schema.org/DiscussionForumPosting">
                <div className="forumList-item-subject">
                    <div className="forumList-item-icon">
                        <img height="30px" width="30px" className={`${duvida.solved ? 'forumList-icon-solved': 'forumList-icon-notsolved'}`} src={duvida.solved ? IconeSolved : IconeNotSolved} alt="" />
                    </div>

                    <div className="forumList-item-subject-info">
                        <h2 className="forumList-item-subject-info-title">
                            <span itemProp="about" onClick={() => alert("Ainda não implementamos essa feature")} 
                                    className="forumList-item-subject-info-title-link link">{duvida.shortDescription}</span>
                        </h2>


                        <nav className="topic-breadCrumb">
                            <ol className="topic-breadCrumb-list">

                                <li className="topic-breadCrumb-item">
                                    <a href="#" className={`topic-breadCrumb-item-link topic-breadCrumb-item-category-${duvida.categoryName}`}>{duvida.categoryName}</a>
                                </li>

                                <li className="topic-breadCrumb-item">
                                    <a href="#" className={`topic-breadCrumb-item-link topic-breadCrumb-item-category-${duvida.categoryName} subcategory`}>{duvida.subcategoryName}</a>
                                </li>

                                <li className="topic-breadCrumb-item">
                                    <a href="#" className={`topic-breadCrumb-item-link topic-breadCrumb-item-category-${duvida.categoryName} course`}>{duvida.courseName}</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="forumList-item-wrapper">
                    <div className="forumList-item-infoGroup">
                        <a href="#" className="forumList-item-info" itemProp="author" itemScope="" itemType="http://schema.org/Person">
                            <img className="forumList-item-info-avatar" src={FotoPerfil} alt="" />
                            <div className="forumList-item-info-description">
                                <p className="forumList-item-info-name">por
                                    <strong itemProp="name"> {duvida.ownerName}</strong>
                                </p>
                                <time itemProp="dateModified" dateTime="2018-07-12 15:38">
                                    <p className="forumList-item-info-updatedAt">
                                        <UltimaAtualizacao secondsSinceLastUpdate={duvida.secondsSinceLastUpdate} />
                                    </p>
                                </time>
                            </div>
                        </a>
                    </div>

                    <div className="forumList-item-answers" itemProp="interactionStatistic" itemScope="" itemType="http://schema.org/InteractionCounter">
                        <link itemProp="interactionType" href="http://schema.org/CommentAction"/>
                        <span className="forumList-item-answers-number" itemProp="userInteractionCount">{duvida.numberOfResponses}</span>
                        <span className="forumList-item-answers-description">
                            respostas
                        </span>
                    </div>
                </div>
            </li>


        </div>
        );
    }
} export default ItemDuvidaForum;
