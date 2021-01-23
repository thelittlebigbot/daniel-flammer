import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { SEO } from '../../components';
import { routes, style } from '../../helpers';

import { MapBackground, mapDraw, MapHover, MapThumbs } from './utils';

export const Map: React.FC = () => {
  const renderMenuLinks = routes
    .sort((a, b) => a.index - b.index)
    .map((i, key) => {
      if (i.visible) {
        return (
          <Link key={key} to={i.path}>
            {i.name}
          </Link>
        );
      } else return null;
    });

  return (
    <Component>
      <SEO title='Welcome' description='...' keywords='...' />
      <Mindmap id='Mindmap'>
        <MapBackground draw={mapDraw} />
        <MapHover draw={mapDraw} />
        <MapThumbs />
      </Mindmap>
      <Menu id='Menu'>{renderMenuLinks}</Menu>
    </Component>
  );
};

const Component = styled.div`
  @media (max-width: 736px) {
    #Mindmap {
      display: none;
    }

    #Menu {
      display: flex;
    }
  }
`;

const Mindmap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: calc(100vh - 4rem);
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  font-size: ${() => style.font.size.large};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  & a {
    color: ${() => style.color.black};
    margin-bottom: ${() => style.font.size.large};
    font-weight: ${() => style.font.weight.bold};
  }
`;
