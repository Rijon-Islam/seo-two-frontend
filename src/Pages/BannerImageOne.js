import React, { useEffect, useState } from 'react';
import './BannerImageOne.css';

const BannerImageOne = () => {
   
    const [banners, setBanners] = useState([]);


    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/banner-one`)
          .then((res) => res.json())
          .then((info) => setBanners(info));
      }, []);
    return (
        <div>
            {
                banners.map( banner => 
                    <img className='w-full my-4' src={banner.bannerImageOne} alt="Banner One"></img>
                    )
            }
        </div>
    );
};

export default BannerImageOne;