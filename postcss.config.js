// module.exports = () => ({
//   plugins: [require("tailwindcss")],
// })

const tailwind = require('tailwindcss')

module.exports = { plugins: { tailwindcss: { config: './tailwind.config.js' }, autoprefixer: {}, }, }