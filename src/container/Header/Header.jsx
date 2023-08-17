import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsChevronDown } from 'react-icons/bs';
import { images } from '../../constants';
import { Flower } from '../../components';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = ({ onChildValueChange }) => {
  const imgRef = useRef(null);
  // const [childValue, setChildValue] = useState('');

  // 在页面加载完成后获取元素位置信息
  useEffect(() => {
    if (imgRef.current) {
      const element = imgRef.current;
      const rect = element.getBoundingClientRect();
      console.log(rect);
      const distanceFromTop = rect.top;
      onChildValueChange(distanceFromTop - 230); // 调用父组件传递的回调函数，将值传递给父组件
    }
  }, []);

  const screenStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    scrollSnapAlign: 'start',
    width: '100%',
    height: '100vh',
  };

  return (
    <div id="home" key="home" data-anchor="home" style={screenStyle} className="app__flex">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          <div className="circle-cmp" style={{ zIndex: '99', width: '18%', top: '6%', left: '19%' }}>
            <Flower rotationSpeed={20} imageUrl={images.flowerRed} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '0', width: '40%', top: '5%', left: '-10%' }}>
            <Flower rotationSpeed={25} imageUrl={images.flowerYellow} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '99', width: '10%', top: '19%', left: '12%' }}>
            <Flower rotationSpeed={30} imageUrl={images.flowerWhite} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '99', width: '36%', bottom: '-5%', right: '-5%' }}>
            <Flower rotationSpeed={20} imageUrl={images.flowerRed} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '0', width: '28%', bottom: '20%', right: '-8%' }}>
            <Flower rotationSpeed={25} imageUrl={images.flowerYellow} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '99', width: '10%', bottom: '0%', right: '30%' }}>
            <Flower rotationSpeed={30} imageUrl={images.flowerWhite} />
          </div>
        </motion.div>
        <motion.img
          key={images.profile}
          ref={imgRef}
          style={{ zIndex: 0 }}
          src={images.profile}
          alt="profile_bg"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1.2, delayChildren: 0.5 }}
        />
      </motion.div>
      <BsChevronDown />
      <div className="circle-container" />
      <h2 className="head-text">陈曦 & 江宇薇</h2>
      <p className="bold-text">2023 年 9 月 16 日</p>
      <p className="p-text">今宵明朗结良缘，相约豫章庆盛年。</p>
      <p className="bold-text">静待光临</p>
    </div>
  );
};

export default Header;
