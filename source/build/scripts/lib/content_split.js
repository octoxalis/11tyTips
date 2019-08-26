const content__a = ( content_s, id_s ) =>
{
  const content_a = content_s.split( `[//]:#(${id_s})` )
  const content_o = require( 'json5' ).parse( `{${content_a[0].trim()}}` )
  return [ content_a, content_o ]
}

module.exports = content__a
