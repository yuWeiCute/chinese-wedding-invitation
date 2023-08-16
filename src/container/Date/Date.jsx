/* eslint-disable no-undef */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
// import Calendar from 'react-calendar';
import Flower from '../../components/Flowers/Flower';
import flowerRed from '../../components/Flowers/flowerRed.png';
import flowerWhite from '../../components/Flowers/flowerWhite.png';
import flowerYellow from '../../components/Flowers/flowerYellow.png';

// import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Date.scss';

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

const Date = () => {
  const [experiences, setExperiences] = useState([]);
  // const [location, setDate] = useState([]);

  const generateListItems = (totalDay, firstDay, my_day) => {
    const items = [];
    for (let i = 0; i < firstDay; i += 1) {
      items.push(<li key={i}> </li>); // 为起始日之前的日期创建空白节点
    }
    for (let k = 1; k <= totalDay; k += 1) {
      if (k === my_day) {
        items.push(<li><p className="greenbox" key={`${k}a`}><p>{k}</p></p></li>);
      } else {
        items.push(<li className="lightgrey" key={`${k}a`}>{k}</li>);
      }
    }
    return items;
  };

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const dateQuery = '*[_type == "location"]';

    client.fetch(query).then((data) => {
      console.log(data);
      setExperiences(data);
    });

    client.fetch(dateQuery).then((data) => {
      console.log(data);
      setDate(data);
    });
  }, []);

  return (
    <div className="app__date">
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
          <div className="circle-cmp" style={{ zIndex: '99', width: '18%', top: '-9%', left: '-4%' }}>
            <Flower rotationSpeed={20} imageUrl={flowerRed} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '0', width: '35%', bottom: '5%', left: '-14%' }}>
            <Flower rotationSpeed={25} imageUrl={flowerYellow} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '99', width: '10%', top: '3%', left: '-8%' }}>
            <Flower rotationSpeed={30} imageUrl={flowerWhite} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '99', width: '32%', bottom: '-17%', right: '-12%' }}>
            <Flower rotationSpeed={20} imageUrl={flowerRed} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '0', width: '28%', bottom: '-14%', right: '7%' }}>
            <Flower rotationSpeed={25} imageUrl={flowerYellow} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '99', width: '10%', bottom: '20%', right: '-7%' }}>
            <Flower rotationSpeed={30} imageUrl={flowerWhite} />
          </div>
        </motion.div>
        <motion.div
          className="calendar"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1.2, delayChildren: 0.5 }}
        >
          <div className="calendar__div" style={{ zIndex: 9, width: '100%', height: '100%' }}>
            <div className="title">

              <span className="calendar-year">2023</span>
              <span>
                <span className="calendar-title">9 </span>
                <span className="calendar-year"> 月</span>
              </span>
            </div>
            <div>
              <div className="lightgrey body-list">
                <ul className="redback">
                  <li>一</li>
                  <li>二</li>
                  <li>三</li>
                  <li>四</li>
                  <li>五</li>
                  <li>六</li>
                  <li>七</li>
                </ul>
                <ul>{generateListItems(31, 5, 19)}</ul>
              </div>
              <div className="darkgrey body-list">
                <ul id="days" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* <h2 className="head-text">Date & Experiences</h2> */}

      {/* <Calendar onChange={onChange} value={value} /> */}
      <div className="app__date-container">
        <div className="app__date-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__date-exp-item"
              key={experience.year}
            >
              <div className="app__date-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__date-exp-works">
                {experience.works.map((time) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__date-exp-time"
                      data-tip
                      data-for={time.name}
                      key={time.name}
                    >
                      <h4 className="bold-text">{time.name}</h4>
                      <p className="p-text">{time.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={time.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="location-tooltip"
                    >
                      {time.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// export default DateAppWrap(
//   MotionWrap(Date, 'app__date'),
//   'location',
//   'app__whitebg',
// );
export default Date;
