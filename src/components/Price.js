import React from 'react';
import styled from '@emotion/styled';

const ResultDiv = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    span {
        font-weight: bold;
    }
`; 

const Info = styled.p`
    font-size: 18px;
`;

const PriceParagraph = styled.p`
    font-size: 1.9rem;
    
`;

const Price = ({result}) => {
    if(Object.keys(result).length === 0) return null
    return ( 
        <ResultDiv>
            <PriceParagraph>Price: <span>{result.PRICE}</span></PriceParagraph>
            <Info>Today's highest price: <span>{result.HIGHDAY}</span></Info>
            <Info>Today's lowest price: <span>{result.LOWDAY}</span></Info>
            <Info>Last Update: <span>{result.LASTUPDATE}</span></Info>
        </ResultDiv>
     );
}
 
export default Price;