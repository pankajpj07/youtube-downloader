const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: ['html', 'body', 'my-class'],
})
console.log('PostCSS is loaded!')
module.exports = {
  plugins: ['tailwindcss', 'autoprefixer', [purgecss]],
}
