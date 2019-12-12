/*
 * Functions
 * Naming scheme: function__s
 */
const U_o = require( './U_o.js' )

module.exports =
{
  siteUrl__s: ( file_s, dir_s='tips/' ) => `[${file_s.replace('_', ' ')}]: ${U_o.url_s}${dir_s}${file_s}.html`,

  eleventyUrl__s: key_s =>
  {
    const path_s = U_o[ `ELEVENTY_${key_s}` ]
    const anchor_n = path_s.indexOf( '#')
    if ( anchor_n === -1 )    //: return a link to 11ty.io
    {
      console.log( `ALERT! no anchor found in path: ${path_s}` )
      const ref_n = U_o.ELEVENTY_s.indexOf( ':' )
      return { ref: U_o.ELEVENTY_s.substring( 0, ref_n ), link: U_o.ELEVENTY_s }
    }
    const anchor_s = path_s.substring( anchor_n )
    const anchorLink_s = U_o.ELEVENTY_s.replace( ']', `${anchor_s}]`) + path_s
    return { ref: anchorLink_s.substring( 0, anchorLink_s.indexOf( ':') ), link: anchorLink_s }
  },

  tagEscape__s: content_s => content_s.replace( /</g, '&lt;' ).replace( />/g, '&gt;' )
  ,

}
