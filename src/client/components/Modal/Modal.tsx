import * as React from 'react';
import styled from 'styled-components';

import { GenerateNumber } from './GenerateNumber';
import { Numbers } from './Numbers';

export interface ModalProps {
  handleToggleModal: () => void;
  handleGenerateNumbers: () => void;
  handleChange: (event: any) => void;
  handleDisplayGenerateNumbersModal: () => void;
  handleDisplayNumbersModal: () => void;
  displayNumbers: boolean;
  count: number;
  numbers: number[];
  handleNumbersSort: () => void;
  sort: string;
}

export function Modal(props: ModalProps) {
  const {
    handleToggleModal,
    handleChange,
    handleGenerateNumbers,
    count,
    numbers,
    displayNumbers,
    handleNumbersSort,
    sort,
  } = props;

  return (
    <Modal.Container>
      <Modal.Inner>
        <Modal.Header>
          <h4>GRIDLY</h4>
          <span onClick={handleToggleModal}>&times;</span>
        </Modal.Header>
        <Modal.Body>
          {
            displayNumbers
              ? <Numbers
                numbers={numbers}
                handleNumbersSort={handleNumbersSort}
                sort={sort}
              />
              : <GenerateNumber
                handleChange={handleChange}
                handleGenerateNumbers={handleGenerateNumbers}
                count={count}
              />
          }
        </Modal.Body>
      </Modal.Inner>
    </Modal.Container>
  );
}

Modal.Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, .33);
`;

Modal.Inner = styled.div`
  margin: 10em auto;
  background-color: #f9f9f9;
  width: 43%;
  padding: .1em 1em;
  box-shadow: 0 0.32em 2em rgba(0, 0, 0, .3);
`;

Modal.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, .2);

  span {
    font-size: 2em;
    padding: .08em .4em;
    
    :hover {
      cursor: pointer;
      border-radius: 5em;
      background-color: rgba(0, 0, 0, .08);
    }
  }
`;

Modal.Body = styled.div``;
