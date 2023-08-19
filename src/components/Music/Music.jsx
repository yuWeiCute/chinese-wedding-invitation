import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BsFillBellFill, BsBellSlash, BsHandIndex } from 'react-icons/bs';
// eslint-disable-next-line import/no-cycle
import { LoadingPage } from '../../container/index';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const audioRef = useRef(null);
  const musicURL = 'http://music.163.com/song/media/outer/url?id=1358343231.mp3';

  const handleTogglePlay = () => {
    const audioElement = audioRef.current;
    if (!hasPlayed) {
      audioElement.play().then(() => {
        setIsPlaying(true);
        setHasPlayed(true);
      });
    } else if (isPlaying) {
      audioElement.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioElement.play();
      setIsPlaying(!isPlaying);
    }
  };

  // useEffect(() => {
  //   // 模拟点击事件来触发自动播放音频
  //   // const audioElement = audioRef.current;

  //   // 监听鼠标移动事件
  //   document.addEventListener('mousemove', handleTogglePlay);

  //   // audioElement.play().then(() => {
  //   //   setIsPlaying(true);
  //   // });
  //   // // const audioElement = audioRef.current;
  //   // // 创建 IntersectionObserver
  //   // console.log('1111');
  //   // const observer = new IntersectionObserver((entries) => {
  //   //   console.log('222');
  //   //   // const [entry] = entries;
  //   //   if (!hasPlayed) {
  //   //     console.log('333');
  //   //     audioElement.play().then(() => {
  //   //       setIsPlaying(true);
  //   //       setHasPlayed(true);
  //   //       audioRef.current.play();
  //   //       // 移除 IntersectionObserver
  //   //       observer.disconnect();
  //   //     });
  //   //   }
  //   // });

  //   // 监听元素进入视口
  //   // observer.observe(audioElement);

  //   // 组件卸载时移除事件监听
  //   return () => {
  //     document.removeEventListener('mousemove', handleTogglePlay);
  //     // observer.disconnect();
  //     // audioElement.removeEventListener('ended', () => {});
  //   };
  // }, []);

  const svgStyle = {
    color: 'var(--yellow-color)',
    width: '25px',
    height: '25px',
  };

  const handStyle = {
    position: 'absolute',
    left: '12px',
  };

  const containerStyle = {
    position: 'absolute',
    top: '12px',
    right: '10px',
    cursor: 'pointer',
    zIndex: '666',
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '50px',
    right: '50%',
    border: '1px solid white',
    borderRadius: '50%',
    lineHeight: '1.5',
    backgroundColor: 'transparent',
    padding: '1.2rem 1rem',
    color: 'white',
    cursor: 'pointer',
    zIndex: '9999',
    transform: 'translateX(50%)',
  };

  const buttonHoverStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // 半透明白色背景
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

  const iconAnimation = {
    scale: [1, 0.8], // 图片从正常大小变大到1.2倍，再回到正常大小
    opacity: [0.9, 0.5], // 图片的透明度从1变为0.5，再回到1
    transition: {
      duration: 1,
      repeat: Infinity, // 无限循环
      repeatType: 'loop', // 循环类型
    },
  };

  return (
    <div style={containerStyle} onClick={handleTogglePlay}>
      {/* <motion.img
        src={musicImg}
        alt="Music"
        style={{ width: '30px', height: '35px' }}
        animate={isPlaying ? rockingMotion : {}} // 当isPlaying为true时应用摇晃动画
      /> */}
      {hasPlayed ? null : <LoadingPage />}
      {!hasPlayed && (
      // eslint-disable-next-line react/button-has-type
      <motion.button
        style={buttonStyle}
        whileHover={buttonHoverStyle} // 悬停时应用的样式
        whileTap={buttonHoverStyle} // 点击时缩小按钮
        onClick={handleTogglePlay}
      >
        亲启
        <motion.div
          variants={iconAnimation}
          style={handStyle}
          animate={iconAnimation}
        >
          <BsHandIndex size={36} />
        </motion.div>
      </motion.button>
      )}
      {isPlaying ? (
        <motion.div
          alt="Music"
          style={svgStyle}
          animate={rockingMotion}
        >
          <BsFillBellFill style={svgStyle} />
        </motion.div>
      ) : (
        <motion.div
          alt="Music"
          style={svgStyle}
        >
          <BsBellSlash style={svgStyle} />
        </motion.div>
      )}

      <audio ref={audioRef} loop preload="auto">
        <source src={musicURL} type="audio/mpeg" />
        {/* <track kind="captions" /> */}
      </audio>
    </div>
  );
};

export default MusicPlayer;
