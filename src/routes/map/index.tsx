import React from 'react';
import styled from 'styled-components';

import { mapDraw } from './utils/mapDraw';
import { MapMenu } from './utils/MapMenu';

export const Map: React.FC = () => {
  return (
    <Component>
      <MapMenu draw={mapDraw} />
    </Component>
  );
};

const Component = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: calc(100% - 4rem);
  align-items: center;
  justify-content: center;
`;
