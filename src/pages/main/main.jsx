import React from 'react';
import BrandHeader from '../../components/templates/brand-header';
import JSONData from "../../data-source/self-data.json"
import { MainProvider } from '../../context/main-context';

const MainPage = () => {

    return (
        <main>
            <MainProvider m={JSONData}>
                <BrandHeader></BrandHeader>
            </MainProvider>
        </main>
    );
}

export default MainPage;
