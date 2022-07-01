import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primary: string;
      secondary: string;
      surface: string;
      onSurface: string;
      title: string;
      hint: string;
      error: string;
      border: string;
      btnText: string;
    };
  }
}
