import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { MapLogo } from './MapLogo';

interface Props {
  draw: any;
}

export const MapHover: React.FC<Props> = ({ draw }) => {
  return (
    <Component
      height='641'
      viewBox='0 0 933 641'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <Link to='/'></Link>

      <MapLogo />

      {/* Biography */}
      <Link to='/biography' className='biography'>
        <Path d={draw.biography.title} className='text' />
        <Path d={draw.biography.form} className='form' />
        <Rect x='130' y='210' width='150px' height='200px' />
      </Link>

      {/* Contact */}
      <Link to='/contact' className='contact'>
        <Path d={draw.contact.title} className='text' />
        <Path d={draw.contact.form} className='form' />
        <Rect x='130' y='510' width='120px' height='60px' />
      </Link>

      {/* News */}
      <Link to='/news'>
        <Path d={draw.news.title} className='text' />
        <Path d={draw.news.form} fill='#202020' />
        <Path d={draw.news.form} className='form' />
        <Rect x='700' y='100' width='120px' height='80px' />
      </Link>

      {/* Publications */}
      <Link to='/publications' className='publications'>
        <Path d={draw.publications.title} className='text' />
        <Path d={draw.publications.form} className='form' />
        <Rect x='780' y='420' width='120px' height='150px' />
      </Link>

      {/* Series */}
      <a href='/series' className='series'>
        <Path d={draw.series.title} className='text' />
        <Path d={draw.series.form} className='form' />
        <Rect x='540' y='420' width='100px' height='40px' />
      </a>
    </Component>
  );
};

const Component = styled.svg`
  position: absolute;

  & .series {
    position: absolute;
    left: 20%;
  }

  width: 80%;
  a {
    &:hover {
      .text {
        fill: #1941ac;
        transition: 0.25s all ease-in;
      }
      .form {
        fill: #1941ac;
        opacity: 1;
        transition: 0.25s all ease-in;
        animation: shake 1s cubic-bezier(0.3, 0.1, 0.2, 0.9) both;
        @keyframes shake {
          10%,
          90% {
            transform: translate3d(-1px, 0, 0);
          }
          20%,
          80% {
            transform: translate3d(1px, 0, 0);
          }
          30%,
          50%,
          70% {
            transform: translate3d(-1px, 0, 0);
          }
          40%,
          60% {
            transform: translate3d(1px, 0, 0);
          }
        }
      }
    }
  }
`;

const Path = styled.path`
  &.text {
    fill: #202020;
  }
  &.form {
    opacity: 0;
  }
`;

const Rect = styled.rect`
  fill: black;
  opacity: 0;
`;
