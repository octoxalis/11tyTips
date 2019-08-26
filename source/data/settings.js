const CONST = require( './lib/const.js' )

module.exports =
{
  siteId:      CONST.SITE_ID,
  //siteUrl:     SITE_URL,
  devUrl:      CONST.DEV_URL,

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

  E11Url: `[11ty]: ${CONST._11TY_URL}`,
}
