/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './public/**/*.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'h-5': '#FDF9FF',
      'h-4': '#FBF0FF',
      'h-3': '#F9E5FF',
      'h-2': '#EDCEF7',
      'h-1': '#EDC4FF',
      'h0': '#E7BAFE',
      'h1': '#D39AFA',
      'h2': '#C382F4',
      'h3': '#B671F2',
      'h4': '#A966EC',
      'h5': '#9559E9',
      'h6': '#8849E1',
      'h7': '#7336CA',
      'h8': '#5C24AC',
      'h9': '#4A188F',
      'h10': '#330F67',
      'h11': '#1A0736',
      'g0': '#F3F3F3',
      'g1': '#E6E6E6',
      'g2': '#D9D9D9',
      'g3': '#CCCCCC',
      'g4': '#BFBFBF',
      'g5': '#B3B3B3',
      'g6': '#A6A6A6',
      'g7': '#999999',
      'g8': '#8C8C8C',
      'g9': '#808080',
      'g10': '#737373',
      'g11': '#666666',
      'g12': '#545454',
      'g13': '#404040',
      'g14': '#262626',
      'cho': '#59B262',
      'ptn': '#4977AD',
      'lip': '#CA5151',
      'rest': '#C4E20C'
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
      display: ['Comfortaa', 'cursive']
    },
    extend: {
      spacing: {
        icon: "1.5rem",
        'icon-title': "0.5rem",
        'icon-subtitle': '2rem',
        'plus-button': '6vh'
      },
      transitionProperty: {
        height: 'height'
      },
      boxShadow: {
        default: '0px 2px 8px -2px rgba(26,7,54,0.2)'
        // default: '0px 4 4 4 rgba(255,255,255,1)'
      },
      fontSize: {
        'plus-button': '6vh'
      },
      lineHeight: {
        'plus-button': '6vh'
      }
    },
  },
  plugins: [],
}
