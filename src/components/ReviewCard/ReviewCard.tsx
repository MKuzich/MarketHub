import React from 'react';
import { Stack, Typography } from '@mui/material';

import { IReview } from '../../types/review';

type IProps = {
  review: IReview;
};

export const ReviewCard: React.FC<IProps> = ({ review: { text } }) => {
  return (
    <Stack>
      <Typography>{text}</Typography>
    </Stack>
  );
};
