import React from 'react';
import styled from 'styled-components';

import { Header } from '../../components';
import { style } from '../../helpers';

interface Props {
  children: React.ReactNode;
  shape: string;
}

export const Page: React.FC<Props> = ({ children, shape }) => {
  return (
    <Component>
      <Header shape={shape} />
      <Main>{children}</Main>
    </Component>
  );
};

const Component = styled.div`
  width: 100%;
`;

const Main = styled.main`
  padding: calc(${() => style.font.size.big} * 2);
`;
