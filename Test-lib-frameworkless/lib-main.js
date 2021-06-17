const fs = require('fs'), 
			path = require('path'),
			util = require('util')


module.exports = {
	fileRead : fileRead,  //reads file in utf8, throws err
	fs : fs,
	path: path,
	print : print,  //console.log is too long to type
	requireGlobal : requireGlobal,  //adds everything of exported to global scope
}




function fileRead(fileName, callback) {
	fs.readFile(fileName, 'utf8', (err, data)=>{
		if (err) throw err
		callback(data)
	})
}


/*function print() {
	for (let i=0; i < arguments.length; i++) {
		process.stdout.write(String(arguments[i]))
	}
	console.log()
}*/
function print() {
	if (!process.stdout || !util.isFunction(process.stdout.write)) 
		throw new TypeError('Console expects a writable stream instance')
	process.stdout.write(util.format.apply(this, arguments) + '\n')
}


// Changing requireGlobal() implementation because
// module path should be from 
// reference to main Node script.
function requireGlobal(moduleName) {
	// requireGlobal('/directory1/directory2/module')
	// 'directory1' and 'directory2' are from
	// reference to the main Node script.
	var absLoc = process.cwd() + moduleName
	Object.entries(require(absLoc)).forEach(
		([name, exported]) => global[name] = exported 
	)
}
