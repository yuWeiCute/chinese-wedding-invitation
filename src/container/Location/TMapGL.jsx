// import React from 'react';

const TMapGL = () => {
  // const QQKEY = '57UBZ-4DK66-OXRSK-EPS2T-6TC7K-IDFP2';
  if (window.TMap) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    // script.src = `https://map.qq.com/api/gljs?v=1.exp&libraries=service&key=${QQKEY}`;
    script.src = 'https://map.qq.com/api/gljs?v=1.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77';
    script.onerror = (err) => reject(err);
    script.onload = (e) => {
      resolve(e);
    };
    document.head.appendChild(script);
  });
};
export default TMapGL;
