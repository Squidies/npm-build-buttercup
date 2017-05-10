// plugin config
const autoprefix_config = {
  'broswers': 'last 2 versions'
}

// plugins
const autoprefixer = require('autoprefixer')(autoprefix_config)
const mqpacker = require('css-mqpacker')({sort: true})
const cssnano = require('cssnano')

/** Short Circut Evaluation used to process NODE_ENV variables set to 'production'.
  *
  * Further reading:
  *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation
  */

module.exports = (ctx) => ({
  plugins: [
    autoprefixer,
    mqpacker,
    (process.env.NODE_ENV === 'production' && cssnano)
  ]
})
