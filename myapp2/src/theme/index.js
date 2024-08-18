import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      100: '#E3F9F5',
      200: '#C4F3EC',
      300: '#A4E9E3',
      400: '#5DD5C6',
      500: '#1AB4A8',
      600: '#149D8F',
      700: '#0F766A',
      800: '#0A4E49',
      900: '#062D2B',
    },
    secondary: {
      100: '#FDF8E4',
      200: '#FBE9B2',
      300: '#F9DA80',
      400: '#F7C84D',
      500: '#F5B228',
      600: '#D4931F',
      700: '#B87416',
      800: '#8E5411',
      900: '#6D3B0B',
    },
    neutral: {
      100: '#F5F5F5',
      200: '#E0E0E0',
      300: '#BDBDBD',
      400: '#9E9E9E',
      500: '#757575',
      600: '#616161',
      700: '#424242',
      800: '#212121',
      900: '#0D0D0D',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'primary.500',
          color: 'white',
          _hover: {
            bg: 'primary.600',
          },
        },
        outline: {
          borderColor: 'primary.500',
          color: 'primary.500',
          _hover: {
            bg: 'primary.100',
          },
        },
      },
    },
    Box: {
      baseStyle: {
        borderRadius: 'md',
        boxShadow: 'md',
      },
    },
  },
});

export default theme;
