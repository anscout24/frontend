import React from 'react';
import ConnectionCheck from "../../components/backendCheck/view";
import MainMuiTable from "../../components/tbl-mui/view";
import SimpleMap from "../../components/map-google/map-google";
import LayoutWrapper from '../../shared/layoutWrapper/layoutWrapper';

const MainPage = () => {

    return(
        <>
            <LayoutWrapper ContainerTyp="Body">
                <p/>
                <h1> Website for Scout24 Challenge </h1>
                <ConnectionCheck/>
            </LayoutWrapper>

            <LayoutWrapper ContainerTyp="Body">
                <p/>
                <MainMuiTable/>
            </LayoutWrapper>

            <LayoutWrapper ContainerTyp="Body">
                <p/>
                <SimpleMap/>
            </LayoutWrapper>

        </>
    );
}

export default MainPage;
