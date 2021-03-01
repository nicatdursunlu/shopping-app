import React from 'react';
import { connect } from 'react-redux';

import { Container } from '../../commons';
import { getProducts } from '../../store/cart';
import { SingleProduct } from './SingleProduct';

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

export const Homepage = connect(mapStateToProps)((props) => {

  const { products } = props;

  return (
    <Container>
      {products.map((item) => (
        <SingleProduct key={item.id} product={item} />
      ))}
    </Container>
  );
});
