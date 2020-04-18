"use strict";
exports.__esModule = true;
var jmespath = require("jmespath");
var core = require("@actions/core");
try {
    var json = core.getInput('json', { required: true });
    var query = core.getInput('query', { required: true });
    var output = jmespath.search(JSON.parse(json), query);
    core.setOutput('output', JSON.stringify(output));
}
catch (err) {
    core.setFailed(err.message);
}
