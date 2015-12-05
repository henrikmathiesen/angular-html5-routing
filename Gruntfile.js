/* global grunt */

module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');


	var jsBundle = {
		'./app/js/bld/lib-jq.js': [
			'./bower_components/jquery/dist/jquery.js',
		],
		'./app/js/bld/lib-ng.js': [
			'./bower_components/angular/angular.js',
			'./bower_components/angular-route/angular-route.js'
		],
		'./app/js/bld/app.js': [
			'./app/js/src/modules/angularHtml5Routing.js',
			'./app/js/src/controllers/*.js',
			'./app/js/src/directives/*.js'
		]
	}

	grunt.initConfig({
		clean: ['./app/js/bld'],
		uglify: {
			dev: {
				files: jsBundle,
				options: { sourceMap: true }
			},
			prod: {
				files: jsBundle,
				options: { compress: { pure_funcs: ['console.log'] } }
			}
		},
		
		watch: {
			scripts: {
				files: ['./app/js/src/**/*.js'],
				tasks: ['dev']
			}
		}
	});

	grunt.registerTask('dev', ['clean', 'uglify:dev']);
	grunt.registerTask('prod', ['clean', 'uglify:prod']);
	grunt.registerTask('default', ['dev', 'watch']);

};