import React, { Component } from 'react';
import './style.css';

import CategoriasDoForum from '../../CategoriasDoForum';
import JWTs from '../../infra/JWTs';

class MenuDuvidasForum extends Component {

    constructor() {
        super();
        this.state = {
            filtroAtivo: '',
            categoriaAtiva: CategoriasDoForum['TODAS'],
            seletorDeCatoriaAtivo: false
        }
    }
    
    toggleDropDownCategoria = () => {
        this.setState({seletorDeCatoriaAtivo: !this.state.seletorDeCatoriaAtivo})
    }

    selecionaCategoria = (categoria) => {
        this.setState({categoriaAtiva: CategoriasDoForum[categoria]}, 
            this.buscaDuvidas);
    }

    toggleRestricoes = (filtro) => {
        this.setState({filtroAtivo: filtro}, 
            this.buscaDuvidas);
    }

    buscaDuvidas = () => {
        const options = {
            categoria: this.state.categoriaAtiva,
            status: this.state.filtroAtivo
        }

        this.props.atualizaDuvidasCallback(options);
    }

    renderBotaoNovoTopico = () => {
        const jwt = localStorage.getItem('jwt');
    
        if( jwt && !JWTs.isExpired(jwt) ) {
            return (
                <div className="title-and-new-topic">
                    <span className="title">Tópicos mais recentes</span>
                    <button className="button-new-topic" 
                            onClick={() => this.props.history.push('/topics-form')}>
                        Criar novo tópico
                    </button>
                </div>
            );    

        } else {
            return (
                <div className="title-and-new-topic"></div>
            );
        }
    }

    render() {
        const { categoriaAtiva } = this.state;

        return (
            <div>
                <section className="forumFilter">
                    <form className="forumFilter-form" action="https://cursos.alura.com.br/forum/todos/1"></form>

                    <div className="container">
                        {this.renderBotaoNovoTopico()}

                        <div className="categories-restrictions-and-search">
                            <fieldset className="select-filter">
                            <div className={`categoryFilter cs-select ${this.state.seletorDeCatoriaAtivo ? 'cs-active' : ''}`} 
                                onClick={this.toggleDropDownCategoria} 
                                tabIndex="0">
                    
                                <span className={`cs-placeholder ${categoriaAtiva.menuClass}`}>{categoriaAtiva.nome}</span>
                                <div className="cs-options">
                                    <ul>
                                        <li className="menuTodasCategorias" data-link="/api/topics" data-option="" data-value="todos" >
                                            <span onClick={() => this.selecionaCategoria('TODAS')}>Todas as categorias</span>
                                        </li>
                                        <li className="menuMobile"data-option="" data-value="mobile">
                                            <span onClick={() => this.selecionaCategoria('MOBILE')}>Mobile</span>
                                        </li>
                                        <li className="menuProgramacao" data-option="" data-value="programacao">
                                            <span onClick={() => this.selecionaCategoria('PROGRAMACAO')}>Programação</span>
                                        </li>
                                        <li className="menuFrontEnd" data-option="" data-value="front-end">
                                            <span onClick={() => this.selecionaCategoria('FRONT')}>Front-end</span>
                                        </li>
                                        <li className="menuInfraestrutura" data-option="" data-value="infraestrutura">
                                            <span onClick={() => this.selecionaCategoria('INFRA')}>Infraestrutura</span>
                                        </li>
                                        <li className="menuDesign" data-option="" data-value="design-ux">
                                            <span onClick={() => this.selecionaCategoria('DESIGN')}>Design</span>
                                        </li>
                                        <li className="menuBusiness" data-option="" data-value="business">
                                            <span onClick={() => this.selecionaCategoria('BUSINESS')}>Business</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </fieldset>

                            <fieldset className="restrictions">
                                <input className="restrictionsInput--all" type="radio"  name="restriction" value="todos" id="todos"/>
                                <label className="restrictionsLabel restrictionsLabel--all" htmlFor="todos" onClick={() => this.toggleRestricoes('')}>
                                    Todos
                                </label>

                                <input className="restrictionsInput--all" type="radio" name="restriction" value="sem-resposta" id="sem-resposta"/>
                                <label className="restrictionsLabel restrictionsLabel--all" htmlFor="sem-resposta" onClick={() => this.toggleRestricoes('NOT_ANSWERED')}>
                                    Sem resposta
                                </label>

                                <input className="restrictionsInput--all" type="radio" name="restriction" value="sem-solucao" id="sem-solucao"/>
                                <label className="restrictionsLabel restrictionsLabel--all" htmlFor="sem-solucao" onClick={() => this.toggleRestricoes('NOT_SOLVED')}>
                                    Sem solução
                                </label>
                            </fieldset>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
} 

export default MenuDuvidasForum;