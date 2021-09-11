module.exports = {
	publicPath: '/Vue3-project/',
	outputDir: './dist',
	filenameHashing: false,
	pages: {
		index: {
			// entry for the page
			entry: 'src/pages/home/main.js',
			template: 'index.html',
			title: 'To-do',
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		}
	}
}