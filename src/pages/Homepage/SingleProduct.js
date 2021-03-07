import React from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';

import { addToCart } from '../../store/cart';

export const SingleProduct = ({ product }) => {

  const { name, price, image, desc } = product;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
  }

  return (
    <Container>
      <Name>{name}</Name>
      <Description>{desc}</Description>
      <Content>
        <Image src={image} />
        <Button onClick={addToCartHandler}>Add to cart</Button>
        <Price>{price}$</Price>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: calc((90% - 60px) / 3);
  border: 2px solid gray;
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
`;

const Name = styled.p({
  color: 'blue',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
});

const Price = styled.p({
  color: 'red',
  fontSize: 17,
  fontWeight: 'bold',
});

const Content = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Image = styled.img({
  width: 120,
  height: 120,
});

const Button = styled.button`
  padding: 5px 15px;
  background-color: red;
  border: none;
  color: white; 
  border-radius: 10px;
  overflow: hidden;
  outline: none;

  &:hover {
    background-color: #cc0000;
  }
`;

const Description = styled.p({
  textAlign: 'center',
  fontSize: 17,
  color: 'gray',
});

