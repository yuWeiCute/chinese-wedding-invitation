import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

// import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const getChineseText = (item) => {
    switch (item) {
      case 'home':
        return '主页';
      case 'about':
        return '关于';
      case 'date':
        return '时间';
      case 'location':
        return '地点';
      case 'contact':
        return '联系';
      default:
        return item;
    }
  };

  return (
    <nav>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
        <motion.div
          whileInView={{ x: [300, 0] }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <HiX onClick={() => setToggle(false)} />
          <ul>
            {['home', 'about', 'date', 'location', 'contact'].map((item) => (
              <li key={item}>
                <a key={`${item}aa`} href={`#${item}`} onClick={() => setToggle(false)}>
                  {getChineseText(item)}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
