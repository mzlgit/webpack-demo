const path = require('path');

const config = {
    entry: {
        zwqdfa: './src/index.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'asdf.js'
    }
}
module.exports = config;