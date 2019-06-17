import * as React from 'react';
import styled from 'styled-components';

import { Button } from '../Button/Button';

export interface NavBarProps {
  handleDisplayNumbersModal: () => void;
};

export function NavBar({ handleDisplayNumbersModal }: NavBarProps) {
  return (
    <NavBar.Container>
      <span>
        <i className="icon ion-md-cube" />
        <h3>Gridly</h3>
      </span>
      <Button size="small" handleClick={handleDisplayNumbersModal}>Generated Numbers</Button>
    </NavBar.Container>
  )
}

NavBar.Container = styled.nav`
  padding: 1em 5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.32em 2em rgba(153, 153, 153, .2);
  top: 0em;
  position: -webkit-sticky;
  position: sticky;
  background-color: rgba(255, 255, 255, .8);
  transition: all .8s cubic-bezier(.4, 0, .2, 1);

  span {
    display: flex;
    align-items: inherit;
  }

  span h3 {
    margin: 0 .3em;
    font-size: 2em;
    font-weight: 400;
  }

  span i {
    font-size: 3em;
    color: #f22f46;
  }
`;
