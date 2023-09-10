import React from 'react';
import animation from '../../../public/social.json';
import animation1 from '../../../public/animation_lmbm05p9.json';
import animation2 from '../../../public/animation_lmblw6r2.json';


import Lottie from "lottie-react";
import './Media.css';

const Media = () => {
    return (
        <div anima  className='overflow-hidden  container-full flex justify-center items-center'
         style={{
            height:"100vh",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            backgroundSize:"cover",
            padding:"10px",
            border:"1px solid black",
            marginBottom:"10px",
            borderRadius:"5px",
            backgroundImage:"url(https://i.ibb.co/fNHX6m3/360-F-551716786-709n-EAI5-TG6-WRNRXR2-YNZre0-NVPjb-Cx0.jpg)"
        }}
        >
          <Lottie className="animation"  animationData={animation} />
          <Lottie className="h-80 me-10 " animationData={animation1}/>
          

        </div>
    );
};

export default Media;