import React, { useEffect, useState } from 'react';
import useCoin from '../hooks/useCurrency';
import useCrypto from '../hooks/useCrypto';
import Error from './Error'
import styled from '@emotion/styled';
import Axios from 'axios';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;

    &:hover {
        background-color: #326ac0;
        cursor: pointer;
        transition: background-color .3s ease;
    }
`;

const Form = ({setCripto, setCurrency}) => {

    const [ cryptoList, setCryptoList ] = useState([]);
    const [ error, setError ] = useState(false);

    const CURRENCY = [
        { code: 'GBP', name: 'Pound Sterling' },
        { code: 'USD', name: 'US Dollar' },
        { code: 'EUR', name: 'Euro' }
    ]

    const [ currency, SelectCoin ] = useCoin('Choose currency', '', CURRENCY);

    const [cryptoCoin, SelectCrypto] = useCrypto('Choose crypto', '', cryptoList);

    // initialize API call
    useEffect(() => {
        const callAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"

            const response = await Axios.get(url);

            setCryptoList(response.data.Data);
        }
        callAPI();
    }, []);

    // when user click submit
    const handleSubmit = e => {
        e.preventDefault();

        // validate if user has selected currency and crypto
        if(currency === '' || cryptoCoin === '') {
            setError(true);
            return;
        }

        //send data to main component
        setError(false);
        setCurrency(currency);
        setCripto(cryptoCoin)
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            { error? <Error message="All fields are required" /> : null }
            <SelectCoin />

            <SelectCrypto />

            <Button 
                type="submit"
                value="Submit"
            />
        </form>
     );
}
 
export default Form;