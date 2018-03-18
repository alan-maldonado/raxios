const axios = require('axios')
const pathToRegexp = require('path-to-regexp')
const { URL } = require('url')

const raxios = axios.create()

raxios.interceptors.request.use(function (config) {
  let pathToCompile = ''
  let origin = ''

  try {
    const url = new URL(config.url)
    const { href } = url
    origin = url.origin
    pathToCompile = href.replace(origin, '')
  } catch (e) {
    origin = ''
    pathToCompile = config.url
  }

  const toPath = pathToRegexp.compile(pathToCompile)
  const urlParams = config.urlParams || {}
  config.url = `${origin}${toPath(urlParams)}`
  return config
}, function (error) {
  return Promise.reject(error)
})

module.exports = raxios
