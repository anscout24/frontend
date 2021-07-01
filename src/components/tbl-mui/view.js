import React, {Component} from "react";
import {connect} from "react-redux";
import {mapDispatch} from "../../store/dispatches/mapDispatch";
import {MUI_TABLE_COLUMN_MAIN} from "./tbl-mui-cfg";
import BasicTable from "./table-mui";
import * as routes from "../../store/routes/routes";

class MainMuiTable extends Component{

    state = {
        dc: null,
    }

    componentDidMount() {
        this.props.onFetchFrom_API(routes.FETCH_DATA_ROUTE)
    }


    componentDidUpdate(prevProps, prevState, snapshot) {


        if (this.props.LISTINGS_DATA !== prevProps.LISTINGS_DATA) {
            let _dc = {}
            _dc.columns = MUI_TABLE_COLUMN_MAIN
            _dc.data = this.props.LISTINGS_DATA;
            // _dc.data = rows;

            this.setState({dc: _dc})
        }

    }


    render() {
        return(
            <>
                {
                    this.state.dc?<BasicTable  data={this.state.dc} />:null
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        LISTINGS_DATA: state.main.listings,
    };
}

export default connect(mapStateToProps,mapDispatch)(MainMuiTable);