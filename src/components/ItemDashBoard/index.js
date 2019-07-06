import React, { Component } from 'react';

import MobileIcon from './resources/mobile.svg';
import ProgramacaoIcon from './resources/programacao.svg';
import FrontEndIcon from './resources/front-end.svg';
import InfraestruturaIcon from './resources/infraestrutura.svg';
import DesignIcon from './resources/design-ux.svg';
import BusinessIcon from './resources/business.svg';

class ItemDashboard extends Component {

    render() {
        const { item } = this.props;

        return (
            <li className={`dashboard-categoryList-category categoriaListaBorda${CategoriasHelper[item.categoryName].sufixoDeClasse}`}>
                <img className="dashboard-categoryList-category-icon" src={CategoriasHelper[item.categoryName].icone} alt={`Categoria ${CategoriasHelper[item.categoryName].sufixoDeClasse}`} aria-hidden="true" />

                <div className="dashboard-categoryList-category-name">
                    <a className={`dashboard-category-name-text categoriaLista${CategoriasHelper[item.categoryName].sufixoDeClasse}`} href="#">
                        {item.categoryName}
                    </a>
                </div>

                <ul className="dashboard-categoryList-category-stats">
                    <li className="categoryList-category-stats-item dashboard-category-stats-topics">
                        <span className="category-stats-item-number dashboard-stats-topics-number">{item.allTopics}</span>
                        <a className="category-stats-item-text dashboard-stats-topics-text" href="#">tópicos</a>
                    </li>
                    <li className="categoryList-category-stats-item dashboard-category-stats-lastWeek">
                        <span className="category-stats-item-number dashboard-stats-lastWeek-number">{item.lastWeekTopics}</span>
                        <span className="category-stats-item-text dashboard-stats-lastWeek-text">na última semana</span>
                    </li>
                    <li className="categoryList-category-stats-item dashboard-category-stats-noReply">
                        <span className="category-stats-item-number dashboard-stats-noReply-number">{item.unansweredTopics}</span>
                        <a className="category-stats-item-text dashboard-stats-noReply-text" href="#">sem resposta</a>
                    </li>
                </ul>

                <div className="dashboard-categoryList-category-subcategories">
                    <ul className="dashboard-category-subcategories-list"> 
                        {
                            item.subcategories.map(sub => 
                                <li className="dashboard-subcategories-list-subcategory" key={sub}>
                                    <a className="dashboard-list-subcategory-link" href="#">
                                        {sub}
                                    </a>
                                </li>
                            )
                        }
                    </ul>

                    <button tabIndex="0" className="dashboard-category-subcategories-dropdownButton">
                        <span className="dashboard-subcategories-dropdownButton-text">ver subcategorias</span>
                    </button>
                </div>

            </li>
        );
    }
}

export default ItemDashboard;

const CategoriasHelper = {
    "Mobile": {
        icone: MobileIcon,
        sufixoDeClasse: "Mobile"
    },
    "Programação": {
        icone: ProgramacaoIcon,
        sufixoDeClasse: "Programacao"
    },
    "Front-end": {
        icone: FrontEndIcon,
        sufixoDeClasse: "FrontEnd"
    },
    "Infraestrutura": {
        icone: InfraestruturaIcon,
        sufixoDeClasse: "Infra"
    },
    "Design": {
        icone: DesignIcon,
        sufixoDeClasse: "Design"
    },
    "Business": {
        icone: BusinessIcon,
        sufixoDeClasse: "Business"
    }
};
