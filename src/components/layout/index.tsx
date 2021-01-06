import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { routes, style } from '../../helpers';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const renderNavigationLinks = routes
    .sort((a, b) => a.index - b.index)
    .map((i, key) => {
      if (i.visible) {
        return (
          <NavLink key={key} exact to={i.path} activeClassName='active'>
            {i.name}
          </NavLink>
        );
      } else return null;
    });

  const renderTitle = routes.map((i, key) => {
    if (i.path === window.location.pathname && i.name !== 'Map') {
      return <Title key={key}>{i.name}</Title>;
    } else return null;
  });

  return (
    <Component>
      <Container>
        <Header>
          <Logo>[LOGO]</Logo>
          <Navigation>{renderNavigationLinks}</Navigation>
        </Header>
        <Main>
          {renderTitle}
          {children}
        </Main>
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
  height: ${() => style.font.size.big};
  font-size: ${() => style.font.size.medium};
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.p`
  color: red;
  font-weight: bold;
`;

const Navigation = styled.nav`
  & a {
    color: ${() => style.color.black};
    margin-right: ${() => style.font.size.regular};

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Main = styled.main`
  margin: ${() => style.font.size.big} 0;
`;

const Title = styled.h1`
  font-size: ${() => style.font.size.big};
  margin-bottom: ${() => style.font.size.big};
`;
