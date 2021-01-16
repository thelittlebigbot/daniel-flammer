import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { logo } from './assets';
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={animationDuration.long}>
            <Link to='/'>
              <Logo src={logo} alt='Logo' />
            </Link>
          </motion.div>
        </Header>
        <motion.div
          initial={{ marginLeft: -250 }}
          animate={{ marginLeft: 0 }}
          transition={animationDuration.normal}>
          <Main>{children}</Main>
        </motion.div>
      </Container>
    </Component>
  );
};

<motion.div transition={{ duration: 0.5 }} />;

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
  justify-content: space-between;

  & a:hover {
    color: ${() => style.color.black};
    background: none;
    padding: 0;
  }
`;

const Logo = styled.img`
  width: calc(${() => style.font.size.big} * 2);
`;

const Main = styled.main`
  padding: ${() => style.font.size.big} 0;
`;
