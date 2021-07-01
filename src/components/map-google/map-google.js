import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from "./map-marker";
import {connect} from "react-redux";
import {mapDispatch} from "../../store/dispatches/mapDispatch";

const GOOGLE_KEY =  process.env.REACT_APP_GOOGLE_API_KEY

let id=0
const getID = () => `k_${id++}`;

const SimpleMap = (props) => {

    const defaultProps = {
        center: { lat: 51.16, lng: 10.45 },
        zoom: 5
    };

    const createMapPoint = () => {
        if (!props.LISTINGS_DATA) return null
        let mapPoint = []

        // eslint-disable-next-line array-callback-return
        props.LISTINGS_DATA.map( item => { mapPoint.push(
            <MapMarker key={getID()} lat={item.latitude} lng={item.longitude} item={item}/>) }
        )
        return mapPoint
    }


    return (
        <div style={{ height: '40vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_KEY}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {
                    createMapPoint()
                }

            </GoogleMapReact>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        LISTINGS_DATA: state.main.listings,
    };
}

export default connect(mapStateToProps,mapDispatch)(SimpleMap);