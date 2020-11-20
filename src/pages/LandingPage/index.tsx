import React from 'react';
import { Link } from 'react-router-dom';

import BannerTime from '../../assets/images/banner-time.svg'

import BannerTop from '../../components/BannerTop/index';
import ReasonSection from '../../components/ReasonSection/index'
import MemeSection from '../../components/MemeSection/index';
import LittleSection from '../../components/LittleSection/index';
import RowTitleSection from '../../components/RowTitleSection/index';
import AllCenterSection from '../../components/AllCenterSection/index';
import AlternateSideSection from '../../components/AlternateSideSection/index';
import QuoteSection from '../../components/QuoteSection/index';
import RowImageSection from '../../components/RowImageSection/index';
import TerminalSection from '../../components/TerminalSection';





const LandingPage: React.FC = () => {
  return (
    <>
      <BannerTop/>
      <ReasonSection/>
      <MemeSection/>
      <LittleSection/>
      <RowTitleSection/>
      <AllCenterSection/>
      <AlternateSideSection/>
      <QuoteSection/>
      <RowImageSection/>
      <TerminalSection/>
    </>
  );
};

export default LandingPage;
