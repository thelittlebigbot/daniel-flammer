import React from 'react';
import styled from 'styled-components';

import { publicationsShape } from '../../assets';
import { Arrow, Page, Typography, SEO, Row } from '../../components';
import { publicationsData } from '../../data';
import { style } from '../../helpers';

export const Publications: React.FC = () => {
  const renderPublications = publicationsData
    .sort((a: any, b: any) => b.date - a.date)
    .map((i, key) => {
      const PDF = () => {
        if (i.pdf) {
          return (
            <form method='get' action={i.pdf}>
              <Button type='submit'>Download PDF</Button>
            </form>
          );
        } else return null;
      };

      return (
        <Component key={key}>
          <Row>
            <Image src={i.thumb} alt={i.name} />
            <Space />
            <Typography type='text' variant='italic'>
              {i.date}
            </Typography>
            <Typography type='text' variant='bold'>
              {i.name}
            </Typography>
            <Typography type='text' variant='italic'>
              {i.subtitle}
            </Typography>
            <Typography type='text' variant='regular'>
              {i.editor}
            </Typography>
            <PDF />
          </Row>
        </Component>
      );
    });

  return (
    <Page shape={publicationsShape}>
      <SEO title='Publications' description='...' keywords='...' />
      {renderPublications}
      <Arrow />
    </Page>
  );
};

const Component = styled.div`
  width: 50%;
`;

const Image = styled.img`
  width: 100%;
`;

const Space = styled.div`
  height: 2rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  color: ${() => style.color.blue};
  background: none;
  padding: 0.15rem 0;
  border: none;

  &:hover {
    background: ${() => style.color.blue};
    color: ${() => style.color.white};
    padding: 0.15rem 0.5rem;
  }
`;
