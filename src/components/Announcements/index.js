import React from 'react';
import { AnnouncementContainer, AnimatedEmoticon } from './style';
import { isMobile } from '../utils/constants';

const Announcements = () => {
  return (
    <a href="https://admirian.com/request-demo" style={{ textDecoration: 'none' }}>
      <AnnouncementContainer isMobile={isMobile}>
        <span>
          <AnimatedEmoticon>🎉</AnimatedEmoticon> Admirian is now live{' '}
          <AnimatedEmoticon>🎉</AnimatedEmoticon> First 3 Months Free for Brands & Agencies!{' '}
          <AnimatedEmoticon>🚀</AnimatedEmoticon> Click to Join{' '}
          <AnimatedEmoticon>👈</AnimatedEmoticon>
        </span>
      </AnnouncementContainer>
    </a>
  );
};

export default Announcements;
