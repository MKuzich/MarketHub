import React from 'react';
import { Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import { photos } from '../../data/photos';

export const Hero: React.FC = () => {
  return (
    <section>
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {photos.map(({ image, description }, idx) => (
            <SwiperSlide key={'hero-slide' + idx}>
              <img src={image} alt={description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};
