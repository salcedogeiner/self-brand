import React from 'react';
import BrandHeader from '../../components/templates/brand-header';
import JSONData from "../../data-source/self-data.json"
import { MainProvider } from '../../context/main-context';
import { MainContainer, BodyContainer } from '../../components/templates/container.styled';
import BrandFooter from '../../components/templates/brand-footer';

const MainPage = () => {

    return (
        <main>
            <MainProvider m={JSONData}>
                <MainContainer>
                    <BodyContainer>
                        <BrandHeader></BrandHeader>
                    </BodyContainer>
                    <BrandFooter></BrandFooter>
                </MainContainer>
            </MainProvider>
        </main>   
    );
}

export default MainPage;
