const lib = require("./lib-frameworkless.js")
require('http').createServer(server).listen(7777)

function server(req, res) {
	ROUTE_REDIRECT = {
		'/favicon.ico' : './Public/Comp/',
	}

	lib.Init({
		'res' : res,
		'req' : req,
		'viewdir' : './Public',
		'compdir' : './Public/Comp',
	})
	/*
	lib.init(res, req, viewdir='./Public', compdir='./Public/Comp')
	*/
	lib.Route(req, res)
}
