const CALL_s = 'call_f'


const replace__s = ( content_o, content_s, id_s ) =>
{
  const keys_a = Object.keys( content_o )
  for( let at = 0; at < keys_a.length; ++at )
  {
    const key_s = keys_a[at]
    const string_s = id_s ? `\\$\\{${id_s}.${key_s}\\}` : `\\$\\{${key_s}\\}`
    content_s = content_s.replace( new RegExp( string_s, 'g' ),
    ( key_s === CALL_s ) ?
      eval( content_o[key_s] )( content_o )
      : content_o[key_s] )
  }
  return content_s
}

module.exports = replace__s
