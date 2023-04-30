import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    logo: React.CSSProperties;
    mainPrice: React.CSSProperties;
    oldPrice: React.CSSProperties;
    categoryLabel: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    logo?: React.CSSProperties;
    mainPrice?: React.CSSProperties;
    oldPrice?: React.CSSProperties;
    categoryLabel: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    logo: true;
    mainPrice: true;
    oldPrice: true;
    categoryLabel: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2b2d42',
    },
    secondary: {
      main: '#ef233c',
    },
    common: {
      black: '#212121',
      white: '#ffffff',
    },
    text: {
      primary: '#2b2d42',
      secondary: '#8d99ae',
    },
    background: {
      default: '#edf2f4',
      paper: '#ffffff',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1920,
    },
  },
  typography: {
    body1: {
      fontFamily: 'Roboto',
      // color: '#0b090a',
    },
    h2: {
      fontFamily: 'Roboto',
      // color: '#0b090a',
      fontSize: '32px',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Roboto',
      // color: '#0b090a',
      fontSize: '24px',
      fontWeight: 500,
    },
    logo: {
      fontFamily: 'Roboto',
      fontSize: '24px',
      // color: '#0b090a',
      fontWeight: 700,
      lineHeight: 1,
    },
    mainPrice: {
      fontFamily: 'Roboto',
      // color: '#0b090a',
      fontSize: '24px',
    },
    oldPrice: {
      fontFamily: 'Roboto',
      // color: '#8c8685',
      textDecoration: 'line-through',
      fontWeight: 300,
    },
    categoryLabel: {
      fontFamily: 'Roboto',
      // color: '#8c8685',
    },
  },
});
