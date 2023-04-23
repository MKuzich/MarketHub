import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import questionImg from '../../images/question.jpg';
import { selectedCurrency } from '../../data/currency';
import { IProduct } from '../../types/product.type';

type IProps = {
  product: IProduct;
};

export const TopCard: React.FC<IProps> = ({
  product: { _id, name, category, images, price, promoPrice },
}) => {
  return (
    <Stack component={Link} to={`products/${_id}`}>
      <Box
        sx={{
          height: '300px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={images && images[0]}
          onError={e => ((e.target as HTMLImageElement).src = questionImg)}
          alt={name}
        />
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
