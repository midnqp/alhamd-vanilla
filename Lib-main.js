const fs = require('fs'), 
			path = require('path'),
			util = require('util')


module.exports = {
	fileRead : fileRead,  //reads file in utf8, throws err
	fs : fs,
	path: path,
	print : print,  //console.log is too long to type
	requireGlobal : requireGlobal,  //adds everything of exported to global scope,
	evalRequire: evalRequire, 	// Parses and processes 'require' statements in html string.
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


function requireGlobal(moduleName) {
	Object.entries(require(moduleName)).forEach(
		([name, exported]) => global[name] = exported 
	)
}

/**
 * @author Spiff Jekey-Green
 */
 function evalRequire(str) {
    const reg = /<\s*require\s*>([^<]*)<\s*\/\s*require\s*>/gim;
    str = str.replace(reg, (i) => {
        return requireComp(reg.exec(i)[1].trim());
    })
    return str;
}

function requireComp(src = "") {
    try {
        const content = fs.readFileSync(path.join(__dirname, src), {encoding: "utf-8"});
        return content;
    } catch {
        // throw new ReferenceError(`'${src}' file not found`);
        // console.log('File not found')
        // Do proper logging here.
        return "";
    }
}

// const reqStr = `
// <require>/Main.js</require>
// The End of file`;

// console.log(evalRequire(reqStr));