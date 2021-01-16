import React from 'react';
import styled from 'styled-components';
import { style } from '../../helpers';

import {
  biographyWallpaper,
  contactWallpaper,
  newsWallpaper,
  publicationsWallpaper,
  seriesWallpaper,
  slugWallpaper,
} from './assets';

interface Props {
  route: 'biography' | 'contact' | 'news' | 'publications' | 'series' | 'slug';
}

export const Wallpaper: React.FC<Props> = ({ route }) => {
  if (route === 'biography') {
    return <Component src={biographyWallpaper} alt='Biography wallpaper' />;
  } else if (route === 'contact') {
    return <Component src={contactWallpaper} alt='Contact wallpaper' />;
  } else if (route === 'news') {
    return <Component src={newsWallpaper} alt='News wallpaper' />;
  } else if (route === 'publications') {
    return (
      <Component src={publicationsWallpaper} alt='Publications wallpaper' />
    );
  } else if (route === 'series') {
    return <Component src={seriesWallpaper} alt='Series wallpaper' />;
  } else if (route === 'slug') {
    return <Component src={slugWallpaper} alt='Slug wallpaper' />;
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
