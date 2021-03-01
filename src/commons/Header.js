import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';

import '../styles/index.sass';

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
  padding: 20,
});

const Link = styled(NavLink)`

`;

