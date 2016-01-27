import Typography from 'typography';

const options = {
  baseFontSize: '16px',
  baseLineHeight: '24px',
  bodyFontFamily: 'Verdana, Geneva, sans-serif',
  headerFontFamily: 'Verdana, Geneva, sans-serif',
  bodyWeight: 300,
  headerWeight: 600,
  boldWeight: 600,
  headerGray: 100,
  headerGrayHue: 0,
  bodyGray: 100,
  bodyGrayHue: 0,
  modularScales: [
    {
      "scale": "minor third"
    }
  ]
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
