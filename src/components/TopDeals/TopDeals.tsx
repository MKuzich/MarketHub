import React from 'react';
import { Container, Grid } from '@mui/material';

import { TopDeal } from '../TopDeal/TopDeal';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import { useGetAllProductsQuery } from '../../redax/productApi';

export const TopDeals = () => {
  const { data, isSuccess } = useGetAllProductsQuery();
  return (
    <section>
      <Container>
        <SectionTitle title="Deals of the day" />
        {isSuccess && (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TopDeal product={data[0]} />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                {data.slice(1, 5).map(product => (
                  <Grid key={product._id} item xs={6}>
                    <TopDeal product={product} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
    </section>
  );
};
