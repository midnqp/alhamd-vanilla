Object.entries(require('./lib-avoidrepetition')).forEach(
	([name, exported]) => global[name] = exported 
)


module.exports = {
	Init : Init,
	Route: Route,
	Mimeof: Mimeof,
}




function Init(initObject) {
	let idefs = [							//init defualts
		['viewdir', './Public'],
		['compdir', './Public/Comp'],
	]
	handleInitObject(initObject, idefs)  //set global vars


	res.endRender = (filename)=>{
		// execute Nodejs inside HTML files
		res.writeHead(200, {'Content-Type' : Mimeof(filename)})
		evalNodejs(filename, (renderedHTML)=>{
			res.end(renderedHTML)
		})
	}


	res.endComp = (filename)=>{
		// Send components: css, media files, js.
		fs.readFile(filename, (err, data)=>{
			if (err) {
				res.writeHead(404)
				res.end()
			}
			res.writeHead(200, {"Content-Type" : Mimeof(filename)})
			res.end(data)
		})
	}
}




function handleInitObject(initObject, idefs) {
	// If viewdir, compdir, etc are empty
	for (let i=0; i < idefs.length; i++) {
		if (initObject[idefs[i][0]] === undefined) {
				global[idefs[i][0]] = idefs[i][1]
		}
	}
	Object.entries(initObject).forEach(
		([varName, val])=>{
			global[varName] = val
		}
	)
	global['Url'] = req.url
}




function Mimeof(filename) {
	fileExtension = String(path.extname(filename).toLowerCase())
	Mimes = {
		'.html': 'text/html',
		'.css' : 'text/css',
		'.md'  : 'text/markdown',
		'.ico' : 'image/x-icon',
		'.png' : 'image/png',
		'.jpg' : 'image/jpg',
		'.gif' : 'image/gif',
		'.svg' : 'image/svg+xml',

		'.wav' : 'audio/wav',
		'.mp4' : 'video/mp4',

		'.js':   'application/javascript',
		'.json': 'application/json',
		'.woff': 'application/font-woff',
		'.ttf' : 'application/font-ttf',
		'.eot' : 'application/vnd.ms-fontobject',
		'.otf' : 'application/font-otf',
		'.wasm': 'application/wasm'
	}
	return Mimes[fileExtension] || 'application/octet-stream'
}




function evalNodejs(filename, evalNode_callback) {
	ts = `<script nodejs>`		// Change noab too
	te = `</script>`					// token-end
	html = fileRead(filename, (html)=>{
		if (html.includes(ts))
			noab = html.match(/<script nodejs>/g)
		
		i = 0
		counter = 0
		if (typeof(noab) !== "undefined") {
			while (counter < noab.length) {
				j = html.indexOf(ts)
				i = html.indexOf(te)
				block = html.slice(j, i + te.length) //block including ts, te
				ret = eval(block.slice(ts.length, -te.length)) //block excluding ts, te

				if (ret === undefined) ret = ""
				html = html.replace(block, ret)
				counter++
			}
		}
		evalNode_callback(html)
	})
}




function Route(req, res) {
	print(Url)
	performRouting()
}




function performRouting() {
	let vurl = viewdir + Url 		// Url with viewdir
	// ./public/something/somefile/?param=abcd123&id=777
	routeChanged = false



	_doRouteChange(ROUTE_REDIRECT)


	
	if (vurl.endsWith('/')) {  // won't work at future with get/post params
		// render the HTML file and send response
		let filename = vurl.slice(0, vurl.lastIndexOf('/')) + '.html'
		res.endRender(filename)
	}
	else if (isWebComponent(vurl) || routeChanged === true)	{
		res.endComp(vurl)
	}
	else if (!isWebComponent(vurl)) {
		// redirect /about to /about/
		res.writeHead(302, {'Location' : Url + '/'})
		res.end()
	}
}




function _doRouteChange(varName) {
	//if (ROUTE_ALL !== undefined && ROUTE_REDIRECT !== undefined) throw "FrameworkLessConfigurationError: ROUTE_ALL and ROUTE_REDIRECT both cannot co-exist."
	

	if (typeof(varName) !== 'undefined') {
		let rsu = varName[Url]
		if (rsu !== undefined) {
			vurl = rsu + Url
			routeChanged = true
		}
	}

}




function isWebComponent(vurl) {
	if (vurl.startsWith(compdir)) return true
	return false
}
