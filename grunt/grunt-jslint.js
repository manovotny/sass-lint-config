module.exports = function (grunt) {

    'use strict';

    grunt.config('jslint', {
        js: {
            directives: {
                browser: true,
                predef: [
                    'module',
                    'require'
                ]
            },
            src: [
                'bower.js',
                'Gruntfile.js',
                'grunt/*.js',
                'package.json'
            ]
        }
    });

};