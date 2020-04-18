import jmespath from 'jmespath'
import core from '@actions/core'


try {
    const json: string = core.getInput('json', { required: true });
    const query: string = core.getInput('query', { required: true });
    const output: any = jmespath.search(JSON.parse(json), query);
    core.setOutput('output', JSON.stringify(output));
} catch (err) {
    core.setFailed(err.message);
}

