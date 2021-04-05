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

const SelectInput = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCoin = (label, originalState, options) => {

    // state of our custom hook
    const [ state, updateState ] = useState(originalState);


    const Select = () => (
        <Fragment>
            <Label>{label}</Label>
            <SelectInput
                onChange={ e => updateState(e.target.value) }
                value={ state }
            >
                <option value="">-- Select --</option>
                {options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </SelectInput>
        </Fragment>
    );

    // return state, UI and function that modify state
    return [state, Select];

}

export default useCoin;