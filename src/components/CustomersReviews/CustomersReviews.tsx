import React from 'react';
import { Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import { SectionTitle } from '../SectionTitle/SectionTitle';
import { ReviewCard } from '../ReviewCard/ReviewCard';

import { reviews } from '../../data/reviews';

export const CustomersReviews: React.FC = () => {
  return (
    <section>
      <Container>
        <SectionTitle title="Customer Reviews" />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {reviews.map(review => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};
