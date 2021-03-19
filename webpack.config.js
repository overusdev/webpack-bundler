const path = require('path');
const globby = require('globby');
const glob = require('glob');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};

console.log(__dirname);


/**
 * 
 *  https://github.com/sindresorhus/globby
 * 
 */
// (async () => {
// 	const paths = await globby(['src/**/*.js']);
// 	console.log(paths);
// })();

globby(['src/**/*.js',]).then(paths => {
    console.log(paths);
});

/**
 * 
 * https://github.com/isaacs/node-glob
 * 
 */

glob("src/**/*.js", function (er, files) {
    console.log(files);
});
