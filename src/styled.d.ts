// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      mini: string;
      small: string;
      semibase: string;
      base: string;
      upperbase: string;
      medium: string;
      formsHeading: string;
      semilarge: string;
      large: string;
    };
    color: {
      primary: string,
      white: string;
      whiteLight: string;
      secondary: string;
      black: string;
      gray: string;
      darkerGray: string;
      pinkSwan: string;
      teal: string;
      pink: string;
    };
  }
}
