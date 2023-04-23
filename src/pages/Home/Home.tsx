import React from 'react';

import { Hero } from '../../components/Hero/Hero';
import { TopProducts } from '../../components/TopProducts/TopProducts';
import { Categories } from '../../components/Categories/Categories';
import { TopDeals } from '../../components/TopDeals/TopDeals';
import { CustomersReviews } from '../../components/CustomersReviews/CustomersReviews';

import { useGetAllProductsQuery } from '../../redax/productApi';

const Home: React.FC = () => {
  const { data, isSuccess } = useGetAllProductsQuery();
  return (
    <>
      <Hero />
      <TopProducts
        title="Top products"
        products={isSuccess ? data : []}
        cardsPerView={3}
      />
      <TopProducts
        title="New arrivals"
        products={isSuccess ? data : []}
        cardsPerView={7}
      />
      <TopProducts
        title="Trending products"
        products={isSuccess ? data : []}
        cardsPerView={5}
      />
      <Categories />
      <TopDeals />
      <CustomersReviews />
    </>
  );
};

export default Home;
