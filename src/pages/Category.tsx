import React from 'react';
import { useParams } from 'react-router-dom';

const Category: React.FC = () => {
  const { categoryName } = useParams();
  return (
    <>
      <div>{categoryName}</div>
    </>
  );
};

export default Category;
