import React from 'react';

const Price = ({result}) => {
    if(Object.keys(result).length === 0) return null
    return ( 
        <div>
            <p>Price: <span>{result.PRICE}</span></p>
            <p>Today's highest price: <span>{result.HIGHDAY}</span></p>
            <p>Today's lowest price: <span>{result.LOWDAY}</span></p>
            <p>Last Update: <span>{result.LASTUPDATE}</span></p>
        </div>
     );
}
 
export default Price;