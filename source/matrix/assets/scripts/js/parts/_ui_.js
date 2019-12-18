const inlineNote__v = click_o =>
{
  const note_e = click_o.target.closest('ins')
  if ( note_e ) note_e.querySelector( '[data--=note_content]' ).classList.toggle( 'note_open' )
}

const menuPosition__v = () =>
{
  const menu_e = document.querySelector( `[data--=menu]` )
  const header_n = document.querySelector( `[data--=header]` ).offsetHeight
  const linkPage_n = document.querySelector( `[data--=link_page]` ).offsetHeight
  menu_e.style.transform = `translateY( ${header_n + linkPage_n}px)`
  const menu_n = menu_e.offsetHeight
  const article_n = document.querySelector( `[data--=article]` ).offsetHeight
  if ( menu_n < article_n ) menu_e.style.height = `${article_n * 1.5}px`
}

/**
 * UI events
 */
void function ()
{
  //: load
  DOM_loader__v( '[data--=menu_iframe]', () =>
  {
    window
      .addEventListener('load', () =>
      {
        menuPosition__v()

//: Menu inline notes sup element click handler
//: to show/hide the note

        document.querySelector( '[data--=menu_list]' )
          .addEventListener('click', inlineNote__v )

//: Register service worker

        if ( 'serviceWorker' in navigator ) window
          .addEventListener( 'load', service__v( '{{U_o.url_s}}{{U_o.SERVICE_PATH_s}}' ) )

//: Register posts list
        linkPage__v()
      } )

/**
 * Menu order click handler
 * to sort posts by reverse order
 */
    document.querySelector( '[data--=menu_order]' )
      .addEventListener('click', click_o =>
      {
        const menu_e = click_o.target.closest('menu')
        if ( menu_e ) DOM_listReverse__v( '[data--="menu_list"]' )
      } )
  } )

  //: click
/**
 * Show/hide posts list
 */
  const menu__v = () =>
  {
    const show_s = DOM_rootVar__s( '--MENU_SHOW' ) === '1' ? '0' : '1'
    DOM_rootVar__v( '--MENU_SHOW', show_s )
    comments_e = document.querySelector( '.utterances' )
    if ( comments_e !== null ) comments_e.classList.toggle( 'retract' )
    const menu_e =document.querySelector( `[data--=menu]` )
    if ( show_s === '1' )
    {
      menu_e.classList.remove( 'no_pointer' )
      DOM_scrollToTop__v()
    }
    else menu_e.classList.add( 'no_pointer' )
  }

/**
 * Page link click+hover handler
 * to show menu or go to another page
 */
  const linkNav_e = document.querySelector( '[data--=link_nav]' )
  if ( linkNav_e != null )
  {
    linkNav_e.addEventListener('click', click_o => 
    {
      const link_e = click_o.target.closest('LI')
      if ( link_e === null ) return
      let link_s = link_e.getAttribute( 'data--' )
      if ( link_s === 'link_menu' ) return void menu__v()
      //: previous or next tip
      const http_s = linkPageURL__s( link_s, _COLLECTION_a )
      if ( http_s ) window.location = http_s
    } )

    document.querySelectorAll( '[data--=link_nav] > li' )
      .forEach( buttonLink_e =>
      {
        if ( buttonLink_e.getAttribute( 'data--' ) === 'link_menu' ) return
        [ 'mouseenter', 'mouseleave' ]
          .forEach( event_s => buttonLink_e.addEventListener( event_s,
            mouse_o => linkNearShow__v( event_s, mouse_o.currentTarget ) ) )
      } )
  }

/**
 * Article inline notes sup element click handler
 * to show/hide notes
 */
  document.querySelector( '[data--=article]' )
    .addEventListener('click', inlineNote__v )

/**
 * Comments visibility click handler
 * to show/hide comments
 */
  document.querySelector( '[data--=comments_visibility]' )
  .addEventListener('click', click_o =>
  {
    document.querySelector( '[data--=comments]' )
      .classList.toggle( 'retract' )
  } )

} ()
