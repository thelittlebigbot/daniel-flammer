import React from 'react';
import styled from 'styled-components';

import { style } from '../../helpers';

interface Props {
  children: string | number;
  type?: 'text' | 'title';
  variant?: 'small' | 'regular' | 'medium' | 'large' | 'big';
}

export const Typography: React.FC<Props> = ({ children, type, variant }) => {
  if (type === 'text') {
    if (variant === 'small') {
      return <TextSmall>{children}</TextSmall>;
    } else return <Text>{children}</Text>;
  }

  if (type === 'title') {
    if (variant === 'small') {
      return <TitleSmall>{children}</TitleSmall>;
    } else if (variant === 'regular') {
      return <TitleRegular>{children}</TitleRegular>;
    } else if (variant === 'medium') {
      return <TitleMedium>{children}</TitleMedium>;
    } else if (variant === 'large') {
      return <TitleLarge>{children}</TitleLarge>;
    } else if (variant === 'big') {
      return <TitleBig>{children}</TitleBig>;
    } else return <TitleBig>{children}</TitleBig>;
  }

  return <Text>{children}</Text>;
};

const Text = styled.p`
  font-size: ${() => style.font.size.regular};
  font-weight: ${() => style.font.weight.regular};
`;

const TextSmall = styled.p`
  font-size: ${() => style.font.size.small};
  font-weight: ${() => style.font.weight.light};
`;

const TitleSmall = styled.h5`
  font-size: ${() => style.font.size.small};
  margin-bottom: ${() => style.font.size.small};
  font-weight: ${() => style.font.weight.medium};
`;

const TitleRegular = styled.h4`
  font-size: ${() => style.font.size.regular};
  margin-bottom: ${() => style.font.size.regular};
  font-weight: ${() => style.font.weight.semiBold};
`;

const TitleMedium = styled.h3`
  font-size: ${() => style.font.size.medium};
  margin-bottom: ${() => style.font.size.medium};
  font-weight: ${() => style.font.weight.bold};
`;

const TitleLarge = styled.h2`
  font-size: ${() => style.font.size.large};
  margin-bottom: ${() => style.font.size.large};
  font-weight: ${() => style.font.weight.extraBold};
`;

const TitleBig = styled.h1`
  font-size: ${() => style.font.size.big};
  margin-bottom: ${() => style.font.size.big};
  font-weight: ${() => style.font.weight.black};
  text-shadow: ${() => style.shadow};
`;