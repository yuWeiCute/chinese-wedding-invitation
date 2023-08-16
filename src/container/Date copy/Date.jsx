/* eslint-disable no-undef */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
// import Calendar from 'react-calendar';

// import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Date.scss';

const Date = () => {
  const [experiences, setExperiences] = useState([]);
  const [location, setDate] = useState([]);
  // const [value, onChange] = useState(new Date());

  // const dayStart= (month, year) => {
  //   const tmpDate = new Date(year, month, 1);
  //   return (tmpDate.getDay());
  // }

  // const daysMonth= (month, year) => {
  //   const tmp = year % 4;
  //   if (tmp === 0) {
  //     return (month_olympic[month]);
  //   } else {
  //     return (month_normal[month]);
  //   }
  // }

  const generateListItems = (totalDay, firstDay, my_day) => {
    // const totalDay = 31; // 获取该月总天数
    // const firstDay = 5; // 获取该月第一天是星期几
    const items = [];
    for (let i = 0; i < firstDay; i += 1) {
      items.push(<li key={i}> </li>); // 为起始日之前的日期创建空白节点
    }
    for (let k = 1; k <= totalDay; k += 1) {
      // let myclass = '';
      // if ((i < my_day)) {
      //   myclass = 'lightgrey'; // 当该日期在今天之前时，以浅灰色字体显示
      // } else if (i === my_day) {
      //   myclass = 'green greenbox'; // 当天日期以绿色背景突出显示
      // } else {
      //   myclass = 'darkgrey'; // 当该日期在今天之后时，以深灰字体显示
      // }
      if (k === my_day) {
        items.push(<li className="greenbox" key={`${k}a`}><p>{k}</p></li>);
      } else {
        items.push(<li className="lightgrey" key={`${k}a`}>{k}</li>);
      }
      // items.push(<li className={myclass} key={i}>{i}</li>); // 创建日期节点
    }
    // for (let i = start; i <= end; i += 1) {
    //   items.push(<li key={i}>{i}</li>);
    // }
    return items;
  };

  // const generateListItems = (start, end) => {
  //   // const totalDay = 31; // 获取该月总天数
  //   const firstDay = 5; // 获取该月第一天是星期几
  //   const items = [];
  //       for (let i = 0; i < firstDay; i += 1) {
  //     items.push(<li> </li>); // 为起始日之前的日期创建空白节点
  //   }
  //   for (let i = start; i <= end; i += 1) {
  //     items.push(<li key={i}>{i}</li>);
  //   }
  //   return items;
  // };

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const dateQuery = '*[_type == "location"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(dateQuery).then((data) => {
      setDate(data);
    });
  }, []);

  return (
    <div className="app__date">
      {/* <h2 className="head-text">Date & Experiences</h2> */}
      <div className="calendar">
        <div className="title">
          <h1 className="green" id="calendar-title">Month</h1>
          <h2 className="green small" id="calendar-year">Year</h2>
          {/* <a href="" id="prev">Prev Month</a>
          <a href="" id="next">Next Month</a> */}
        </div>
        <div className="body">
          <div className="lightgrey body-list">
            <ul>
              <li>MON</li>
              <li>TUE</li>
              <li>WED</li>
              <li>THU</li>
              <li>FRI</li>
              <li>SAT</li>
              <li>SUN</li>
            </ul>
            <ul>{generateListItems(31, 5, 19)}</ul>
          </div>
          <div className="darkgrey body-list">
            <ul id="days" />
          </div>
        </div>
      </div>
      {/* <Calendar onChange={onChange} value={value} /> */}
      <div className="app__date-container">
        {/* <motion.div className="app__date-list">
          {location.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__date-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div> */}
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
