/*
*
*/
const CALL_s = 'call_f'

const callTest__s = ( content_o ) => `<span class="light">Callback</span> is there: ${content_o.id_n}`

const Render_o =
{
  replace__s: ( component_s, content_o, content_s ) =>
  {
    const keys_a = Object.keys( content_o )
    for( let at = 0; at < keys_a.length; ++at )
    {
      const key_s = keys_a[at]
      content_s = content_s.replace( new RegExp( `\\$\\{${component_s}.${key_s}\\}`, 'g' ),
//      ( key_s === CALL_s ) ? eval( content_o[key_s] )( content_o ) : content_o[key_s] )
      ( key_s === CALL_s ) ?
        eval( content_o[key_s] )( content_o )
        : content_o[key_s] )
    }
    return content_s
  },
  
  
}

module.exports = Render_o
