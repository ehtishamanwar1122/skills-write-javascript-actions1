const core = require('@actions/core');
const getJoke = require('./joke');

async function run() {
  try {
    const joke = await getJoke();
    core.setOutput('joke', joke);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
