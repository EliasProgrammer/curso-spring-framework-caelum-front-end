import React, { Component } from 'react';

import './style.css';

import PubSub from 'pubsub-js';
import ItemDashboard from '../ItemDashBoard';
import FetchAluraForumService from '../../services/FetchAluraForumService';

class DashboardCategoriasForum extends Component {

    constructor() {
        super();
        this.state = {
            visivel: true,
            categorias: [],
        }

        this.token = PubSub.subscribe('MUDANDO_VISUALIZACAO', 
            (mensagem, pagina) => this.setState({ visivel: pagina === 0 }))
    }

    componentDidMount() {
        FetchAluraForumService.get("topics/dashboard")
            .then(categorias => this.setState({categorias}));
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        return this.state.visivel && <div>
            <main className="dashboard">
                <div className="container">
                    <ul className="dashboard-categoryList">
                        {
                            this.state.categorias.map(categoria =>
                                <ItemDashboard item={categoria} key={categoria.categoryName}/>
                            )
                        }
                    </ul>
                </div>
            </main>
        </div>
    }
} export default DashboardCategoriasForum;