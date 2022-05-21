import React from 'react'
import Helmet from 'react-helmet';

const Meta = () => {
  return (
    <div>
      <Helmet>
        <title> Parmjit Singh </title>{' '}
        <meta
          name="description"
          content="Portfolio Site of Parmjit Singh Gill. Full Stack Developer, BSc Computer Science, 21."
        />
        <meta itemProp="name" content="Parmjit.Dev" />
        <meta
          itemProp="description"
          content="Portfolio Site of Parmjit Singh Gill. Full Stack Developer, BSc Computer Science, 21."
        />
        <meta itemProp="image" content="" />
        <meta property="og:url" content="https://parmjit.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Parmjit.dev" />
        <meta
          property="og:description"
          content="Portfolio Site of Parmjit Singh Gill. Full Stack Developer, BSc Computer Science, 21."
        />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parmjit.Dev" />
        <meta
          name="twitter:description"
          content="Portfolio Site of Parmjit Singh Gill. Full Stack Developer, BSc Computer Science, 21."
        />
        <meta name="twitter:image" content="" />
      </Helmet>
    </div>
  );
};

export default Meta;
