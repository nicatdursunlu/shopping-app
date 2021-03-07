import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from '../../commons';
import { SingleProduct } from './SingleProduct';

export const CartPage = () => {
  const reducer = useSelector(state => state.data);
  // console.log(reducer);

  return (
    <Container>
      {Object.values(reducer.cartProducts).map((item) => (
        <SingleProduct key={item.id} cartProduct={item} />
      ))}
    </Container>
  );
};

