import React, { Component } from 'react';
import './style.css';

import HeaderForum from '../../components/HeaderForum';
import BannerForum from '../../components/BannerForum';
import FooterForum from '../../components/FooterForum';
import DashboardCategoriasForum from '../../components/DashboardCategoriasForum';
import PainelDuvidasForum from '../../components/PainelDuvidasForum';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderForum />
        <BannerForum />
        <section className="allTopics container">
          <PainelDuvidasForum {...this.props}/>
        </section>
        <FooterForum /> 
 
      </div>
    );
  }
}

export default HomePage;