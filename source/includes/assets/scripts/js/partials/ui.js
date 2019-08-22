const UIEvents = () =>
{
  //: load events
  DOM_loader( '[data--="tips_list"]' )

  window
    .addEventListener('load',
    () => document.querySelector( '[data--="menu"]' ).style.height = `${document.querySelector( '[data--="article"]' ).offsetHeight}px`)
  //: click events
  document.querySelector( '[data--="header_menu"]' )
    .addEventListener('click',
    () => DOM_rootVar( '--MENU_SHOW', DOM_rootVar__s( '--MENU_SHOW' ) === '1' ? '0' : '1' ) )
    
  document.querySelector( '[data--="article"]' )
    .addEventListener('click',
    ( event_o ) =>
    {
      const target_e = event_o.target
      if ( target_e.getAttribute( 'data--' ) === 'inline_note' )
      {
        target_e.querySelector( '[data--="note_content"]' ).classList.toggle('note_open')
      }
    } )
}