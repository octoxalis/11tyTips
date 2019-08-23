const UIEvents = () =>
{
  //: load
  DOM_loader( '[data--="tips_list"]' )

  window
    .addEventListener('load',
    () => document.querySelector( '[data--="menu"]' ).style.height = `${document.querySelector( '[data--="article"]' ).offsetHeight}px`)

  //: click
  document.querySelector( '[data--="header_menu"]' )
    .addEventListener('click',
    () => DOM_rootVar( '--MENU_SHOW', DOM_rootVar__s( '--MENU_SHOW' ) === '1' ? '0' : '1' ) )
    
  document.querySelector( '[data--="article"]' )
    .addEventListener('click', ( click_o ) =>
      {
        const note_e = click_o.target.closest('ins')
        if ( note_e ) note_e.querySelector( '[data--="note_content"]' ).classList.toggle('note_open')
      } )
}