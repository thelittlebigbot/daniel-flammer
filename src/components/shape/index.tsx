import React from 'react';
import styled from 'styled-components';
import { style } from '../../helpers';

import {
  biographyShape,
  contactShape,
  newsShape,
  publicationsShape,
  seriesShape,
  slugShape,
} from '../../assets';

interface Props {
  route: 'biography' | 'contact' | 'news' | 'publications' | 'series' | 'slug';
}

export const Shape: React.FC<Props> = ({ route }) => {
  if (route === 'biography') {
    return <Component src={biographyShape} alt='Biography shape' />;
  } else if (route === 'contact') {
    return <Component src={contactShape} alt='Contact shape' />;
  } else if (route === 'news') {
    return <Component src={newsShape} alt='News shape' />;
  } else if (route === 'publications') {
    return <Component src={publicationsShape} alt='Publications shape' />;
  } else if (route === 'series') {
    return <Component src={seriesShape} alt='Series shape' />;
  } else if (route === 'slug') {
    return <Component src={slugShape} alt='Slug shape' />;
  } else return null;
};

const Component = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  z-index: -10;
  opacity: calc(${() => style.opacity} / 5);
`;
