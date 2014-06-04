module.exports = function (grunt) {

    'use strict';

    grunt.config('watch', {
        dependencies: {
            files: [
                'bower.json',
                'grunt/*.js',
                'Gruntfile.js',
                'package.json'
            ],
            tasks: [
                'js'
            ]
        }
    });

};