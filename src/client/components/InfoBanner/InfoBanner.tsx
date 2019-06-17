import * as React from 'react';
import styled from 'styled-components';

const imgUrl = 'https://res.cloudinary.com/dvcaeuvee/image/upload/v1560524299/undraw_financial_data_es63.png';

export function InfoBanner() {
  return (
    <InfoBanner.Container>
      <p>
        Gridly random number genarator is a mini web platform the simulates random phone number generation for a telecommunications company.<br />
        It was built for my D1 ➣ D2 JavaScript advancement.
      </p>
      <img src={imgUrl} alt="img"></img>
    </InfoBanner.Container>
  );
}

InfoBanner.Container = styled.section`
  display: flex;
  padding: 5em;
  background: #fff;
  justify-content: space-between;

  p {
    width: 35%;
    font-size: 1.1em;
    font-weight: 300;
    text-align: center;
    letter-spacing: 0.09em;
    line-height: 1.8em;
  }

  img {
    height: 10em;
    align-self: flex-end;
  }
`;
