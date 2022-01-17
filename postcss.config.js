// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    // https://purgecss.com/configuration.html#options
    content: ["./components/**/*.js", "./pages/**/*.js"],
    css: [],
    whitelistPatternsChildren: [/monaco-editor/], // so it handles .monaco-editor .foo .bar
    defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
