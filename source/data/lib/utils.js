const _C = require( '../_C.js' )
const settings = require( '../settings.js' )

module.exports =
{
  siteUrl__s: ( file_s, dir_s='tips/' ) =>
  {
    return `[${file_s.replace('_', ' ')}]: ${settings.url_s}${dir_s}${file_s}.html`
  },
}
