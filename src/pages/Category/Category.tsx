import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCategoryQuery } from '../../redax/categoryApi';

const Category: React.FC = () => {
  const { categoryName } = useParams();
  const { data, isSuccess } = useGetCategoryQuery(categoryName!);
  return (
    <>
      <div>{categoryName}</div>
      {isSuccess && data.products.map(i => <div>{i}</div>)}
    </>
  );
};

export default Category;
