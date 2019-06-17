import * as React from 'react';
import styled from 'styled-components';

import { Button } from '../Button/Button';

export interface HeroBannerProps {
  handleDisplayGenerateNumbersModal: () => void;
}

export function HeroBanner({ handleDisplayGenerateNumbersModal }: HeroBannerProps) {
  return (
    <HeroBanner.Container>
      <h4>GRIDLY RANDOM PHONE NUMBER GENERATOR</h4>
      <h2>Generating phone numbers has never been as easy as this.<br />Generate your desired numbers today.</h2>
        <HeroBanner.Inner className="generate-number-form">
          <Button handleClick={handleDisplayGenerateNumbersModal}>Generate Numbers</Button>
        </HeroBanner.Inner>
    </HeroBanner.Container>
  );
}

HeroBanner.Container = styled.section`
  margin: 10em 0;
  padding: 0 3em;

  h2 {
    font-size: 2em;
    font-weight: 300;
    text-align: center;
    line-height: 1.5em;
    margin: 0;
  }

  h4 {
    font-weight: 400;
    text-align: center;
    color: #f22f46;
    margin-bottom: 1.8em;
    letter-spacing: .2em;
  }
`;

HeroBanner.Inner = styled.div`
  width: 30%;
  margin: 1.8em auto;
`;
