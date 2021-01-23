import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { logo, menu, menuMobile } from '../../assets';
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
        <Shape src={shape} alt='Shape' />
      </motion.div>

      <Burger>
        <motion.div
          initial={{ opacity: 0, marginRight: -20 }}
          animate={{ opacity: 1, marginRight: 0 }}
          transition={animationDuration.long}>
          <Link to='/'>
            <BurgerImage src={menuMobile} alt='Burger' />
          </Link>
        </motion.div>
      </Burger>
    </Component>
  );
};

const Component = styled.header`
  display: flex;
  height: calc(${() => style.font.size.big} * 2);
  font-size: ${() => style.font.size.medium};
  align-items: center;
  padding: calc(${() => style.font.size.big} * 2);

  a:hover {
    color: ${() => style.color.black};
    background: none;
    padding: 0;
  }

  @media (max-width: 1280px) {
    padding: ${() => style.font.size.big};
  }

  @media (max-width: 736px) {
    justify-content: space-between;
  }
`;

const Burger = styled.div`
  display: none;
  width: 4rem;

  @media (max-width: 736px) {
    display: block;
  }
`;

const BurgerImage = styled.img`
  width: 100%;
`;

const Logo = styled.img`
  width: calc(${() => style.font.size.big} * 2.5);
  margin-right: 2rem;
`;

const Shape = styled.img`
  height: calc(${() => style.font.size.big} * 1.75);

  @media (max-width: 736px) {
    display: none;
  }
`;
