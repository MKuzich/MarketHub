import React, { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
  Button,
  Container,
  Typography,
  TextField,
} from '@mui/material';
import { GoSearch } from 'react-icons/go';
import { TbShoppingCart } from 'react-icons/tb';
import { VscAccount } from 'react-icons/vsc';

import { Logo } from '../Logo/Logo';
import { categories } from '../../data/categories';
import { StyledLink } from './SharedLayout.styled';

import { links, socials, payment, legal } from '../../data/footerdata';

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
                    <IconButton aria-label="search" edge="end">
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
      <footer>
        <Container>
          {' '}
          <Stack>
            <Stack direction="row">
              <Stack>
                {links.map(({ name, path }) => (
                  <Typography
                    key={'footer-link' + name}
                    component={Link}
                    to={path}
                  >
                    {name}
                  </Typography>
                ))}
              </Stack>
              <Stack>
                {socials.map(({ name, path }) => (
                  <Typography
                    key={'footer-social' + name}
                    component={Link}
                    to={path}
                  >
                    {name}
                  </Typography>
                ))}
              </Stack>
              <Stack>
                {payment.map(({ name, path }) => (
                  <Typography
                    key={'footer-payment' + name}
                    component={Link}
                    to={path}
                  >
                    {name}
                  </Typography>
                ))}
              </Stack>
              <Stack>
                <form>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
                    multiline
                    maxRows={4}
                    name="email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              </Stack>
            </Stack>
            <Stack direction="row">
              <Typography>© 2023 MarketHub. All Rights Reserved</Typography>
              <Stack direction="row">
                {legal.map(({ name, path }) => (
                  <Typography
                    key={'footer-legal' + name}
                    component={Link}
                    to={path}
                  >
                    {name}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </footer>
    </>
  );
};

export default SharedLayout;
