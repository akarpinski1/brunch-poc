module.exports = {
    paths: {
        watched: ['themes/addonrock-default-theme/static-src'],
        public: 'themes/addonrock-default-theme/static'
    },
    files: {
        javascripts: {
            joinTo: {
                'js/app.js': '**/static-src/js/*.js',
                'js/vendor.js': /^node_modules/
            }
        },
        stylesheets: {
            joinTo: 'css/app.css'
        }
    },
    npm: {
        globals: {
            $: 'jquery',
            jQuery: 'jquery',
            tether: 'tether',
            bootstrap: 'bootstrap'
        },
        styles: {
            tether: ['dist/css/tether.min.css'],
        },
    }
}