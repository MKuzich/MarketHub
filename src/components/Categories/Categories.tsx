import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Stack, Box, Typography } from '@mui/material';

import { SectionTitle } from '../SectionTitle/SectionTitle';

import { useGetAllCategoriesQuery } from '../../redax/categoryApi';

export const Categories: React.FC = () => {
  const { data, isSuccess } = useGetAllCategoriesQuery();
  return (
    <section>
      <Container>
        <SectionTitle title="Shop by category" />
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3}>
          {isSuccess &&
            data.map(({ _id, name, image, tag, desription }) => (
              <Stack
                key={'section-cat' + _id}
                component={Link}
                to={tag}
                sx={{
                  width: '17%',
                }}
              >
                <Box
                  sx={{
                    height: '150px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={image} alt={name} />
                </Box>
                <Typography variant="h3">{name}</Typography>
                <Typography>{desription}</Typography>
              </Stack>
            ))}
        </Stack>
      </Container>
    </section>
  );
};
