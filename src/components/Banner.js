import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image'
import beauty from '../images/beauty.jpg'
import laptops from '../images/laptops.jpg'
import localcurrency from '../images/localcurrency.jpg'
import shipping from '../images/shipping.jpg'
import space from '../images/space.jpg'
import toys from '../images/toys.jpg'

function Banner() {
  return (
    <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to transparent bottom-0 z-20"/>
      <Carousel
        autoPlay
        infiniteLoop 
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
            <img 
            loading="lazy"
            src={beauty} 
            layout='fill'
            alt="" />
        </div>
        <div>
            <img 
            loading="lazy"
            src={laptops} 
            layout='fill'
            alt="" />
        </div>
        <div>
            <img 
            loading="lazy"
            src={localcurrency} 
            layout='fill'
            alt="" />
        </div>
        <div>
            <img 
            loading="lazy"
            src={shipping} 
            layout='fill'
            alt="" />
        </div>
        <div>
            <img 
            loading="lazy"
            src={space} 
            layout='fill'
            alt="" />
        </div>
        <div>
            <img 
            loading="lazy"
            src={toys} 
            layout='fill'
            alt="" />
        </div>

      </Carousel>
    </div>
  );
}

export default Banner;
