import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { logo, menu } from '../../assets';
import { animationDuration, style } from '../../helpers';

interface Props {
  shape: string;
}

export const Header: React.FC<Props> = ({ shape }) => {
  return (
    <Component>
      <motion.div
        initial={{ opacity: 0, marginLeft: -500 }}
        animate={{ opacity: 1, marginLeft: 0 }}
        transition={animationDuration.long}>
        <Link to='/'>
          <Logo
            src={logo}
            alt='Logo'
            onMouseEnter={(e) => (e.currentTarget.src = menu)}
            onMouseOut={(e) => (e.currentTarget.src = logo)}
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, marginTop: -500 }}
        animate={{ opacity: 1, marginTop: 0 }}
        transition={animationDuration.long}>
        <Image src={shape} alt='Shape' />
      </motion.div>
    </Component>
  );
};

const Component = styled.header`
  display: flex;
  height: calc(${() => style.font.size.big} * 2);
  font-size: ${() => style.font.size.medium};
  align-items: center;

  padding: calc(${() => style.font.size.big} * 2);

  & a:hover {
    color: ${() => style.color.black};
    background: none;
    padding: 0;
  }
`;

const Logo = styled.img`
  width: calc(${() => style.font.size.big} * 3);
  margin-right: 2rem;
`;

const Image = styled.img`
  height: 8rem;
`;
