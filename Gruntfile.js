module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: ['scss/**/*.{scss,sass}','sass/_partials/**/*.{scss,sass}'],
				tasks: ['sass']
			},
			livereload: {
				files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
				options: {
					livereload: true
				}
			}
		},
		sass: {
			dist: {
				files: {
					'public/css/app.css': 'scss/app.scss',
					'public/css/foundation.css': 'scss/foundation.scss',
					'public/css/normalize.css': 'scss/normalize.scss',
				}
			}
		},

		cssmin: {
			minify: {

				files:{

					'public/css/foundation.min.css':'public/css/foundation.css',
					'public/css/app.min.css':'public/css/app.css'


				}

			  }
		}
	});
	grunt.registerTask('default', ['sass','cssmin', 'watch']);
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
};