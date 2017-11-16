const axios = require('axios')
const pathToRegexp = require('path-to-regexp')

const raxios = axios.create()

raxios.interceptors.request.use(function (config) {
  const toPath = pathToRegexp.compile(config.url)
  const urlParams = config.urlParams || {}
  config.url = toPath(urlParams)
  return config
}, function (error) {
  return Promise.reject(error)
})

module.exports = raxios
