import React from 'react';
import styled from 'styled-components';

export const Container = ({ children }) => {
  return (
    <Content>{children}</Content>
  );
};

const Content = styled.div`
  background-color: #ccccff;
  display: flex;
  flex-wrap: wrap;
  padding: 40px 30px;
  min-height: 80vh;
  flex-grow: 1;
`;