module.exports = {
  plugins: [
    tailwindcss, 
    autoprefixer,
    require('resolve-url-loader')({
      sourceMapper: true 
    }) 
  ]
}