const axios = require('axios')
const pathToRegexp = require('path-to-regexp')
const url = require('url')

const raxios = axios.create()

raxios.interceptors.request.use(function (config) {
  let port
  try {
    port = url.parse(config.url).port
  } catch (e) {}

  const toPath = pathToRegexp.compile(config.url)
  const urlParams = config.urlParams || {}
  if (port) {
    urlParams[port] = ':' + port
  }

  config.url = toPath(urlParams)
  return config
}, function (error) {
  return Promise.reject(error)
})

module.exports = raxios
