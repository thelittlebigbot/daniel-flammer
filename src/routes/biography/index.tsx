import React from 'react';

import { biographyData } from '../../data';

export const Biography: React.FC = () => {
  const renderEducaton = biographyData.education.map((i, key) => {
    return (
      <div key={key}>
        <h3>{i.school}</h3>
        <h4>{i.degree}</h4>
        <p>{i.date}</p>
      </div>
    );
  });

  const renderExhibition = biographyData.exhibition.map((i, key) => {
    return (
      <div key={key}>
        <h3>{i.name}</h3>
        <h4>{i.place}</h4>
        <p>{i.date}</p>
      </div>
    );
  });

  return (
    <div>
      <div>
        <h2>About me</h2>
        <p>{biographyData.about.first}</p>
        <p>{biographyData.about.second}</p>
      </div>
      <div>
        <h2>Education</h2>
        {renderEducaton}
      </div>
      <div>
        <h2>Exhibition</h2>
        {renderExhibition}
      </div>
    </div>
  );
};
