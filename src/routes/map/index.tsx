import React from 'react';
import styled from 'styled-components';

import { MapBackground } from './MapBackground';
import { MapHover } from './MapHover';

// import { MapHover } from './MapHover';

import { routes, style } from '../../helpers';
import { Link } from 'react-router-dom';
import { mapDraw } from './mapDraw';
import { mapTitles } from '../../assets';

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
        {/* <MindmapShape src={mapBackground} /> */}
        {/* <MindmapShape src={mapTitles} /> */}
        {/* <Wrapper> */}
        {/* <Link to='biography' id='Biography'> */}
        {/* Biography */}
        {/* </Link> */}
        {/* </Wrapper> */}
        <MapBackground draw={mapDraw} />
        <MapHover draw={mapDraw} />
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
  height: calc(100% - 4rem);
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

const MindmapShape = styled.img`
  position: fixed;
  height: 80%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${() => style.font.size.big};

  &.hover {
    opacity: 0.25;

    &:hover {
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  background: red;

  & a {
    position: absolute;
    font-size: ${() => style.font.size.large};
  }

  #Biography {
    top: 500px;
    left: 30%;
    transform: rotate(270deg);
  }
`;

// const Special = styled.img`
//   position: fixed;
//   height: 100%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   z-index: -10;

//   &#Left {
//     left: -150px;
//   }

//   &#Right {
//     right: -400px;
//   }
// `;
