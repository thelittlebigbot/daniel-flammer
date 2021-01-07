import React from 'react';

import { contactData } from '../../data';

export const Contact: React.FC = () => {
  const renderNetworks = contactData.networks.map((i, key) => {
    return (
      <a key={key} href={i.link} target='_blank' rel='noreferrer'>
        {i.name}
      </a>
    );
  });

  return (
    <div>
      <h1>Contact</h1>
      <div>
        <h2>Email address</h2>
        <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
      </div>
      <div>
        <h2>Networks</h2>
        {renderNetworks}
      </div>
    </div>
  );
};
