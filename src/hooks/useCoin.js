import React, { Fragment, useState } from 'react';

const useCoin = (label, originalState, options) => {

    // state of our custom hook
    const [ state, updateState ] = useState(originalState);

    const Select = () => (
        <Fragment>
            <label>{label}</label>
            <select>
                <option value="">-- Select --</option>
                {options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </select>
        </Fragment>
    );

    // return state, UI and function that modify state
    return [state, Select];

}

export default useCoin;