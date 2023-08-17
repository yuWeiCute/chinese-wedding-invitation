// import React, { useState } from 'react';
import React from 'react';
// import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const { username, email, message } = formData;

  // const handleSubmit = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = async () => {
    const apiUrl = 'https://zueyzf9246.execute-api.ap-southeast-1.amazonaws.com/default/visitorRegistry'; // Replace with your API Gateway URL

    const requestData = {
      tableName: 'weddingVisitors', // do not change the DynamoDB table name
      visitorId: '习近平1999001231113', // key for each visitor, this must be unique and string, you can use name + time stamp, eg, 习近平166771236
      visitorInfo: {
        name: '习近平',
        email: '123456@163.com',
        phone: '123456789', // this part is schemaless, you can put any thing you like
      },
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const responseBody = await response.json();
      console.log('find me');
      console.log(JSON.stringify(responseBody, null, 2));
    } catch (error) {
      console.log(error);
    }
  };
  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: 'contact',
  //     name: formData.username,
  //     email: formData.email,
  //     message: formData.message,
  //   };

  //   client.create(contact)
  //     .then(() => {
  //       setLoading(false);
  //       setIsFormSubmitted(true);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="app__footer">
      <h2 className="head-text">Take a coffee & chat with me</h2>
      {/* {!isFormSubmitted ? ( */}
      <div className="app__footer-form app__flex">
        {/* <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
              // value={message}
            name="message"
          />
        </div> */}
        {/* <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button> */}
        <button type="button" className="p-text" onClick={handleSubmit}>Send Message</button>
      </div>
      {/* ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )} */}
    </div>
  );
};

// export default Footer;
export default AppWrap(
  MotionWrap(Footer),
  'contact',
);
