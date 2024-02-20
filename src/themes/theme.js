import {screen_width} from '../utils/Dimensions'

const colors = {
  background: '#FFFFFF',
  backgroundDark: '#E4EBF1',

  primary: '#1F93FF',
  secondary: '#5d7592',

  successColor: '#44CE4B',
  dangerColor: '#ff382d',
  warningColor: '#ffc532',

  white: '#FFFFFF',
  black: '#000000',
  charcoal: '#333333',

  text: '#37546D',
  textDark: '#293F51',
  textDarker: '#1f2d3d',

  border: '#C9D7E3',
  borderDark: '#37546D',

  icon: '#37546D',
  iconDark: '#293F51',
}

const baseSpacing = 8

const spacing = {
  zero: 0,
  tiny: baseSpacing / 2,
  micro: baseSpacing,
  mini: baseSpacing * 1.25,
  smaller: baseSpacing * 1.5,
  half: baseSpacing * 2,
  small: baseSpacing * 3,
  medium: baseSpacing * 4,
  large: baseSpacing * 5,
  larger: baseSpacing * 6,
}

const responsiveFontSize = size => Math.round((size * screen_width) / 375)

const fontSize = {
  xxs: responsiveFontSize(10),
  xxsm: responsiveFontSize(11),
  xs: responsiveFontSize(12),
  xsm: responsiveFontSize(13),
  sm: responsiveFontSize(14),
  smd: responsiveFontSize(15),
  md: responsiveFontSize(16),
  lg: responsiveFontSize(18),
  xl: responsiveFontSize(20),
  xxl: responsiveFontSize(24),
  xxxl: responsiveFontSize(30),
}

const borderRadius = {
  zero: 0,
  tiny: baseSpacing * 0.5,
  micro: baseSpacing,
  mini: baseSpacing * 1.5,
  small: baseSpacing * 2,
  sm: baseSpacing * 2.5,
  medium: baseSpacing * 3,
  mdl: baseSpacing * 3.75,
  large: baseSpacing * 4,
  larger: baseSpacing * 6,
  largest: baseSpacing * 8,
  full: baseSpacing * 12,
}

const fontWeight = {
  thin: '100',
  ultraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  heavy: '800',
  bold: 'bold',
  normal: 'normal',
}

const theme = {
  colors,
  spacing,
  fontSize,
  borderRadius,
  fontWeight,
}

export default theme
