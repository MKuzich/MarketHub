import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Modal,
  Typography,
  Box,
  Stack,
  TextField,
  Button,
} from '@mui/material';
import { useFormik } from 'formik';
import { useDropzone } from 'react-dropzone';

import { useSignUpMutation } from '../../redax/authApi';
import { IUserSignUp } from '../../types/user.type';
import { userCreateSchema } from '../../helpers/validations';

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

const initialValues: IUserSignUp = {
  email: '',
  phone: '',
  password: '',
  firstName: '',
  secondName: '',
};

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterModal: React.FC<IProps> = ({
  open,
  setOpen,
  setOpenLogin,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 1) {
      setSelectedFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  const handleClose = () => setOpen(false);

  const [signUp] = useSignUpMutation();

  const formik = useFormik({
    initialValues,
    validationSchema: userCreateSchema,
    onSubmit: (values: IUserSignUp) => {
      const formData = new FormData();
      for (const [key, value] of Object.entries(values)) {
        formData.append(key, value);
      }
      // formData.append('phone', values.phone);
      // formData.append('email', values.email);
      // formData.append('password', values.password);
      // formData.append('firstName', values.firstName);
      // formData.append('secondName', values.secondName);
      if (selectedFile) {
        formData.append('image', selectedFile);
      }
      signUp(formData);
    },
  });

  const handleClickOnRegisterLink = () => {
    setOpen(false);
    setOpenLogin(true);
  };

  return createPortal(
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <Stack direction="column" spacing={4}>
            <Typography variant="h4" component="h1">
              Sign In
            </Typography>
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
            <TextField
              sx={{ width: '100%' }}
              label="First name"
              variant="outlined"
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              sx={{ width: '100%' }}
              label="Second name"
              variant="outlined"
              type="text"
              name="secondName"
              value={formik.values.secondName}
              onChange={formik.handleChange}
              error={
                formik.touched.secondName && Boolean(formik.errors.secondName)
              }
              helperText={formik.touched.secondName && formik.errors.secondName}
            />
            <Box
              {...getRootProps()}
              sx={{
                p: 3,
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: isDragActive ? 'lightgrey' : 'white',
                border: '1px dashed grey',
                maxHeight: '100px',
              }}
            >
              <input {...getInputProps()} accept="image/*" />
              <Typography variant="body1">
                {selectedFile ? (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Uploaded"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100px',
                      marginBottom: '1rem',
                    }}
                  />
                ) : isDragActive ? (
                  'Drop the file here'
                ) : (
                  'Drag and drop a file or click to select'
                )}
              </Typography>
            </Box>
            <Button variant="contained" type="submit">
              Submit
            </Button>
            <Button type="button" onClick={handleClickOnRegisterLink}>
              Go to login
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>,
    modalRoot
  );
};
