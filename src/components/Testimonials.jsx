import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../assets/img1.webp";
import image2 from "../assets/img2.webp";
import image3 from "../assets/img3.webp";
import image4 from "../assets/img4.webp";
import image5 from "../assets/img5.webp";
import image6 from "../assets/img6.webp";
import 'swiper/css';
import "./Testimonials.css"
const Testimonials = () => {
    return (
        <><h1 style={{color:"rgb(132, 204, 232)", textAlign:"center"}}>Meet Our Experts</h1>
        <p style={{color:"white", height:"20px" ,textAlign:"center"}}>Experience the Benefits of Advanced Technology and Expert Care</p>    
        <Swiper
          spaceBetween={240}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
        
          <SwiperSlide>
            <div className='main'>
                <div className='images'>
                    <img src={image1} alt=''/>
                </div>
                <div className='text'>
                    <h3>Dr Kshama Mangal (PT)</h3>
                    <p> M.Sc (Advanced Sports Therapy)</p>
                    <p>10 year of Experience</p>
                </div>
                <a href="/">
                <button style={{width:"100%", height:"40px",borderRadius:"5px"}}>Know More</button>
                </a>
            </div>
          </SwiperSlide>
          <SwiperSlide><div className='main'>
                <div className='images'>
                    <img src={image2} alt=''/>
                </div>
                <div className='text'>
                    <h3>Dr Ritika Saxcena</h3>
                    <p> Msc (Neuro Rihabitilation)</p>
                    <p>13 year of Experience</p>
                </div>
                <a href="/">
                <button style={{width:"100%", height:"40px",borderRadius:"5px"}}>Know More</button>
                </a>
            </div></SwiperSlide>
          <SwiperSlide><div className='main'>
                <div className='images'>
                    <img src={image3} alt=''/>
                </div>
                <div className='text'>
                    <h3>Dr Namita Singh (PT)</h3>
                    <p> MPTh (Musculoskeletal)</p>
                    <p>8 year of Experience</p>
                </div>
                <a href="/">
                <button style={{width:"100%", height:"40px",borderRadius:"5px"}}>Know More</button>
                </a>
            </div></SwiperSlide>
          <SwiperSlide>
          <div className='main'>
                <div className='images'>
                    <img src={image4} alt=''/>
                </div>
                <div className='text'>
                    <h3>Dr Radhika Kaple (PT)</h3>
                    <p> MPTh (Musculoskeletal science)</p>
                    <p>8 year of Experience</p>
                </div>
                <a href="/">
                <button style={{width:"100%", height:"40px"}}>Know More</button>
                </a>
            </div></SwiperSlide>
            <SwiperSlide>
          <div className='main'>
                <div className='images'>
                    <img src={image5} alt=''/>
                </div>
                <div className='text'>
                    <h3>Dr Sheetal Lelani (PT)</h3>
                    <p> MPTh (Neuro Physiotherapy)</p>
                    <p>10 year of Experience</p>
                </div>
                <a href="/">
                <button style={{width:"100%", height:"40px"}}>Know More</button>
                </a>
            </div></SwiperSlide>
            <SwiperSlide>
          <div className='main'>
                <div className='images'>
                    <img src={image6} alt=''/>
                </div>
                <div className='text'>
                    <h3>Dr Mansi Bane</h3>
                    <p> MPTh (Neuro Science)</p>
                    <p>14 year of Experience</p>
                </div>
                <a href="/">
                <button style={{width:"100%", height:"40px"}}>Know More</button>
                </a>
            </div></SwiperSlide>
        </Swiper>
        </>
      );
}

export default Testimonials;
