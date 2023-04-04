import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Box, Typography } from '@mui/material';

import { IProduct } from '../../types/product';

import { selectedCurrency } from '../../data/currency';

type IProps = {
  product: IProduct;
};

export const TopDeal: React.FC<IProps> = ({
  product: { id, name, category, image, price, promoPrice },
}) => {
  return (
    <Stack component={Link} to={`products/${id}`}>
      <Box
        sx={{
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={image} alt={name} />
      </Box>
      <Stack direction="row" justifyContent="space-between">
        <Stack>
          <Typography>{name}</Typography>
          <Typography variant="categoryLabel">{category}</Typography>
        </Stack>
        <Stack direction="row" gap={1}>
          {promoPrice > 0 && (
            <Typography variant="mainPrice">{`${
              promoPrice * selectedCurrency.ratio
            } ${selectedCurrency.title}`}</Typography>
          )}
          <Typography variant={promoPrice === 0 ? 'mainPrice' : 'oldPrice'}>
            {`${price * selectedCurrency.ratio} ${selectedCurrency.title}`}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
