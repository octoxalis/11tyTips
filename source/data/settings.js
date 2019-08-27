const _C = require( './_C.js' )

const SETTINGS_o =
{
  _dev: _C._DEV,
  _pro: _C._PRO,
  _url: null,
  //_isDev: true,
  _isDev: false,

  distDirs:
  {
    input:      '.',
    output:     '../site',
    includes:   'includes/',
    data:       'data/',
    scripts:    'assets/scripts/',
    styles:     'assets/styles/',
  },

  tagDirs:
  {
    posts:      'posts/',
  },

}
;(() => SETTINGS_o._url = SETTINGS_o[SETTINGS_o._isDev ? '_dev' : '_pro'])()

module.exports = SETTINGS_o