const CALL_s = 'call_f'    //: callback function key

module.exports = ( block_o, block_s, id_s ) =>
{
  const keys_a = Object.keys( block_o )
  for( let at_n = 0; at_n < keys_a.length; ++at_n )
  {
    const key_s = keys_a[at_n]
    const regex_s = id_s ? `\\$\\{${id_s}.${key_s}\\}` : `\\$\\{${key_s}\\}`
    block_s = block_s.replace( new RegExp( regex_s, 'g' ),
    ( key_s === CALL_s ) ?
      eval( block_o[key_s] )( block_o )
      : block_o[key_s] )
  }
  return block_s
}
