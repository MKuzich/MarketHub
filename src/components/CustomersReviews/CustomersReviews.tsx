import React from 'react';
import { Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import { SectionTitle } from '../SectionTitle/SectionTitle';
import { ReviewCard } from '../ReviewCard/ReviewCard';

import { useGetAllReviewsQuery } from '../../redax/reviewApi';

export const CustomersReviews: React.FC = () => {
  const { data, isSuccess } = useGetAllReviewsQuery();
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
          {isSuccess &&
            data.map(review => (
              <SwiperSlide key={review._id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </section>
  );
};
