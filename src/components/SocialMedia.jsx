import React from 'react';
import { BsFillEnvelopeFill, BsTelephoneFill } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="mailto:hello@micael.com" className="p-text">
      <BsFillEnvelopeFill />
    </a>
    <a href="tel:+86 15641111755">
      <BsTelephoneFill />
    </a>
  </div>
);

export default SocialMedia;
