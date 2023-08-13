import React, { useEffect, useRef } from 'react';
// import weddingVideo from './weddingVideo.mp4'; // 假设你的懒加载视频组件是这样导入的

const Video = () => {
  // const weddingVideo = require('./weddingVideo.mp4');
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const video = videoRef.current;

  //   if (video) {
  //     video.play().catch((error) => {
  //       console.error('Video playback failed:', error);
  //     });
  //   }

  //   return () => {
  //     if (video) {
  //       video.pause();
  //     }
  //   };
  // }, []);

  return (
    <video width="320" height="240" controls>
    <source src={require('./weddingVideo.mp4')} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
    // <div />
    // <video controls>
    //   <source src={weddingVideo} type="video/mp4" />
    //   Your browser does not support the video tag.
    // </video>
    // <video ref={videoRef} controls>
    //   <source src={weddingVideo} type="video/mp4" />
    //   <track kind="captions" srcLang="en" label="English" default />
    //   Your browser does not support the video tag.
    // </video>
    // <video src={require('./weddingVideo.mp4').default} controls />
  );
};

export default Video;
