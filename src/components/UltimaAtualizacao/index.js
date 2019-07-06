import React  from 'react';
import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';
 
class UltimaAtualizacao extends React.Component {
    
    componentWillMount() {
        Moment.globalMoment = moment;
        Moment.globalLocale = 'pt';
    }

    render() {
        const currentDate = new Date();
        
        const { secondsSinceLastUpdate } = this.props;
        if (secondsSinceLastUpdate)
            return (
                <span>
                    Atualizado <Moment fromNow subtract={{ seconds: secondsSinceLastUpdate }} interval={0}>
                        {currentDate}
                    </Moment>
                </span>
            );
        
        const { lastUpdate } =  this.props;
        if (lastUpdate)
            return (
                <span style={this.props.style}>
                    <Moment fromNow interval={0}>
                        {lastUpdate}
                    </Moment>
                </span>
            );

        return null;
    }
}

export default UltimaAtualizacao;
