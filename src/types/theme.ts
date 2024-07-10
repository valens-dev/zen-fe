interface IFontWeights {
  extraLight: number;
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  extraBold: number;
  black: number;
}

interface ITypography {
  fontWeight: IFontWeights;
}

interface IColor {
  primary?: string;
  secondary?: string;
  tertiary?: string;
}

interface IPalette {
  main: IColor;
  white: IColor;
  light: IColor;
  text: IColor;
}

export interface ITheme {
  palette: IPalette;
  typography: ITypography;
}
