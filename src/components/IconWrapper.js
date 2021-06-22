import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color ease 0.2s;
  :hover {
    background-color: #3089f033;
  }
  svg{
    margin: 36px 0;
  }
`

export default ({children}) =>
  <IconWrapper>
    { children }
  </IconWrapper>
