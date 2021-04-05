import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const SelectCoin = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const UseCoin = (label, originalState, options) => {

    // state of our custom hook
    const [ state, updateState ] = useState(originalState);


    const Select = () => (
        <Fragment>
            <Label>{label}</Label>
            <SelectCoin
                onChange={ e => updateState(e.target.value) }
                value={ state }
            >
                <option value="">-- Select --</option>
                {options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </SelectCoin>
        </Fragment>
    );

    // return state, UI and function that modify state
    return [state, Select, updateState];

}

export default UseCoin;