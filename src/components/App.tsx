import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Category = lazy(() => import('../pages/Category/Category'));
const Product = lazy(() => import('../pages/Product/Product'));

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="categories/:categoryName" element={<Category />} />
          <Route path="products/:productId" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
};
