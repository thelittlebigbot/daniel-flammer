import React from 'react';
import styled from 'styled-components';

import { style } from '../../helpers';

interface Props {
  children: React.ReactNode;
}

export const Row: React.FC<Props> = ({ children }) => {
  return <Component>{children}</Component>;
};

const Component = styled.div`
  margin: ${() => style.font.size.big};
`;
