import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import image from '@rollup/plugin-image';
import replace from '@rollup/plugin-replace';
import filesize from 'rollup-plugin-filesize';
import css from 'rollup-plugin-css-only';
import svgr from '@svgr/rollup';
import del from 'rollup-plugin-delete';
// package.json 에 main , module 등 설정해논 경로가 있음
import pkg from './package.json';

const INPUT_FILE_PATH = 'src/index.js';
const OUTPUT_NAME = 'Example';

// react app packaging 이므로 dependency를 둬야함  prop-types 같은경우 스토리 북용
const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
  'qrcode.react': 'qrcode.react'
};

const PLUGINS = [
  replace({
    values: {
      "import 'reset.css';": ''
    },
    delimiters: ['', '']
  }),
  css({ output: 'gosrockStyle.css' }),
  // css 파일 임포트 시키기  ( sass 지원아님)
  // postcss({
  //   extract: true,
  //   plugins: [autoprefixer]
  // }),
  // 바벨로 es5 으로 변환.
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**'
  }),
  resolve({
    // browser: true,
    resolveOnly: [
      /^(?!react$)/,
      /^(?!react-dom$)/,
      /^(?!prop-types)/,
      /^(?!qrcode.react)/
    ]
  }),
  commonjs(),
  filesize(),
  url(),
  svgr({ icon: true }),
  image(),
  del({
    targets: 'dist/*.svg',
    verbose: true,
    hook: 'writeBundle',
    runOnce: false
  })
];

// peer dependency 와 연관
const EXTERNAL = ['react', 'react-dom', 'prop-types', 'qrcode.react'];

const CJS_AND_ES_EXTERNALS = EXTERNAL.concat(/@babel\/runtime/);

const OUTPUT_DATA = [
  {
    file: pkg.module,
    format: 'es'
  },
  {
    file: pkg.main,
    format: 'cjs'
  }
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    globals: GLOBALS
  },
  // runtime 으로 바벨 플러그인 설정하래요.
  // https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
  // 익스터널에 적용해야 임포트 시켰을때 해당 임포트 시킨사람의 로컬에서 dependency를 찾아 임포트함
  external: ['cjs', 'es'].includes(format) ? CJS_AND_ES_EXTERNALS : EXTERNAL,
  plugins: PLUGINS
}));

export default config;
