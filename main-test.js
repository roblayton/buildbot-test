var tests = Object.keys(window.__karma__.files).filter(function(file) {
	return /\.scenario|spec\.js$/.test(file);
});
require({
	baseUrl: '/',
	deps: tests,
	callback: window.__karma__.start
});

