const inlineNote__v = click_o =>
{
  const note_e = click_o.target.closest('INS')
  if ( note_e ) note_e.querySelector( '[data--="note_content"]' ).classList.toggle( 'note_open' )
}

