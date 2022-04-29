import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import upvoty from './upvoty';
import jwt from 'jsonwebtoken';
import { useAuth0 } from '../../../business/auth/hooks';
import { config } from '../../../private';

export const UpvotyWidget = ({ boardHash }) => {
  const { user } = useAuth0();

  const createUpvotyToken = (user) => {
    const payload = {
      id: user.sub,
      name: user.firstName,
      email: user.email,
      avatar: user.picture
    }
    return jwt.sign(payload, 'b614b4ba8f21afb4577f1e5eaa2a48e3', { algorithm: 'HS256' });
  }

  useEffect(() => {
    if(user) {
      const ssoToken = createUpvotyToken(user);
      var script = document.createElement("script");
      script.onload = function () {
        upvoty.init('render', {
          // 'boardHash': 'd1c82d2ac8378a5ece211149f38dc60f94e4c7d6ab8c309dcc57592260979a24',
          'ssoToken': ssoToken,
          'baseUrl': 'roadmap.shipswift.com'
        });
      };
      document.head.appendChild(script);
      script.src = 'https://roadmap.shipswift.com/javascript/upvoty.embed.js';
    }
  }, [user])

  return (
    <div data-upvoty />
  );
}