const shortNote__v = click_o =>
{
  const note_e = click_o.target.closest('INS')
  if ( note_e )
  {
    shortImg__v( note_e )    //: try for img
    note_e.querySelector( '[data--="note_content"]' ).classList.toggle( 'note_open' )
  }
}

const shortImg__v = note_e =>
{
  const img_e = note_e.querySelector('[data-src^="http"]')
  if ( !img_e ) return    //: already called

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
    if ( style_s )
    {
      let currentStyle_s = img_e.getAttribute( 'style' )
      img_e.setAttribute( 'style', `${currentStyle_s || '' } ${style_s}` )
    }
  }
  
  img_e.decoding = 'async'
  img_e.src = img_e.getAttribute( 'data-src' )
  img_e.setAttribute( 'data-src', '' )    //: next querySelector call will be false
}

const loadColorImg__v = ( button_e, gray_s='gray', color_s='color' ) =>
{
  const note_e = button_e.closest( '.note_open' )
  const img_e = note_e.querySelector( 'img' )
  const src_s = img_e.getAttribute( 'src' )
  if ( !src_s.includes( gray_s ) ) return
  img_e.src = src_s.replace( gray_s, color_s )
  note_e.classList.toggle( 'note_open' )
}
