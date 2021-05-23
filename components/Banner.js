import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const Banner = () => {
    return (
        <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
           <Carousel 
             autoPlay
             infiniteLoop
             showStatus={false}
             showIndicators={false}
             showThumbs={false}
             interval={3000}
            >  
            <div>
            <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
            </div>
            <div>
            <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
            </div>
            <div>
            <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/WW84/Launch/3000x1200_Hero-Tall_JPN._CB669639161_.jpg" alt="" />
            </div>
            <div>
            <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Reshma_LA/SUMMER_FEST-2021/3000x1200---Appliances-Hero---22nd-May-copy._CB668321335_.jpg" alt="" />
            </div>
            <div>
            <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/March-21/Network_Hero_banners/HeroPC_3000x1200_5._CB657960986_.jpg" alt="" />
            </div>
            </Carousel>  
        </div>
    )
}

export default Banner
