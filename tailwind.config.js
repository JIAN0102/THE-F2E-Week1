module.exports = {
  // purge: {
  //   enabled: true,
  //   content: ['*.html'],
  // },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FFD167',
        secondary: '#FFAF34',
        black: '#000000',
        white: '#ffffff',
        'gray-100': '#B9BBBE',
        'gray-200': '#72767D',
        'gray-300': '#393C43',
        'gray-400': '#2F3136',
        'gray-500': '#202225'
      },
      fontSize: {
        'xs': '.75rem',   // 12px
        'sm': '.875rem',  // 14px
        'base': '1rem',   // 16px
        'md': '1.25rem',  // 20px
        'lg': '1.5rem',   // 24px
        'xl': '2rem',     // 32px
        '2xl': '2.5rem',  // 40px
      },
      spacing: {
        '7.5': '1.875rem',
        '15': '3.75rem',
        '50': '12.5rem',
        '56.25%': '56.25%'
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1601px'
      },
      boxShadow: {
        header: '0px 1px 3px rgba(0,0,0,0.3)'
      },
      inset: {
        '15': '3.75rem'
      },
      backgroundImage: {
        'gradient-135deg': 'linear-gradient(135deg, var(--tw-gradient-stops))'
      },
      borderRadius: {
        '10': '0.625rem'
      },
    },
  },
  variants: {
    extend: {
      opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      scale: ['responsive', 'group-hover', 'hover', 'focus'],
    },
  },
  plugins: [],
}
