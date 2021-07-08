// Please write the test cases for each function.

const fs = require("fs");
const path = require("path");

function evalRequire(str) {
    str = str.replace(/<\s*require\s+([a-zA-Z]+\s*=".*"\s*)*>/g, (f) => {
        const propString = f.match(/[a-zA-Z_]+\s*=\s*"[-a-zA-Z\s\/\.0-9]*"\s*/g);
        let props = Object.create(null);
        propString.forEach(i => {
            let [name, value] = i.split("=");
            name = name.trim();
            value = value.trim();
            value = value.slice(1, value.length - 1);
            props[name.trim()] = value;
        });
        const src = props["src"];
        delete props.src;
        console.log("Src: ", src);
        console.log("Props: ", props);
        return requireComp(src, props);
    });
    return str;
}

function requireComp(src = "", props = {}) {
    const content = fs.readFileSync(path.join(__dirname, src), {encoding: "utf-8"});
    console.log(content);
    return content;
}

function evalNodeCode(str) {
    str = str.replace(/<\s*script\s+nodejs\s*>([\s.\d]*)<\/script>*/g, (i, g, m) => {
        console.log("i: ", i);
        console.log("g: ", g);
        console.log("m: ", m);
    });
}

const reqStr = `<require src="/License" name="spiff Jekey Green" age="343" >`;
const nodeCode = `
<p>Hello world this is frameworkless</p>
<script nodejs>
    console.log("Hello from frameworkless");
    1 + 3;
</script>
`

// console.log(evalRequire(reqStr));
console.log(evalNodeCode(nodeCode));