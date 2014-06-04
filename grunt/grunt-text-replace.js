module.exports = function (grunt) {

    'use strict';

    grunt.config('replace', {
        json: {
            src: [
                'bower.json',
                'package.json'
            ],
            overwrite: true,
            replacements: [{
                from: '"version": "<%= config.version.from %>"',
                to: '"version": "<%= config.version.to %>"'
            }]
        }
    });

};