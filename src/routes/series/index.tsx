import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { seriesShape } from '../../assets';
import { Arrow, Page, Row, SEO } from '../../components';
import { resourcesData } from '../../data';
import { style } from '../../helpers';

export const Series: React.FC = () => {
  const renderResources = resourcesData
    .sort((a, b) => b.date - a.date)
    .map((i, key) => {
      if (!i.hidden) {
        return (
          <Blank key={key}>
            <Row>
              <Link to={i.link}>See "{i.name}" series</Link>
              <Grid>
                {i.resources.map((i, key) => {
                  return (
                    <Zoom>
                      <Image key={key} src={i.path} alt={i.tag} />
                    </Zoom>
                  );
                })}
              </Grid>
            </Row>
          </Blank>
        );
      } else return null;
    });

  return (
    <Page shape={seriesShape}>
      <SEO title='Series' description='...' keywords='...' />
      {renderResources}
      <Arrow />
    </Page>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 736px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Blank = styled.div`
  @media (max-width: 736px) {
    text-align: center;
  }

  & > div > div {
    margin-top: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  padding-right: ${() => style.font.size.big};
  padding-bottom: ${() => style.font.size.big};

  @media (max-width: 1280px) {
    padding-right: ${() => style.font.size.medium};
    padding-bottom: ${() => style.font.size.medium};
  }

  @media (max-width: 736px) {
    padding: ${() => style.font.size.medium};
    padding-right: ${() => style.font.size.small};
    padding-bottom: ${() => style.font.size.medium};
  }
`;
