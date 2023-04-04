import React from 'react';
import { Container, Grid } from '@mui/material';

import { TopDeal } from '../TopDeal/TopDeal';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import { products } from '../../data/products';
const topProducts = products.slice(0, 5);

export const TopDeals = () => {
  return (
    <section>
      <Container>
        <SectionTitle title="Deals of the day" />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TopDeal key={topProducts[0].id} product={topProducts[0]} />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              {topProducts.slice(1, 5).map(product => (
                <Grid key={product.id} item xs={6}>
                  <TopDeal product={product} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
