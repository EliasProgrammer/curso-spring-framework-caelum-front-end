import React, { Component } from 'react';

import ItemDuvidaForum from '../ItemDuvidaForum';
import FetchAluraForumService from '../../services/FetchAluraForumService';

class PainelDuvidasForum extends Component {

    constructor() {
        super();
        this.state = {
            duvidas: []
        }
    }

    componentDidMount = () => {
        this.recarregaDuvidas();
    }

    recarregaDuvidas = () => {
        FetchAluraForumService.get('topics')
            .then(json => {
                console.log(json)
                this.setState({duvidas: json})
            })
            .catch(e => alert(e.message));
    }

    render() {
        const { duvidas } = this.state;

        return (
            <div>
                <div>{
                    duvidas.map(duvida => <ItemDuvidaForum duvida={duvida} key={String(duvida.id)}/>)
                }</div>
            </div>
        );
    }
}

export default PainelDuvidasForum;