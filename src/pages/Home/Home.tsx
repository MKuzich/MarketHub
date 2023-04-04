import React from 'react';

import { Hero } from '../../components/Hero/Hero';
import { TopProducts } from '../../components/TopProducts/TopProducts';
import { Categories } from '../../components/Categories/Categories';
import { TopDeals } from '../../components/TopDeals/TopDeals';
import { CustomersReviews } from '../../components/CustomersReviews/CustomersReviews';

import { products } from '../../data/products';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TopProducts title="Top products" products={products} cardsPerView={3} />
      <TopProducts title="New arrivals" products={products} cardsPerView={7} />
      <TopProducts
        title="Trending products"
        products={products}
        cardsPerView={5}
      />
      <Categories />
      <TopDeals />
      <CustomersReviews />
    </>
  );
};

export default Home;
