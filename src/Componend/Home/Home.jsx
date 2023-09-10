import React from 'react';
import Banar from '../Banar/Banar';
import SocialService from '../SocialService/SocialService';
import AboutUs from '../AboutUS/AboutUs';
import Counter from '../Counter/Counter';
import Media from '../Media/Media';
import VideoShowCard from '../VideoShowCard/VideoShowCard';

const Home = () => {
    return (
        <div>
            <Banar/>
            <SocialService/>
            <AboutUs/>
            <Counter/>
            <Media/>
           
        </div>
    );
};

export default Home;