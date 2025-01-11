import React from 'react';
import { Helmet } from 'react-helmet';

function MyComponent() {
  return (
    <div>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
      </Helmet>
      {/* Your component code */}
    </div>
  );
}

export default MyComponent;