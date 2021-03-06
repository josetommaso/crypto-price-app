import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Axios from 'axios'
import image from './crypto.png';
import Form from './components/Form';
import Price from './components/Price';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {

  const [ currency, setCurrency ] = useState('');
  const [ cripto, setCripto ] = useState('');
  const [ result, setResult ] = useState({});
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const sendRequest = async () => {
      // block first execution
      if(currency === '') return;

      // call API to get crypto price
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${currency}`;

      const response = await Axios.get(url);

      // show spinner

      setLoading(true);

      // hide spinner and show results

      setTimeout(() => {
        setLoading(false);
        setResult(response.data.DISPLAY[cripto][currency]);
      }, 3000);

      
    }

    sendRequest();

  }, [currency, cripto])

  // show spinner or results
  const component = (loading) ? <Spinner />
  : 
  <Price
    result={result}
  />
                                              

  return (
    <Container>
      <div>
        <Image
          src={image}
          alt="crypto image"
        />
      </div>
      <div>
        <Heading>Crypto prices in seconds</Heading>

        <Form 
          setCurrency={setCurrency}
          setCripto={setCripto}
        />
        
        {component}
      </div>
    </Container>
  );
}

export default App;
