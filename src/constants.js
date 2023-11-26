export const COLORS = {
  white: '0deg 0% 100%',
  gray: {
    100: '185deg 5% 95%',
    300: '190deg 5% 80%',
    500: '196deg 4% 60%',
    700: '220deg 5% 40%',
    900: '220deg 3% 20%'
  },
  primary: '340deg 65% 47%',
  secondary: '240deg 60% 63%',
  transparentGray: '220deg 5% 40% / 0.8'
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800
};

const PX_TO_REM = 16;

export const BREAKPOINTS = {
  mobile: `${600 / PX_TO_REM}rem`, // 0-600px
  tablet: `${950 / PX_TO_REM}rem`, // 600-950px
  laptop: `${1300 / PX_TO_REM}rem` // 950-1300px
};
