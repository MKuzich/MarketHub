import React from 'react';
import { Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { TopCard } from '../TopCard/TopCard';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { IProduct } from '../../types/product.type';
import { Section } from './TopProducts.styled';

type IProps = {
  title: string;
  products: IProduct[];
  cardsPerView?: number;
};

export const TopProducts: React.FC<IProps> = ({
  title,
  products,
  cardsPerView = 5,
}) => {
  return (
    <Section>
      <Container>
        <SectionTitle title={title} />
        <Swiper
          slidesPerView={cardsPerView}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products.map(product => (
            <SwiperSlide key={product._id}>
              <TopCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};
