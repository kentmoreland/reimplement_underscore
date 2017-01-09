module.exports = (grunt) => {

  grunt.initConfig({
    jshint: {
      files: ['*.js', 'test/*.js'],
      options: {
        esnext: true,
        expr: true
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

};