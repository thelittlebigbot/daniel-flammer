import React from 'react';
import styled from 'styled-components';

import { mapDraw } from './utils/mapDraw';
import { MapMenu } from './utils/MapMenu';
import { MapMenuHover } from './utils/MapMenuHover';

import { routes, style } from '../../helpers';
import { Link } from 'react-router-dom';

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
      <Mindmap id='Mindmap'>
        <MapMenu draw={mapDraw} />
        <MapMenuHover draw={mapDraw} />
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
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      height: 100vh;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: ${() => style.font.size.large};
      background: ${() => style.color.white};
      overflow: hidden;

      & a {
        color: ${() => style.color.black};
        margin-bottom: ${() => style.font.size.large};
        font-weight: ${() => style.font.weight.bold};
      }
    }
  }
`;

const Mindmap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: calc(100% - 4rem);
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  display: none;
`;
