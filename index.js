const axios = require('axios')
const pathToRegexp = require('path-to-regexp')
const url = require('url')

const raxios = axios.create()

raxios.interceptors.request.use(function (config) {
  let pathToCompile = ''
  let origin = ''

  try {
    const uri = url.parse(config.url)
    const { href } = uri
    origin = uri.origin
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
