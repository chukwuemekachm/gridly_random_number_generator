import * as React from 'react';
import styled from 'styled-components';

export function Footer() {
  return (
    <Footer.Container>
      <p>Copyright &copy; 2019 Chima Chukwuemeka</p>
    </Footer.Container>
  );
}

Footer.Container = styled.footer`
  padding: 1.2em 0;
  background-color: rgba(255, 255, 255, .8);
  box-shadow: 0 0.32em 2em rgba(153, 153, 153, .2);

  p {
    text-align: center;
    letter-spacing: 0.07em;
  }
`;
