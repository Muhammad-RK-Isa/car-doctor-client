/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{jsx, js}" ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./src/assets/images/banner/5.jpg')",
      }
    },
  },
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FF3811",

          "secondary": "#F000B8",

          "accent": "#37CDBE",

          "neutral": "#151515",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require( 'daisyui' ),
  ],
}

