/**
 * UI events
 */
void function ()
{
  DOM_loader__v( '[data--="menu_iframe"]', () =>
  {
//> Menu inline notes sup element click handler
//> to show/hide the note
    window.addEventListener('load', () =>
      {
        document.querySelector( '[data--="menu_list"]' )
          .addEventListener('click', inlineNote__v )
      } )

//> Menu order click handler
//> to sort posts by reverse order
    document.querySelector( '[data--="menu_order"]' )
      .addEventListener('click', click_o =>
      {
        const menu_e = click_o.target.closest('menu')
        if ( menu_e ) DOM_listReverse__v( '[data--="menu_list"]' )
      } )

//> adjust menu height + position
    menuPosition__v()
  } )


//> register service worker
  if ( 'serviceWorker' in navigator ) window
    .addEventListener( 'load', service__v( '{{U_o.url_s}}{{U_o.SERVICE_PATH_s}}' ) )

//> Page link click+hover handler
//> to show menu or go to another page
  const linkNav_e = document.querySelector( '[data--="link_nav"]' )
  if ( linkNav_e != null )
  {
    linkNav_e.addEventListener('click', click_o => 
    {
      const link_e = click_o.target.closest('LI')
      if ( link_e === null ) return
      let link_s = link_e.getAttribute( 'data--' )
      if ( link_s === 'link_menu' ) return void menu__v()
      //: previous or next tip
      const http_s = linkURL__s( link_s )
      if ( http_s ) window.location = http_s
    } )

    document.querySelectorAll( '[data--="link_nav"] > li' )
      .forEach( buttonLink_e =>
      {
        if ( buttonLink_e.getAttribute( 'data--' ) === 'link_menu' ) return
        [ 'mouseenter', 'mouseleave' ]
          .forEach( event_s => buttonLink_e.addEventListener( event_s,
            mouse_o => linkNear__v( event_s, mouse_o.currentTarget ) ) )
      } )
  }

//> Article inline notes sup element click handler
//> to show/hide notes
  document.querySelector( '[data--="article"]' )
    .addEventListener('click', inlineNote__v )

//> Comments visibility click handler
//> to show/hide comments
  document.querySelector( '[data--="comments_visibility"]' )
    .addEventListener('click', click_o => comments__v() )

} ()
