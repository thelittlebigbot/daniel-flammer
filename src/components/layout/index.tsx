import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { logo } from '../../assets';
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

  return (
    <Component>
      <Container>
        <Header>
          <Link to='/'>
            <Logo src={logo} alt='Logo' />
          </Link>
          <Navigation>{renderNavigationLinks}</Navigation>
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
  justify-content: space-between;

  & a:hover {
    color: ${() => style.color.black};
    background: none;
    padding: 0;
  }
`;

const Logo = styled.img`
  width: ${() => style.font.size.big};
`;

const Navigation = styled.nav`
  & a {
    color: ${() => style.color.black};
    margin-right: ${() => style.font.size.regular};

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      opacity: ${() => style.opacity};
    }

    &.active {
      color: ${() => style.color.blue};
      font-weight: ${() => style.font.weight.bold};
    }
  }
`;

const Main = styled.main`
  padding: ${() => style.font.size.big} 0;
`;
