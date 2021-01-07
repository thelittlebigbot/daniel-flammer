import React from 'react';
import { Link } from 'react-router-dom';

import { resourcesData } from '../../data';

export const Series: React.FC = () => {
  const renderResources = resourcesData.map((i, key) => {
    return (
      <Link to={i.link}>
        <div>
          <img src={i.thumb} alt={i.name} />
          <h2>{i.name}</h2>
          <p>{i.date}</p>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1>Series</h1>
      {renderResources}
    </div>
  );
};
