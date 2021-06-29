import React from 'react';
import ConnectionCheck from "../../components/backendCheck/view";
import LayoutWrapper from '../../shared/layoutWrapper/layoutWrapper';

const MainPage = () => {

    return(
        <>
            <LayoutWrapper ContainerTyp="Body">
                <p/>
                <h1> Website for Scout24 Challenge </h1>
                <ConnectionCheck/>
            </LayoutWrapper>

        </>
    );
}

export default MainPage;
