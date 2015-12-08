/* global grunt */

module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ng-annotate');


	var jsBundleLib = {
		'./app/js/bld/lib-jq.js': [
			'./bower_components/jquery/dist/jquery.js',
		],
		'./app/js/bld/lib-ng.js': [
			'./bower_components/angular/angular.js',
			'./bower_components/angular-route/angular-route.js'
		]
	};

	var jsBundleApp = {
		'./app/js/bld/app.js': [
			'./app/js/src/modules/angularHtml5Routing.js',
			'./app/js/src/controllers/*.js',
			'./app/js/src/directives/*.js'
		]
	};

	grunt.initConfig({
		clean: ['./app/js/bld'],

		uglify: {
			devLib: {
				files: jsBundleLib,
				options: { sourceMap: true }
			},
			devApp: {
				files: jsBundleApp,
				options: { sourceMap: true }
			},
			prodLib: {
				files: jsBundleLib,
				options: { compress: { pure_funcs: ['console.log'] } }
			},
			prodApp: {
				files: jsBundleApp,
				options: { compress: { pure_funcs: ['console.log'] } }
			}
		},

		ngAnnotate: {
			options: {
				singleQuotes: true,
			},
			app: {
				files: { 
					'./app/js/bld/app.js': ['./app/js/bld/app.js'] 
				}
			}
		},

		watch: {
			scripts: {
				files: ['./app/js/src/**/*.js'],
				tasks: ['uglify:devApp']
			}
		}
	});




	grunt.registerTask('dev', ['clean', 'uglify:devLib', 'uglify:devApp']);
	grunt.registerTask('prod', ['clean', 'uglify:prodLib', 'uglify:prodApp']);
	grunt.registerTask('default', ['dev', 'watch']);

};