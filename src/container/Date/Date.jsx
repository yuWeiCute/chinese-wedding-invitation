import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Date.scss';

const Date = () => {
  const [experiences, setExperiences] = useState([]);
  const [location, setDate] = useState([]);

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
    <>
      <h2 className="head-text">Date & Experiences</h2>

      <div className="app__date-container">
        <motion.div className="app__date-list">
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
        </motion.div>
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
    </>
  );
};

export default AppWrap(
  MotionWrap(Date, 'app__date'),
  'location',
  'app__whitebg',
);
