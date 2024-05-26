import React from 'react';

export const ThankU = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ width: '40%', height: 0, paddingBottom: '100%', position: 'relative' }}>
        <iframe
          src="https://giphy.com/embed/R6gvnAxj2ISzJdbA63"
          width="100%"
          height="100%"
          style={{ position: 'absolute' }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="Thank You Gif"
        ></iframe>
      </div>
      
    </div>
  );
};
