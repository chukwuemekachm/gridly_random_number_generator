import * as React from 'react';
import styled from 'styled-components';

import { Button } from '../Button/Button';

export interface GenerateNumberProps {
  handleGenerateNumbers: () => void;
  handleChange: (event: any) => void;
  count: number;
}

export function GenerateNumber({ handleGenerateNumbers, handleChange, count }: GenerateNumberProps) {
  return (
    <GenerateNumber.Container>
      <span>
        <input
          type="number"
          min="1"
          max="500"
          onChange={handleChange}
          value={count}
        />
      </span>
      <Button size="small" handleClick={handleGenerateNumbers}>Generate</Button>
      <p>Enter a number not greater than 500</p>
    </GenerateNumber.Container>
  );
}

GenerateNumber.Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: auto;
  padding: 8em 0;

  span {
    width: 100%;
    padding: .1em;
    display: flex;
    border: 0.035em solid #cccccc;
    background-color: #fff;
    border-radius: 0.25em;
    box-shadow: 0 0.32em 2em rgba(0, 0, 0, .1);
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    margin-bottom: 1em;

    input {
      width: 100%;
      padding: .5em;
      font-size: 1em;
      outline: none;
      border: none;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
    }
  }

  p {
    font-size: .8em;
    font-weight: 300;
  }
`;
