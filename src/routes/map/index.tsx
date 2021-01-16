import React from 'react';
import styled from 'styled-components';

import { climbShape, loopShape, mindmapShape } from '../../assets';

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
        <MindmapBackground src={mindmapShape} />
        <Special id='Left' src={climbShape} alt='Climb' />
        <Special id='Right' src={loopShape} alt='Loop' />
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

const MindmapBackground = styled.img`
  position: fixed;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Special = styled.img`
  position: fixed;
  height: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -10;

  &#Left {
    left: -150px;
  }

  &#Right {
    right: -400px;
  }
`;
