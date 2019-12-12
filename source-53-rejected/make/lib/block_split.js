module.exports = ( block_s, id_s ) =>
{
  const block_a = block_s.split( `[//]:#(${id_s})` )
  const block_o = require( 'json5' ).parse( `{${block_a[0].trim()}}` )
  return [ block_a, block_o ]
}
