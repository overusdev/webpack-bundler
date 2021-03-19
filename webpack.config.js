const path = require('path');
const glob = require('glob');

function getEntries() {
    const entries = {};

    glob.sync('./src/**/*.js').forEach( item => {
        const moduleName = item.replace("./src/", "").replace(".js", "");
        const pathTo = `${moduleName}/${moduleName}`;

        entries[ pathTo ] = item;
    } );

    return entries;
}

module.exports = {
    entry: getEntries(),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'STATIC'),
    },
    mode: 'development',
};
