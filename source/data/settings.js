const C = require( './lib/const.js' )

module.exports =
{
  _id:  C._ID,
  _url: C._URL,
  //_dev: C._DEV,

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

  links:
  {
    _11ty: `[11ty]: ${C._11TY}`,
  },
}
