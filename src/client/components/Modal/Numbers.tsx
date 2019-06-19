import * as React from 'react';
import styled from 'styled-components';

import { Button } from '../Button/Button';

export interface NumbersProp {
  numbers: number[];
  handleNumbersSort: () => void;
  sort: string;
}

export function Numbers({ numbers, handleNumbersSort, sort }: NumbersProp) {
  return (
    <Numbers.Container>
      <div>
        {
          numbers.map(number => <span key={number}>{number}</span>)
        }
      </div>
      <h4>
        <span>{numbers.length} numbers</span>
      </h4>
      <h4>
        <span>Minimum number: {Math.min(...numbers)}</span>
        <Button size="small" handleClick={handleNumbersSort}>{`Sort ${sort}`}</Button>
        <span>Maximum number: {Math.max(...numbers)}</span>
      </h4>
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

  h4:nth-child(2) {
    margin-bottom: none;
  }

  h4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
