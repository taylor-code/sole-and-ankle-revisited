export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)'
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)'
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800
};

const PX_TO_REM = 16;

export const BREAKPOINTS = {
  mobile: 550 / PX_TO_REM, // 0-550px
  tablet: 1100 / PX_TO_REM, //550-1100px
  laptop: 1500 / PX_TO_REM // 1100-1500px
};
