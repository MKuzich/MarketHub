import React from 'react';
import { ReactComponent as LogoPicture } from '../../images/markethub-logo.svg';
import { Stack, Typography } from '@mui/material';

export const Logo = () => (
  <Stack direction="row" gap={1} alignItems="center" p={2}>
    <LogoPicture />
    <Stack>
      <Typography variant="logo">Market</Typography>
      <Typography variant="logo">Hub</Typography>
    </Stack>
  </Stack>
);
