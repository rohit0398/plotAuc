/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
    extend: {
      fontFamily: {
        poppins: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        black: '#0F0B30',
        cyan: '#00F0FF',
        pink: '#FF007A',
        blue: '#5773FF',
      },
      padding: {
        4.5: '1.15rem',
      },

      animation: {
        wiggle: 'wiggle 3s ease-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate(-100%)' },
          '100%': { transform: 'translate(100%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
