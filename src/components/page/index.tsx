import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export const Page: React.FC<Props> = ({ children }) => {
  return <Component>{children}</Component>;
};

const Component = styled.div`
  width: 100%;
`;
