const path              = require('path');
const getApp2Aliases    = require('./helpers').getApp2Aliases;
const makeCacheGroup    = require('./helpers').makeCacheGroup;
const publicPathFactory = require('./helpers').publicPathFactory;
const PATHS             = require('./paths');
const getPlugins        = require('./plugins');

const app2Config = (grunt) => ({
    entry: {
        [global.is_production ? 'binary.min' : 'binary']: path.resolve(PATHS.SRC, 'javascript', 'app_2'),
    },
    output: {
        path      : path.resolve(PATHS.DIST, 'js', 'app_2'),
        publicPath: path.join(publicPathFactory(grunt)(), 'app_2/'),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                ...makeCacheGroup('binary_common', -5 , 'src/javascript/_common'),
                ...makeCacheGroup('smartcharts'  , -10, 'node_modules', 'smartcharts'),
                ...makeCacheGroup('react_mobx'   , -10, 'node_modules', '(react|mobx)'),
                ...makeCacheGroup('vendor'       , -20, 'node_modules'),
            },
        },
    },
    resolve: {
        alias: {
            _common: path.resolve(PATHS.SRC, 'javascript/_common'),
            ...getApp2Aliases(),
        },
    },
    externals: {
        CIQ: 'CIQ',
    },
    plugins: getPlugins('app_2', grunt),
});

module.exports = app2Config;
