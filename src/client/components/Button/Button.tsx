import * as React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  size?: string;
  children: string;
  handleClick?: () => void;
}

export function Button({ size, children, handleClick }: ButtonProps) {
  const ButtonWrapper = size === "small"
    ? Button.Small
    : Button.Large;
  return (<ButtonWrapper onClick={handleClick}>{ children }</ButtonWrapper>);
}

Button.Container = styled.button`
  border: none;
  font-weight: 300;
  letter-spacing: 0.07em;
  line-height: 1;
  color: #fff;
  background: #f22f46;
  cursor: pointer;
  outline: none;
`;

Button.Small = styled(Button.Container)`
  padding: 0.75em;
  border-radius: 0.19em;
  font-size: 0.75em;
  
  :hover {
    box-shadow: 0 0.32em 2em rgba(0, 0, 0, .3);
    transition: all .5s cubic-bezier(.4, 0, .2, 1);
  }
`;

Button.Large = styled(Button.Container)`
  width: 100%;
  padding: 1em;
  border-radius: 0.25em;
  font-size: 1.2em;
  box-shadow: 0 0.32em 2em rgba(0, 0, 0, .3);
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;

  :hover {
    background-color: #d80e25;
    transition: all .5s cubic-bezier(.4, 0, .2, 1);
  }
`;
