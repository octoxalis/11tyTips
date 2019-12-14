const inlineNote__v = click_o =>
{
  const note_e = click_o.target.closest('ins')
  if ( note_e ) note_e.querySelector( '[data--="note_content"]' ).classList.toggle('note_open')
}

/**
 * UI events
 */
void function ()
{
  //: load
  DOM_loader__v( '[data--="menu_frame"]', () =>
  {
    window
      .addEventListener('load', () =>
      {
/**
 * Set the menu element as high as the article element
 * to hide it
 */
        document.querySelector( '[data--="menu"]' ).style.height =
          `${document.querySelector( '[data--="article"]' ).offsetHeight}px`
/**
 * Handle menu inline notes sup element click
 * to show/hide the note
 */
        document.querySelector( '[data--="menu_list"]' )
          .addEventListener('click', inlineNote__v )
/**
 * Register service worker
 */
        if ( 'serviceWorker' in navigator ) window
          .addEventListener( 'load', service__v( '{{U_o.url_s}}{{U_o.SERVICE_PATH_s}}' ) )
    } )

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
  
  //: click
/**
 * Handle page link click
 */
const pageLink_e = document.querySelector( '[data--="page_link"]' )
if ( pageLink_e )
{
  pageLink_e.addEventListener('click', click_o => 
    {
      const link_e = click_o.target.closest('li')
      if ( link_e === null ) return
      let link_s = link_e.getAttribute( 'data--' )
      if ( link_s === 'current' ) return void DOM_scrollToTop__v()
      //: previous or next tip
      if ( _PageLink_a === null ) _PageLink_a = JSON.parse( document.querySelector('[data--="menu_a"]').innerHTML )
      const http_s = DOM_pageLink__s( link_s, _PageLink_a )
      if ( http_s ) window.location = http_s
    } )
}

/**
 * Handle article inline notes sup element click
 * to show/hide the note
 */
  document.querySelector( '[data--="article"]' )
    .addEventListener('click', inlineNote__v )

} ()
