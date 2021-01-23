import React from 'react';
import styled from 'styled-components';
import { contactShape } from '../../assets';

import { Arrow, Page, Row, Typography, Shape } from '../../components';
import { contactData } from '../../data';
import { style } from '../../helpers';

export const Contact: React.FC = () => {
  const renderNetworks = contactData.networks.map((i, key) => {
    return (
      <Link key={key} href={i.link} target='_blank' rel='noreferrer'>
        {i.name}
      </Link>
    );
  });

  return (
    <Page shape={contactShape}>
      <Typography type='title' variant='big'>
        Contact
      </Typography>
      <Row>
        <Typography type='title' variant='large'>
          Email address
        </Typography>
        <Link href={`mailto:${contactData.email}`}>{contactData.email}</Link>
      </Row>
      <Row>
        <Typography type='title' variant='large'>
          Networks
        </Typography>
        {renderNetworks}
      </Row>
      <Arrow />
      <Shape route='contact' />
    </Page>
  );
};

const Link = styled.a`
  margin-right: ${() => style.font.size.medium};
`;
