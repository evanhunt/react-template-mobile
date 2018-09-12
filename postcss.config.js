module.exports = {
    plugins: {
        autoprefixer: {
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
        },
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: 375,
            viewportHeight: 667, // not now used; TODO: need for different units and math for different properties
            unitPrecision: 2,
            viewportUnit: 'vw',
            selectorBlackList: ['.ignore'],
            minPixelValue: 1,
            mediaQuery: false
        },
        // 'postcss-write-svg': {}
    }
}
