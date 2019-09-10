const _C = require( '../_C.js' )
const settings = require( '../settings.js' )

module.exports =
{
  siteUrl__s: ( file_s, dir_s='tips/' ) => `[${file_s.replace('_', ' ')}]: ${settings.url_s}${dir_s}${file_s}.html`,

  EleventyLink__s: ( key_s ) =>
  {
    const path_s = _C[ `eleventy_${key_s}` ]
    const anchor_n = path_s.indexOf( '#')
    if ( anchor_n === -1 )
    {
      console.log( `No anchor found in path ${path_s}` )
      return
    }
    const anchor_s = path_s.substring( anchor_n )
    const anchorLink_s = _C.ELEVENTY_s.replace( ']', `${anchor_s}]`) + path_s
    return [anchorLink_s.substring( 0, anchorLink_s.indexOf( ':') ), anchorLink_s]
  }
}
