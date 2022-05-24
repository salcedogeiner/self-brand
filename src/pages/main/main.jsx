import React from 'react';
import BrandHeader from '../../components/templates/brand-header';
import JSONData from "../../data-source/self-data.json"
import { MainProvider } from './context';

export const Main = () => {

    return (
        <MainProvider m={JSONData}>
            <BrandHeader></BrandHeader>
        </MainProvider>
    );
}
