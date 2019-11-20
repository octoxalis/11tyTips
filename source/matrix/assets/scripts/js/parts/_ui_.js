/**
 * UI events
 */
;( () =>
{
  //: load
  DOM_loader__v( '[data--="menu_frame"]', () =>
  {
/**
 * Set the menu element as high as the article element
 * to hide it
 */
    window
      .addEventListener('load', () =>
        document.querySelector( '[data--="menu"]' ).style.height =
          `${document.querySelector( '[data--="article"]' ).offsetHeight}px`
    )

/**
 * Handle menu order click
 * to sort posts by reverse order
 */
    document.querySelector( '[data--="menu_order"]' )
      .addEventListener('click', click_o =>
      {
        const menu_e = click_o.target.closest('menu')
        if ( menu_e ) DOM_listReverse__v( '[data--="menu_list"]' )
      } )
  } )

  //: click
/**
 * Handle menu click
 * to show/hide posts list
 */
  document.querySelector( '[data--="header"]' )
    .addEventListener('click', click_o => 
    {
      const menu_e = click_o.target.closest('label')
      if ( menu_e === null ) return
      const show_s = DOM_rootVar__s( '--MENU_SHOW' ) === '1' ? '0' : '1'
      DOM_rootVar__v( '--MENU_SHOW', show_s )
      comments_e = document.querySelector( '.utterances' )
      if ( comments_e !== null ) comments_e.classList.toggle( 'zero_height' )
      if ( show_s === '1' ) DOM_scrollToTop__v()
    } )
  
/**
 * Handle inline notes sup element click
 * to show/hide the note
 */
  document.querySelector( '[data--="article"]' )
    .addEventListener('click', click_o =>
      {
        const note_e = click_o.target.closest('ins')
        if ( note_e ) note_e.querySelector( '[data--="note_content"]' ).classList.toggle('note_open')
      } )

} )()
