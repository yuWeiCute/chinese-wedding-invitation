import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    num: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => { // 使用 async/await 处理异步操作
    e.preventDefault();
    setLoading(true); // 表单提交时设置 loading 为 true
    const apiUrl = 'https://zueyzf9246.execute-api.ap-southeast-1.amazonaws.com/default/visitorRegistry'; // Replace with your API Gateway URL

    const requestData = {
      tableName: 'weddingVisitors', // do not change the DynamoDB table name
      visitorId: formData.name + formData.tel, // key for each visitor, this must be unique and string, you can use name + time stamp, eg, 习近平166771236
      visitorInfo: formData,
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
      console.log(JSON.stringify(responseBody, null, 2));
    } catch (error) {
      console.log(error);
    }

    setLoading(false); // 操作完成后设置 loading 为 false
  };

  const { name, tel, email, num, message } = formData;
  return (
    <div className="app__footer">
      <h2 className="head-text">静候光临</h2>
      {/* {!isFormSubmitted ? ( */}
      <form onSubmit={handleSubmit} className="app__footer-form app__flex">
        <input
          className="p-text"
          type="text"
          placeholder="姓名"
          name="name"
          value={name}
          onChange={handleChangeInput}
        />
        <input
          className="p-text"
          type="tel"
          placeholder="电话"
          name="tel"
          value={tel}
          onChange={handleChangeInput}
        />
        <input
          className="p-text"
          type="email"
          placeholder="邮箱"
          name="email"
          value={email}
          onChange={handleChangeInput}
        />
        <input
          className="p-text"
          type="number"
          placeholder="出席人数"
          name="num"
          value={num}
          onChange={handleChangeInput}
        />
        <textarea
          className="p-text"
          placeholder="留言"
          name="message"
          value={message}
          onChange={handleChangeInput}
        />
        <button type="submit">{!loading ? '前往赴宴' : '正在提交...'}</button>
      </form>
    </div>
  );
};

// export default Footer;
export default AppWrap(
  MotionWrap(Footer),
  'contact',
);
