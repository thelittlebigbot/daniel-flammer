import React from 'react';
import Helmet from 'react-helmet';

interface Props {
  description: string;
  keywords: string;
  title: string;
}

export const SEO: React.FC<Props> = ({ description, keywords, title }) => {
  return (
    <Helmet>
      <title>{`${title} | Daniel Flammer`}</title>
      <meta
        name='description'
        content={`${description} | Description here ...`}
      />
      <meta name='keywords' content={`${keywords} | Keywords here ...`} />
    </Helmet>
  );
};
