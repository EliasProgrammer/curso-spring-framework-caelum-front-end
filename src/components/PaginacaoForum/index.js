import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkPrevNext from './components/LinkPrevNext';

class PaginacaoForum extends Component {

    _renderLinks = (paginaAtual, totalDePaginas) => {
        const links = []
        const numeroMaximoDeLinks = 5;

        if (totalDePaginas <= numeroMaximoDeLinks) {
            for (let index = 0; index < totalDePaginas; index++) {
                const link = 
                    <a href="#" key={String(index)} onClick={() => this._buscaDuvidas(index)}               
                            className={`paginationLink ${index === paginaAtual ? 'busca-botao-selecionado': ''}`}>
                        {index + 1}
                    </a>
    
                links.push(link);
            }
            return links;
        }

        return this._renderMultiLinks(paginaAtual, totalDePaginas);
    }

    _renderMultiLinks = (paginaAtual, totalDePaginas) => {
        let paginasVisiveis = [];

        const ultimaPagina = totalDePaginas - 1;
        const paginaAtualProximaDoInicio = paginaAtual <= 2;
        const paginaAtualProximaDoFim = paginaAtual >= ultimaPagina - 2;

        if (paginaAtualProximaDoInicio)
            paginasVisiveis = [0, 1, 2, 3, ultimaPagina];
    
        else if (paginaAtualProximaDoFim)
            paginasVisiveis = [0, ultimaPagina - 3, ultimaPagina - 2, ultimaPagina - 1, ultimaPagina]

        else
            paginasVisiveis = [0, paginaAtual - 1, paginaAtual, paginaAtual + 1, ultimaPagina];
            
        return paginasVisiveis.map((pagina, index) => {
            return (
                <a href="#" onClick={() => this._buscaDuvidas(pagina)} key={String(pagina)}
                        className={`paginationLink 
                            ${paginaAtual === pagina ? 'busca-botao-selecionado': ''}
                            ${this._temPaginasOcultas(index, paginaAtualProximaDoInicio, paginaAtualProximaDoFim) ? 'paginationLink--withSuspensionPoints' : ''}  
                        `}>   
                    {pagina + 1}
                </a>
            );
        });
    }

    _buscaDuvidas = (pagina) => {
        const options = { ...this.props.filtros, pagina }
        this.props.atualizaDuvidasCallback(options);
    }

    _temPaginasOcultas(index, paginaAtualProximaDoInicio, paginaAtualProximaDoFim) {
        return (index === 1 && !paginaAtualProximaDoInicio) || (index === 4 && !paginaAtualProximaDoFim);
    }

    render() {
        const { paginaAtual, totalDePaginas } = this.props;
        const ultimaPagina = totalDePaginas - 1;

        return totalDePaginas > 1 &&
            <div className="container">
                <nav className="busca-paginacao">
                    
                    <LinkPrevNext rel="prev" disabled={paginaAtual === 0}
                            atualizaDuvidasCallback={() => this._buscaDuvidas(paginaAtual - 1)}/>
                    
                    <nav className="busca-paginacao-links">
                        {this._renderLinks(paginaAtual, totalDePaginas)} 
                    </nav>

                    <LinkPrevNext rel="next" disabled={paginaAtual === ultimaPagina} 
                            atualizaDuvidasCallback={() => this._buscaDuvidas(paginaAtual + 1)} />
                </nav>
            </div>
    }
}

PaginacaoForum.propTypes = {
    totalDePaginas: PropTypes.number.isRequired,
    paginaAtual: PropTypes.number
}

PaginacaoForum.defaultProps = {
    totalDePaginas: 0,
    paginaAtual: 0
}

export default PaginacaoForum;

