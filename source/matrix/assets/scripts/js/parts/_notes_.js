const inlineNote__v = click_o =>
{
  const note_e = click_o.target.closest('INS')
  if ( note_e )
  {
    inlineImg__v( note_e )
    note_e.querySelector( '[data--="note_content"]' ).classList.toggle( 'note_open' )
  }
}

const inlineImg__v = note_e =>
{
  const img_e = note_e.querySelector('[data-src]')
  if ( img_e && !img_e.getAttribute( 'load_b' ) )
  {
    const size_s = img_e.getAttribute( 'data-size' )
    if ( size_s )
    {
      const [ width_s, height_s ] = size_s.split( ' ' )
      if ( !width_s ) return
      const widthUnit_s = ( `${parseInt( width_s )}`.length === width_s.length ) ? 'px' : ''
      let style_s = `width:${width_s}${widthUnit_s};`
      if ( height_s )
      {
        const heightUnit_s = ( `${parseInt( height_s )}`.length === height_s.length ) ? 'px' : ''
        style_s += ` height:${height_s}${heightUnit_s};`
      }
      if ( style_s ) img_e.setAttribute( 'style', style_s )
    }
    img_e.src = img_e.getAttribute( 'data-src' )
    img_e.setAttribute( 'load_b', true )
  }
}
