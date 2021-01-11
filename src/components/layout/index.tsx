import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import {
  logo,
  artboard,
  biography,
  contact,
  publications,
  series,
} from './assets';
import { animationDuration, routes, style } from '../../helpers';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const renderNavigationLinks = routes
    .sort((a, b) => a.index - b.index)
    .map((i, key) => {
      if (i.visible) {
        let image;

        if (i.name === 'Artboard') {
          image = artboard;
        } else if (i.name === 'Biography') {
          image = biography;
        } else if (i.name === 'Contact') {
          image = contact;
        } else if (i.name === 'Publications') {
          image = publications;
        } else if (i.name === 'Series') {
          image = series;
        } else return null;

        return (
          <NavLink
            key={key}
            exact
            to={i.path}
            id={i.name}
            activeClassName='active'>
            <motion.img src={image} alt={i.name} />
            {i.name}
          </NavLink>
        );
      } else return null;
    });

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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={animationDuration.short}>
            <Navigation>{renderNavigationLinks}</Navigation>
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
  /* width: calc(${() => style.font.size.big} * 2); */
  width: ${() => style.font.size.big};
`;

const Navigation = styled.nav`
  & a {
    color: ${() => style.color.black};
    position: relative;
    align-items: center;
    justify-content: center;
    margin-right: ${() => style.font.size.regular};

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      opacity: ${() => style.opacity};
    }

    &.active {
      & img {
        opacity: 0.75;
        display: inherit;
        transition: ${() => style.transition};
        height: calc(${() => style.font.size.big} + 1rem);
      }
    }
  }

  & img {
    opacity: 0;
    position: absolute;
    height: ${() => style.font.size.small};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -10;
  }
`;

const Main = styled.main`
  padding: ${() => style.font.size.big} 0;
`;
