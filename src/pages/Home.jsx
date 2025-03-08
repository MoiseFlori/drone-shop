import React from 'react';
import HomeHeader from '../components/home-header/HomeHeader';
import Details from '../components/section/Details';
import VideoPlayer from '../components/section/VideoPlayer';
import StorageSection from '../components/section/StorageSection';
import TransferData from '../components/section/TransferData';
import Charging from '../components/section/Charging';
import Estetic from '../components/section/Estetic';


const Home = () => {
  return (
    <div className="page">
      <HomeHeader />
      <Details />
      <VideoPlayer />
      <StorageSection />
      <TransferData />
      <Charging />
      <Estetic />
    </div>
  );
}
export default Home;