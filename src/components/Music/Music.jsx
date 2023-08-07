import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import musicImg from './music.png';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const musicURL = 'http://music.163.com/song/media/outer/url?id=1358343231.mp3';

  const handleTogglePlay = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // 模拟点击事件来触发自动播放音频
    const audioElement = audioRef.current;
    audioElement.play().then(() => {
      setIsPlaying(true);
    });

    // 当音频播放结束时，设置isPlaying为false
    audioElement.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    // 组件卸载时移除事件监听
    return () => {
      audioElement.removeEventListener('ended', () => {});
    };
  }, []);

  const containerStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    cursor: 'pointer',
    zIndex: '8888',
  };

  // 摇晃动画的属性
  const rockingMotion = {
    rotate: [10, -10, 10], // 绕图片顶端中部旋转10°
    transition: {
      duration: 0.5,
      repeat: Infinity, // 无限循环播放动画
      repeatType: 'reverse', // 每次循环反转动画方向
    },
  };

  return (
    <div style={containerStyle} onClick={handleTogglePlay}>
      <motion.img
        src={musicImg}
        alt="Music"
        style={{ width: '30px', height: '35px' }}
        animate={isPlaying ? rockingMotion : {}} // 当isPlaying为true时应用摇晃动画
      />
      <audio ref={audioRef} loop>
        <source src={musicURL} type="audio/mpeg" />
        <track kind="captions" />
      </audio>
    </div>
  );
};

export default MusicPlayer;
