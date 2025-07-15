/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        light: {
          100: '#d6c6ff',
          200: '#a8b5db',
          300: '#9ca4ab',
        },
        dark: {
          100: '#221f3d',
          200: '#27272A',
        },
        accent: '#B09FCA',
      },
      fontFamily: {
        poppins: ['Poppins-Regular', 'sans-serif'], 
        "poppins-black": ['Poppins-Black', 'sans-serif'], 
        "poppins-extrabold": ['Poppins-ExtraBold', 'sans-serif'],
        "poppins-bold": ['Poppins-Bold', 'sans-serif'],
        "poppins-semibold": ['Poppins-SemiBold', 'sans-serif'],
        "poppins-medium": ['Poppins-Medium', 'sans-serif'], 
        "poppins-light": ['Poppins-Light', 'sans-serif'], 
        "poppins-thin": ['Poppins-Thin', 'sans-serif']
      }
    },
  },
  plugins: [],
}