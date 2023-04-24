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
