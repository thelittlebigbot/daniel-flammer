import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { animationDuration, style } from '../../helpers';

interface Props {
  children: string | number;
  type?: 'text' | 'title';
  variant?:
    | 'small'
    | 'regular'
    | 'medium'
    | 'large'
    | 'big'
    | 'italic'
    | 'bold';
}

export const Typography: React.FC<Props> = ({ children, type, variant }) => {
  if (type === 'text') {
    if (variant === 'small') {
      return <TextSmall>{children}</TextSmall>;
    } else if (variant === 'bold') {
      return <TextBold>{children}</TextBold>;
    } else if (variant === 'italic') {
      return <TextItalic>{children}</TextItalic>;
    } else return <Text>{children}</Text>;
  }

  if (type === 'title') {
    if (variant === 'small') {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={animationDuration.long}>
          <TitleSmall>{children}</TitleSmall>
        </motion.div>
      );
    } else if (variant === 'regular') {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={animationDuration.long}>
          <TitleRegular>{children}</TitleRegular>
        </motion.div>
      );
    } else if (variant === 'medium') {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={animationDuration.long}>
          <TitleMedium>{children}</TitleMedium>
        </motion.div>
      );
    } else if (variant === 'large') {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={animationDuration.long}>
          <TitleLarge>{children}</TitleLarge>
        </motion.div>
      );
    } else if (variant === 'big') {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={animationDuration.slow}>
          <TitleBig>{children}</TitleBig>
        </motion.div>
      );
    } else
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={animationDuration.slow}>
          <TitleBig>{children}</TitleBig>
        </motion.div>
      );
  }

  return <Text>{children}</Text>;
};

const Text = styled.p`
  font-family: ${() => style.font.regular};
  font-size: ${() => style.font.size.regular};
`;

const TextSmall = styled.p`
  font-family: ${() => style.font.light};
  font-size: ${() => style.font.size.small};
`;

const TextBold = styled.p`
  font-family: ${() => style.font.bold};
  font-size: ${() => style.font.size.regular};
`;

const TextItalic = styled.p`
  font-family: ${() => style.font.italic};
  font-size: ${() => style.font.size.regular};
`;

const TitleSmall = styled.h5`
  font-family: ${() => style.font.medium};
  font-size: ${() => style.font.size.small};
  margin-bottom: ${() => style.font.size.small};
`;

const TitleRegular = styled.h4`
  font-family: ${() => style.font.bold};
  font-size: ${() => style.font.size.regular};
  margin-bottom: ${() => style.font.size.regular};
`;

const TitleMedium = styled.h3`
  font-family: ${() => style.font.bold};
  font-size: ${() => style.font.size.medium};
  margin-bottom: ${() => style.font.size.medium};
`;

const TitleLarge = styled.h2`
  font-family: ${() => style.font.heavy};
  font-size: ${() => style.font.size.large};
  margin-bottom: ${() => style.font.size.large};
`;

const TitleBig = styled.h1`
  font-family: ${() => style.font.extraBold};
  font-size: ${() => style.font.size.big};
  margin-bottom: ${() => style.font.size.medium};
  text-shadow: ${() => style.shadow};
`;
