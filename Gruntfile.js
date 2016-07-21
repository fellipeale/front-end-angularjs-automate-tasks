module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      options: {
        sourceMap: true
      },
      min: {
        src: [
          'src/main/webapp/scripts/**/*.js',
        ],
        dest: 'src/main/webapp/dist/app.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify'); // load the given tasks
  grunt.registerTask('default', ['uglify']); // Default grunt tasks maps to grunt
};
