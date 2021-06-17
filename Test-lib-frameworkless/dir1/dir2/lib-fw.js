module.exports = [
	Init,
]




function Init() {
	res.endRender = function (filename) {
		//execute Nodejs inside HTML files
		res.writeHead(200, {'Content-Type' : Mimeof(filename)})
		parseNodejs(filename, cb_endRender)
		
		function cb_endRender(HTML) {
			res.end(HTML)
		}
	}

	res.endComp = function (filename) {
		//send web components: css, media files, js
		fs.readFile(filename, cb_endComp)

		function cb_endComp(err, data) {
			if (err) {
				res.writeHead(404)
				res.end()
			}
			res.writeHead(200, {'Content-Type' : Mimeof(filename)})
			res.end(data)
		}
	}
}
