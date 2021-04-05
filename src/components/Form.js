import React from 'react';
import useCoin from '../hooks/useCoin';
import styled from '@emotion/styled';

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

const Form = () => {

    const COINS = [
        { code: 'GBP', name: 'Pound Sterling' },
        { code: 'USD', name: 'US Dollar' },
        { code: 'EUR', name: 'Euro' }
    ]

    const [ coin, SelectCoin ] = useCoin('Choose crypto', '', COINS);

    return ( 
        <form>
            <SelectCoin />

            <Button 
                type="submit"
                value="Submit"
            />
        </form>
     );
}
 
export default Form;