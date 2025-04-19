import React, { useEffect, useState } from 'react';

// Use this component temporarily to debug image loading
function ImageChecker() {
  const [imageStatuses, setImageStatuses] = useState({});
  
  const imageUrls = [
    '/images/slide01.jpg',
    './images/slide01.jpg',
    '../images/slide01.jpg',
    'images/slide01.jpg',
    `${process.env.PUBLIC_URL}/images/slide01.jpg`
  ];
  
  useEffect(() => {
    const checkImages = async () => {
      const statuses = {};
      
      for (const url of imageUrls) {
        try {
          const img = new Image();
          img.src = url;
          
          const loaded = await new Promise((resolve) => {
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
          });
          
          statuses[url] = loaded ? 'Loaded' : 'Failed';
        } catch (e) {
          statuses[url] = 'Error';
        }
      }
      
      setImageStatuses(statuses);
    };
    
    checkImages();
  }, []);
  
  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      zIndex: 9999,
      background: 'rgba(0,0,0,0.7)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      maxWidth: '400px'
    }}>
      <h3>Image Path Checker</h3>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {Object.entries(imageStatuses).map(([url, status]) => (
          <li key={url} style={{ 
            margin: '5px 0',
            color: status === 'Loaded' ? '#4caf50' : '#f44336'
          }}>
            {url}: {status}
          </li>
        ))}
      </ul>
      <p style={{ marginTop: '10px', fontSize: '12px' }}>
        Add this component temporarily to your App.js to diagnose image loading issues.
        Once you've determined the correct path format, you can remove this component.
      </p>
    </div>
  );
}

export default ImageChecker;