import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
  Button,
  Container,
} from '@mui/material';
import { GoSearch } from 'react-icons/go';
import { TbShoppingCart } from 'react-icons/tb';
import { VscAccount } from 'react-icons/vsc';

import { Logo } from '../Logo/Logo';
import { categories } from '../../data/categories';
import { StyledLink } from './SharedLayout.styled';

const SharedLayout: React.FC = () => {
  return (
    <>
      <header>
        <Container>
          <Stack direction="row" alignItems="center" gap={3}>
            <Logo />
            <nav>
              <Stack direction="row" alignItems="center">
                {categories.map(({ name, path }) => (
                  <StyledLink key={name + 'navcat'} to={path}>
                    {name}
                  </StyledLink>
                ))}
              </Stack>
            </nav>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-search">
                Search
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-search"
                type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="search"
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      <GoSearch />
                    </IconButton>
                  </InputAdornment>
                }
                label="Search"
              />
            </FormControl>
            <Button type="button">Sell on MarketHub</Button>
            <Button variant="outlined" startIcon={<TbShoppingCart />}>
              0
            </Button>
            <IconButton color="secondary" aria-label="profile">
              <VscAccount />
            </IconButton>
          </Stack>
        </Container>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
