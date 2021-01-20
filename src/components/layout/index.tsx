import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { logo, newsShape } from '../../assets';
import { animationDuration, style } from '../../helpers';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Component>
      <Container>
        <Header>
          <motion.div
            initial={{ opacity: 0, marginLeft: -500 }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={animationDuration.long}>
            <Link to='/'>
              <Logo src={logo} alt='Logo' />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginTop: -500 }}
            animate={{ opacity: 1, marginTop: 0 }}
            transition={animationDuration.long}>
            <Image src={newsShape} alt='news' />
          </motion.div>
        </Header>

        <Main>{children}</Main>
      </Container>
    </Component>
  );
};

const Component = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  height: calc(${() => style.font.size.big} * 2);
  font-size: ${() => style.font.size.medium};
  align-items: center;
  /* justify-content: space-between; */

  & a:hover {
    color: ${() => style.color.black};
    background: none;
    padding: 0;
  }
`;

const Logo = styled.img`
  width: calc(${() => style.font.size.big} * 2);
  margin-right: 2rem;
`;

const Main = styled.main`
  padding: ${() => style.font.size.big} 0;
`;

const Image = styled.img`
  width: 10rem;
`;
