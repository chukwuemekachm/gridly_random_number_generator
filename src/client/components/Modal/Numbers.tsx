import * as React from 'react';
import styled from 'styled-components';

import { Button } from '../Button/Button';
import { number } from 'prop-types';

export interface NumbersProp {
  numbers: number[];
}

export function Numbers({ numbers }: NumbersProp) {
  return (
    <Numbers.Container>
      <div>
        {
          numbers.map(number => <span key={number}>{number}</span>)
        }
      </div>
      <h4>{numbers.length} numbers</h4>
    </Numbers.Container>
  )
}

Numbers.Container = styled.section`
  width: 100%;

  div {
    background-color: rgba(0, 0, 0, .03);
    width: 100%;
    height: 20em;
    padding: .8em;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    box-sizing: border-box;
    overflow-x: scroll;

    span {
      font-weight: 300;
      font-size: 1.5em;
      text-align: center;
      margin-bottom: .5em;
      letter-spacing: .2em;
    }
  }

  button {
    margin: 1em 0;
  }
`;
