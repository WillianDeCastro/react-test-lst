interface country {
    name: string;
    capitalName: string;
    id: number;
}

interface LstCountriesProps {
    countries: country[]
}

const LstCountries: React.FC<LstCountriesProps> = ({ countries }) => {

    return (
        <ul>
            {
                countries.map((country: any) => (
                    <li key={country.id}>
                        {`${country.name}, ${country.capitalName}`}
                    </li>

                ))

            }

        </ul>
    )
}

export default LstCountries;