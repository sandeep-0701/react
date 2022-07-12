import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: "Lorem, ipsum.",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis nemo, delectus sint non saepe pariatur fugiat? Animi modi quae ex hic totam!"
  },
  {
    avatar: AVTR2,
    name: "dolor, ipsum.",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis nemo, delectus sint non saepe pariatur fugiat? Animi modi quae ex hic totam!"
  },
  {
    avatar: AVTR3,
    name: "amet, ipsum.",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis nemo, delectus sint non saepe pariatur fugiat? Animi modi quae ex hic totam!"
  },
  {
    avatar: AVTR4,
    name: "elit, ipsum.",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis nemo, delectus sint non saepe pariatur fugiat? Animi modi quae ex hic totam!"
  },
  
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container">
        {
          data.map(({avatar,name,review},index) => {
            return(
              <SwiperSlide key={index} className='testimonial mySwiper' 
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={40}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              >
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                  <h5 className='client__name'>{name}.</h5>
                  <small className='client__review'>
                    {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials