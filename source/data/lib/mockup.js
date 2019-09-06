/**
 * Lib mockup
 */
const _C = require( '../_C.js' )
const msg_s = `a useful collection`

module.exports =
{
  first__s: content_s =>
  {
    return `${_C.SITE_s}, ${msg_s}, ${content_s}`
  }
}
