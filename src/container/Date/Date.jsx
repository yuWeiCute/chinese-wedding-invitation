import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { images } from '../../constants';
import { Flower } from '../../components';
import { AppWrap, MotionWrap } from '../../wrapper';
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
  const time = [
    {
      works: [
        {
          desc: 'Tongji University-politecnico di Torino-universita di Firenze-universita di Pavia International Joint Design Workshop',
          name: '迎宾时间',
        },
      ],
      year: '11.08',
    },
    {
      works: [
        {
          desc: 'Tongji University-politecnico di Torino-universita di Firenze-universita di Pavia International Joint Design Workshop',
          name: '婚礼仪式',
        },
      ],
      year: '11.36',
    },
    {
      works: [
        {
          desc: 'Tongji University-politecnico di Torino-universita di Firenze-universita di Pavia International Joint Design Workshop',
          name: '酒宴开席',
        },
      ],
      year: '12.08',
    },

  ];
  const generateListItems = (totalDay, firstDay, myDay) => {
    const items = [];
    for (let i = 0; i < firstDay; i += 1) {
      items.push(<li key={i}> </li>); // 为起始日之前的日期创建空白节点
    }
    for (let k = 1; k <= totalDay; k += 1) {
      if (k === myDay) {
        items.push(<li key={`${k}a`}><span className="greenbox"><p>{k}</p></span></li>);
      } else {
        items.push(<li className="lightgrey" key={`${k}a`}>{k}</li>);
      }
    }
    return items;
  };

  return (
    <>
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
            <Flower rotationSpeed={20} imageUrl={images.flowerRed} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '0', width: '35%', bottom: '5%', left: '-14%' }}>
            <Flower rotationSpeed={25} imageUrl={images.flowerYellow} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '99', width: '10%', top: '3%', left: '-8%' }}>
            <Flower rotationSpeed={30} imageUrl={images.flowerWhite} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '99', width: '32%', bottom: '-17%', right: '-12%' }}>
            <Flower rotationSpeed={20} imageUrl={images.flowerRed} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '0', width: '28%', bottom: '-14%', right: '7%' }}>
            <Flower rotationSpeed={25} imageUrl={images.flowerYellow} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '99', width: '10%', bottom: '20%', right: '-7%' }}>
            <Flower rotationSpeed={30} imageUrl={images.flowerWhite} />
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
          {time.map((experience) => (
            <motion.div
              className="app__date-exp-item"
              key={experience.year}
            >
              <div className="app__date-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__date-exp-works">
                {experience.works.map((activity) => (
                  <div key={`${activity.name}aa`}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__date-exp-time"
                      data-tip
                      data-for={activity.name}
                      key={activity.name}
                    >
                      <h4 className="bold-text">{activity.name}</h4>
                    </motion.div>
                    <ReactTooltip
                      id={activity.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="location-tooltip"
                    >
                      {activity.desc}
                    </ReactTooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Date),
  'date',
);
