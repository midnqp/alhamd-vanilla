/* HOT RELOAD FUNCTION */
const childProcess = require("child_process");
const path = require("path");
const fs = require("fs");

fs.watch(__dirname, {
    encoding: "utf-8",
    persistent: true,
    recursive: true
}, handleFileWatch);

let server;

const extensionsToWatch = ["js", "jsx", "json", "mjs", "html", "htm", "css", "scss"];
const getExtension = str => {
    const splited = str.split(".");
    return splited[splited.length - 1];
}

runServer(false);

function runServer(restarting = true) {
    server = childProcess.fork(path.join(__dirname, "Main.js"));
    console.log("-".repeat(35));
    console.log("[Frameworkless] 0.0.0");
    restarting ? console.log("[Frameworkless] restarting frameworkless...") : console.log("[Frameworkless] Starting Frameworkless...");
    console.log("[Frameworkless] watching path(s): *.*");
    console.log("[Frameworkless] watching extensions: " + extensionsToWatch.toString().replace(/,/g, ", "));
}

function handleFileWatch(evt, filename) {
    if(extensionsToWatch.includes(getExtension(filename))) {
        server.kill("SIGINT");
        runServer();
    }
}