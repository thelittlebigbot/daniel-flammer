import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { animationDuration, style } from '../../helpers';

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
