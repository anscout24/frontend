import React from 'react';
import {mapDispatch} from '../../store/dispatches/mapDispatch';
import {connect} from "react-redux";
import * as routes from "../../store/routes/routes";
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';

class ConnectionCheck extends React.Component{

    intervalID;

    getData (){
        this.props.onFetchFrom_API(routes.TEST_API_ROUTE,'GET')
    }


    componentDidMount() {
        this.getData();
        clearInterval(this.intervalID)
        const timeout =  this.props.INTERVAL*1000;
        this.intervalID = setInterval(this.getData.bind(this),timeout)

    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    render() {
        return(this.props.BACKEND_STATUS?<SettingsInputAntennaIcon/>:null)
    }
}


const mapStateToProps = state => {
    return {
        BACKEND_STATUS: state.main.backendStatus,
        INTERVAL: state.main.interval,
    };
}


export default connect(mapStateToProps,mapDispatch)(ConnectionCheck);