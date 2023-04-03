import React from 'react';
import { Container } from '@mui/material';

import { SectionTitle } from '../SectionTitle/SectionTitle';

import { categories } from '../../data/categories';

export const Categories: React.FC = () => {
  return (
    <section>
      <Container>
        <SectionTitle title="Shop by category" />
        {categories.map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
      </Container>
    </section>
  );
};
