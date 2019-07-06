import React from 'react';
import PropTypes from 'prop-types';


const LinkPrevNext = ({rel, disabled, atualizaDuvidasCallback }) => (
    disabled ? 
    
        <span className={`busca-paginacao-prevNext 
                busca-paginacao-${ rel === 'prev' ? 'linksAnteriores' : 'linksProximos' } 
                busca-paginacao-prevNext--disabled`}>
            {rel === 'prev' ? 'Anterior': 'Próximo'}
        </span>

        : 

        <a href="#" rel={rel} onClick={atualizaDuvidasCallback}
                className={`busca-paginacao-prevNext 
                        busca-paginacao-${ rel === 'prev' ? 'linksAnteriores' : 'linksProximos' }`}>
            {rel === 'prev' ? 'Anterior': 'Próximo'}
        </a>
);

LinkPrevNext.propTypes = {
    rel: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired
}

export default LinkPrevNext;