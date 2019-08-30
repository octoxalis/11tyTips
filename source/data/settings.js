const _C = require( './_C.js' )

const SETTINGS_o =
{
  _dev: _C._DEV,
  _pro: _C._PRO,
  _git: _C._GIT,
  _twi: _C._TWI,
  
  _url: null,
  //_dev: true,
  _dev: false,

  distDirs:
  {
    input:    '.',
    output:   '../site',
    includes: 'includes/',
    data:     'data/',
  },

  tagDirs:
  {
    posts: 'posts/',
  },

}
;(() => SETTINGS_o._url = SETTINGS_o[SETTINGS_o._isDev === true ? '_dev' : '_pro'])()
console.log( `Site URL: ${SETTINGS_o._url}` )

module.exports = SETTINGS_o