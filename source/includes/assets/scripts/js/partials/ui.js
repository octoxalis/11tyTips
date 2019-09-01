/**
 * UI events
 */
;( () =>
{
  //: load
  DOM_loader( '[data--="menu_frame"]', () =>
  {
/**
 * Handle menu order click
 * to sort tips by reverse order
 */
  document.querySelector( '[data--="tips_order"]' )
    .addEventListener('click', ( click_o ) =>
    {
      const menu_e = click_o.target.closest('menu')
      if ( menu_e ) DOM_listReverse( '[data--="tips_list"]' )
    } )
  } )

/**
 * Set the menu element as high as the article element
 * to hide it
 */
  window
    .addEventListener('load',
    () => document.querySelector( '[data--="menu"]' ).style.height = `${document.querySelector( '[data--="article"]' ).offsetHeight}px`)

  //: click
/**
 * Handle menu click
 * to show/hide tips list
 */
  document.querySelector( '[data--="header"]' )
    .addEventListener('click', click_o => 
    {
      const menu_e = click_o.target.closest('label')
      if ( menu_e === null ) return
      DOM_rootVar( '--MENU_SHOW', DOM_rootVar__s( '--MENU_SHOW' ) === '1' ? '0' : '1' )
    } )
  
/**
 * Handle inline notes sup element click
 * to show/hide the note
 */
  document.querySelector( '[data--="article"]' )
    .addEventListener('click', ( click_o ) =>
      {
        const note_e = click_o.target.closest('ins')
        if ( note_e ) note_e.querySelector( '[data--="note_content"]' ).classList.toggle('note_open')
      } )

} )()
