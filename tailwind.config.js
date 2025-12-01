/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js",
    "!./node_modules/**/*",
    "!./dist/**/*"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#B28A60',
        accent: '#18332f',
        tertiary: '#F3F3F3',
        quaternary: '#EBE7E4',
      
      }
    }
  },
  corePlugins: {
    direction: true,
  },
  
}
