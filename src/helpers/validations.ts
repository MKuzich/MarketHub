import * as yup from 'yup';

export const userLogInSchema = yup.object().shape({
  phone: yup
    .string()
    .test(
      'is-valid-phone',
      'Invalid phone number',
      val => !val || /^\+?[1-9]\d{1,14}$/.test(val)
    ),
  email: yup
    .string()
    .email('Invalid email')
    .test(
      'is-valid-email',
      'Either phone or email is required',
      function (val) {
        return !(!val && !this.parent.phone);
      }
    ),
  password: yup.string().required('Password is required'),
});

export const userCreateSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
    .required('Phone is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  firstName: yup.string().required('First name is required'),
  secondName: yup.string().required('Second name is required'),
  // image: yup
  //   .mixed()
  //   .test('fileType', 'Invalid file type', value => {
  //     if (value === '' || !value) {
  //       return true;
  //     }
  //     const imagePath = value as string;

  //     if (typeof imagePath === 'string') {
  //       const fileName = imagePath.replace(/^.*[\\\/]/, '');
  //       const fileType = fileName?.split('.').pop()?.toLowerCase();
  //       return ['png', 'jpeg', 'jpg', 'gif'].includes(fileType ?? '');
  //     }

  //     return true;
  //   })
  //   .test('fileSize', 'File size too large', value => {
  //     if (!value) {
  //       return true;
  //     }
  //     console.log(value);
  //     return (value as File).size <= 5000000;
  //   })
  //   .nullable(),
});
