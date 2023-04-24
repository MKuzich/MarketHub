import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Modal,
  Typography,
  Box,
  Stack,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import { useFormik } from 'formik';
import { HiOutlinePhone } from 'react-icons/hi';
import { MdOutlineAlternateEmail } from 'react-icons/md';

import { IUserLogIn } from '../../types/user.type';
import { useLogInMutation } from '../../redax/authApi';
import { userLogInSchema } from '../../helpers/validations';

const modalRoot = document.querySelector('#modal-root')!;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const initialValues: IUserLogIn = { email: '', phone: '', password: '' };

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginModal: React.FC<IProps> = ({ open, setOpen }) => {
  const [isPhone, setIsPhone] = useState(true);
  const handleClose = () => setOpen(false);

  const [logIn] = useLogInMutation();

  const formik = useFormik({
    initialValues,
    validationSchema: userLogInSchema,
    onSubmit: (values: IUserLogIn) => {
      const loginData = values;
      if (isPhone) {
        delete loginData.email;
      } else {
        delete loginData.phone;
      }
      logIn(loginData);
    },
  });

  return createPortal(
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <Stack direction="column" spacing={4}>
            <Typography variant="h4" component="h1">
              Log In
            </Typography>
            <Stack direction="row" gap={2}>
              <IconButton
                color="primary"
                aria-label="profile"
                onClick={() => setIsPhone(!isPhone)}
              >
                {isPhone ? <HiOutlinePhone /> : <MdOutlineAlternateEmail />}
              </IconButton>
              {!isPhone ? (
                <TextField
                  sx={{ width: '100%' }}
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              ) : (
                <TextField
                  sx={{ width: '100%' }}
                  label="Phone"
                  variant="outlined"
                  type="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              )}
            </Stack>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Stack direction="row" justifyContent="space-between">
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>,
    modalRoot
  );
};
