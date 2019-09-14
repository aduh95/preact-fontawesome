import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

const name = 'react-fontawesome'
const globals = {
  '@fortawesome/fontawesome-svg-core': 'FontAwesome',
  preact: 'h',
  'prop-types': 'PropTypes'
}

export default {
  external: ['@fortawesome/fontawesome-svg-core', 'prop-types', 'preact'],
  input: 'src/index.js',
  output: [
    {
      name,
      globals,
      format: 'umd',
      file: 'index.js'
    },
    {
      name,
      globals,
      format: 'es',
      file: 'index.es.js'
    }
  ],
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    babel({
      babelrc: false,
      presets: [
        [
          '@babel/preset-env',
          {
            debug: true,
            targets: { browsers: ['> 1%', 'last 2 versions', 'ie > 9'] },
            modules: false
          }
        ],
        '@babel/preset-react'
      ],
      plugins: ['@babel/plugin-external-helpers'],
      exclude: 'node_modules/**'
    })
  ]
}
