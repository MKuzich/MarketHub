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
      color: '#0b090a',
    },
    h2: {
      fontFamily: 'Roboto',
      color: '#0b090a',
      fontSize: '32px',
      fontWeight: 700,
    },
    logo: {
      fontFamily: 'Roboto',
      fontSize: '24px',
      color: '#0b090a',
      fontWeight: 700,
      lineHeight: 1,
    },
    mainPrice: {
      fontFamily: 'Roboto',
      color: '#0b090a',
      fontSize: '24px',
    },
    oldPrice: {
      fontFamily: 'Roboto',
      color: '#8c8685',
      textDecoration: 'line-through',
      fontWeight: 300,
    },
    categoryLabel: {
      fontFamily: 'Roboto',
      color: '#8c8685',
    },
  },
});

// {
//   breakpoints: {
//     values: {
//       xxs: 0,
//       xs: 420,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
//   palette: {
//     primary: {
//       light: '#484848',
//       main: '#212121',
//       dark: '#000000',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#bef67a',
//       main: '#8bc34a',
//       dark: '#5a9216',
//       contrastText: '#212121',
//     },
//     custom: {
//       light: 'rgba(66, 66, 66, 0.3)',
//       lightSecondary: 'rgba(139, 195, 74, 0.3)',
//     },
//   },
//   typography: {
//     subtitle2: {
//       fontSize: '1rem',
//       fontWeight: 400,
//     },
//     body1: {
//       fontFamily: 'Ubuntu',
//       fontSize: 'calc(0.75em + 0.75vmin)',
//       color: '#fff',
//     },
//     body2: {
//       fontSize: '0.75rem',
//       fontStyle: 'italic ',
//     },
//     h1: { fontFamily: 'Ubuntu', fontWeight: 700, fontSize: '2.75rem' },
//     h2: {
//       fontFamily: 'Ubuntu',
//       fontWeight: 400,
//       letterSpacing: '2px',
//       fontSize: 'calc(1em + 1vmin)',
//       color: '#757575',
//       backgroundColor: '#212121',
//       padding: '0 0.5rem',
//     },
//     h3: {
//       lineHeight: 1.5,
//       fontFamily: 'Ubuntu',
//       fontSize: 'calc(1em + 1vmin)',
//       textAlign: 'center',
//       marginBottom: '1vw',
//       fontWeight: 700,
//       color: '#fff',
//     },
//     h4: {
//       fontFamily: 'Ubuntu',
//       fontSize: '1.5rem',
//       fontWeight: 700,
//     },
//     homeLink: {
//       display: 'inline',
//       fontFamily: 'Ubuntu',
//       fontWeight: 700,
//       lineHeight: 1,
//       color: '#fff',
//     },
//     number: {
//       fontFamily: 'Raleway',
//       fontWeight: 800,
//       lineHeight: 1,
//       color: '#8bc34a',
//     },
//     title1: {
//       fontFamily: 'Ubuntu',
//       fontWeight: 700,
//       lineHeight: 1,
//       color: '#fff',
//     },
//     titleDesription: {
//       fontFamily: 'Ubuntu',
//       fontWeight: 700,
//       textTransform: 'none',
//       fontSize: 'calc(0.75em + 0.75vmin)',
//       lineHeight: 1,
//       color: '#000',
//       marginBottom: 12,
//     },
//   },
// }
