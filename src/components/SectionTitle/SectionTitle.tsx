import React from 'react';
import { Box, Typography } from '@mui/material';

type IProps = {
  title: string;
};

export const SectionTitle: React.FC<IProps> = ({ title }) => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h2">{title}</Typography>
    </Box>
  );
};
