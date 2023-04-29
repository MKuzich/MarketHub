import React, { Suspense, useState } from 'react';
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
  Menu,
  MenuItem,
} from '@mui/material';
import { GoSearch } from 'react-icons/go';
import { TbShoppingCart } from 'react-icons/tb';
import { VscAccount } from 'react-icons/vsc';

import { Logo } from '../Logo/Logo';
import { useGetAllCategoriesQuery } from '../../redax/categoryApi';

import { LoginModal } from '../LoginModal/LoginModal';
import { RegisterModal } from '../RegisterModal/RegisterModal';

import { links, socials, payment, legal } from '../../data/footerdata';

const SharedLayout: React.FC = () => {
  const { data: categories, isSuccess } = useGetAllCategoriesQuery();
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header>
        <Container>
          <Stack direction="column">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={3}
            >
              <Logo />
              <div>
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  Categories
                </Button>
                <nav>
                  <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    {isSuccess &&
                      categories.map(({ name, tag }) => (
                        <MenuItem key={name + 'navcat'} onClick={handleClose}>
                          <Link to={tag}>{name}</Link>
                        </MenuItem>
                      ))}
                  </Menu>
                </nav>
              </div>
              <FormControl sx={{ m: 1, width: '550px' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-search">
                  Search
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-search"
                  size="small"
                  type="text"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="search" edge="end">
                        <GoSearch size={16} />
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
              <IconButton
                color="secondary"
                aria-label="profile"
                onClick={() => setIsOpenLoginModal(true)}
              >
                <VscAccount />
              </IconButton>
            </Stack>
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
      <LoginModal
        open={isOpenLoginModal}
        setOpen={setIsOpenLoginModal}
        setOpenRegister={setIsOpenRegisterModal}
      />
      <RegisterModal
        open={isOpenRegisterModal}
        setOpen={setIsOpenRegisterModal}
        setOpenLogin={setIsOpenLoginModal}
      />
    </>
  );
};

export default SharedLayout;
