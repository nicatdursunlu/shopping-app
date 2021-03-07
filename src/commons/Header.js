import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import styled from 'styled-components';

export const Header = () => {
  return (
    <Container>
      <Link to="/" exact>
        <AiOutlineHome className="icon" />
      </Link>
      <Link to="/cart">
        <RiShoppingBasketLine className="icon" />
      </Link>
    </Container>
  );
};

const Container = styled.div({
  backgroundColor: 'blue',
  display: 'flex',
  justifyContent: 'flex-end',
  padding: 15,
});

const Link = styled(NavLink)`
  color: white;
  font-size: 35px;
  padding: 0 10px;

  &:hover {
    transform: scale(1.3);
  }

  &.active {
    color: crimson;
  }
`;

