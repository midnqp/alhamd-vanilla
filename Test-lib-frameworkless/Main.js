Object.entries(require('./lib-main')).forEach(
	function ([name, exported]) {
		global[name] = exported
	}
)


requireGlobal('/dir1/dir2/lib-fw.js')
print(`Value:${Value}`)

require('http').createServer(theServer).listen(7777)
function theServer(req, res) {
	print(req.headers.host, req.url)
}
