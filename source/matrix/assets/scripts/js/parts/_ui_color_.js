//> Open IndexedDB
//> to store UI base color + light/dark mode
const idb_o = new KVIdb( '{{A_o.ID_s}}_idb', '{{A_o.ID_s}}_store', )

const hueBase__v = hue_n =>    //: if page load, mode_n undefined (no parameter)
{
  idb_o.get__( 'hue_base' )
    .then( current_n =>
    {
      if ( hue_n === undefined ) hue_n = current_n || +'{{C_o.HUE_BASE_n}}'  //: at page load only
      idb_o.set__v( 'hue_base', hue_n )
      DOM_rootVar__v( '--c_hue_base', hue_n )
      console.log( `Base hue has been set to: ${hue_n}` )
    } )
}

const lightDark__v = mode_n =>    //: if page load, mode_n undefined (no parameter)
{
  idb_o.get__( 'light_dark' )
    .then( current_n =>
    {
      if ( mode_n === undefined ) mode_n = current_n || +'{{C_o.LIGHT_DARK_n}}'
      idb_o.set__v( 'light_dark', mode_n )
      DOM_rootVar__v( '--lum_mode', mode_n )
      console.log( `Luminosity mode has been set to: ${mode_n > 0 ? 'LIGHT' : 'DARK'} ` )
    } )
}
