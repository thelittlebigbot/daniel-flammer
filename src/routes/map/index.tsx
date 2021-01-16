import React from 'react';
import styled from 'styled-components';

import { mapDraw } from './utils/mapDraw';
import { MapMenu } from './utils/MapMenu';
import { MapMenuHover } from './utils/MapMenuHover';

import { climbAsset, loopAsset } from './assets';

import { resourcesData } from '../../data';
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

  const renderImages = resourcesData.map((i, key) => {
    return <Image key={key} src={i.thumb} alt={i.name} />;
  });

  return (
    <Component>
      <Mindmap id='Mindmap'>
        <MapMenu draw={mapDraw} />
        <MapMenuHover draw={mapDraw} />
      </Mindmap>
      <Special id='Left' src={climbAsset} alt='Climb' />
      <Special id='Right' src={loopAsset} alt='Loop' />
      <Absolute>{renderImages}</Absolute>
      <Menu id='Menu'>{renderMenuLinks}</Menu>
    </Component>
  );
};

const Component = styled.div`
  @media (max-width: 736px) {
    #Mindmap {
      position: relative;
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

const Absolute = styled.div`
  display: grid;
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Special = styled.img`
  position: fixed;
  height: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -10;

  &#Left {
    left: -2%;
  }

  &#Right {
    right: -16%;
  }
`;

const Image = styled.img`
  width: ${() => style.font.size.large};
  border-radius: 50%;
  border: 2px solid black;
`;
