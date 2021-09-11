module.exports = {
	publicPath: '/Vue3-project/',
	outputDir: './dist',
	filenameHashing: false,
	pages: {
		index: {
			// entry for the page
			entry: 'src/pages/home/main.js',
			template: 'index.html',
			title: 'VUE3-projects',
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		}
	}
}