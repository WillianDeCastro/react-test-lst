import type React from "react";
import { useState } from "react";
import LstCountries from "./components/lstCountries";
import DropCapitals from "./components/dropCapitals";


const Countries: React.FC = () => {

    const [countries, setCountries] = useState([
        { id: 1, name: 'Brazil', capitalName: 'Brasilia' },
        { id: 2, name: 'United States', capitalName: 'Washington, D.C.' },
        { id: 3, name: 'Canada', capitalName: 'Ottawa' },
        { id: 4, name: 'Germany', capitalName: 'Berlin' },
        { id: 5, name: 'France', capitalName: 'Paris' },
        { id: 6, name: 'Italy', capitalName: 'Rome' },
        { id: 7, name: 'Spain', capitalName: 'Madrid' },
        { id: 8, name: 'Australia', capitalName: 'Canberra' },
        { id: 9, name: 'India', capitalName: 'New Delhi' },
        { id: 10, name: 'China', capitalName: 'Beijing' },
        { id: 11, name: 'Japan', capitalName: 'Tokyo' },
        { id: 12, name: 'South Korea', capitalName: 'Seoul' },
        { id: 13, name: 'Mexico', capitalName: 'Mexico City' },
        { id: 14, name: 'Russia', capitalName: 'Moscow' },
        { id: 15, name: 'United Kingdom', capitalName: 'London' },
        { id: 16, name: 'Argentina', capitalName: 'Buenos Aires' },
        { id: 17, name: 'South Africa', capitalName: 'Pretoria' },
        { id: 18, name: 'Egypt', capitalName: 'Cairo' },
        { id: 19, name: 'Norway', capitalName: 'Oslo' },
        { id: 20, name: 'Sweden', capitalName: 'Stockholm' },
    ]);

    const [selectedCapital, setSelectedCapital] = useState('');


    const getCapitalsOnly = () => {

        return countries.map(({ id, capitalName }) => ({ id, name: capitalName }));
    }

    const capitalChanged = (capital: any) => {
        setSelectedCapital(capital)
    }

    const filteredCapitals = () => {
        if (selectedCapital == '') {
            return countries;
        }
        return countries.filter(c => c.capitalName == selectedCapital);
    }


    return (
        <>
            <h1>Countries Page</h1>

            <DropCapitals capitals={getCapitalsOnly()} onCapitalChange={capitalChanged} />
            <LstCountries countries={filteredCapitals()} />
        </>

    )

}

export default Countries;