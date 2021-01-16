import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  src: any;
}

export const MindmapHover: React.FC<Props> = ({ src }) => {
  return (
    <Component
      width='933'
      height='641'
      viewBox='0 0 933 641'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <Link to='/biography'>
        <Path d={src.biography} />
        <Rect x='130' y='210' width='150px' height='200px' />
      </Link>
      <Link to='/contact'>
        <Path d={src.contact} />
        <Rect />
      </Link>
      <Link to='/news'>
        <Path d={src.news} />
        <Rect />
      </Link>
      <Link to='/publications'>
        <Path d={src.publications} />
        <Rect />
      </Link>
      <Link to='/series'>
        <Path d={src.series} />
        <Rect />
      </Link>
    </Component>
  );
};

const Component = styled.svg`
  position: fixed;
  /* height: 80%; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Path = styled.path`
  fill: red;
`;
const Rect = styled.rect`
  fill: green;
`;
