const _C = require( '../_C.js' )

/**
 * Lib mockup
 */
const msg_s = `a useful collection`

module.exports =
{
  first__s: ( content_s ) =>
  {
    return `${_C.ID_s}, ${msg_s}, ${content_s}`
  }
}
