const { HttpClient } = require('@actions/http-client');

const client = new HttpClient('joke-action');

async function getJoke() {
  const response = await client.getJson('https://icanhazdadjoke.com/', {
    Accept: 'application/json'
  });

  return response.result.joke;
}

module.exports = getJoke;
