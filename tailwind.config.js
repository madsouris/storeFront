/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('tailwind-bootstrap-grid')({
      containerMaxWidths: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
      },
      generateContainer: false,
    }),
  ],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        chinebear: {
          primary: '#E91E63',
          secondary: '#607d8b',
          accent: '#9C27B0',
          neutral: '#000000',
          'base-100': '#FFFFFF',
          info: '#00bcd4',
          success: '#8bc34a',
          warning: '#ff9800',
          error: '#ff5722',
          '--rounded-box': '0rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '0rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0rem', // border radius of tabs
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
