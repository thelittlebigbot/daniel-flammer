import React from 'react';

import { resourcesData } from '../../data';

export const Artboard: React.FC = () => {
  const renderResources = resourcesData
    .sort((a, b) => b.date - a.date)
    .map((i, key) => {
      return (
        <div>
          <p>{i.date}</p>
          <div>
            {i.resources.map((i, key) => {
              return <img src={i.path} alt={i.tag} />;
            })}
          </div>
        </div>
      );
    });

  return (
    <div>
      <h1>Artboard</h1>
      {renderResources}
    </div>
  );
};
