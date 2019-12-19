const inlineNote__v = click_o =>
{
  const note_e = click_o.target.closest('INS')
  if ( note_e ) note_e.querySelector( '[data--="note_content"]' ).classList.toggle( 'note_open' )
}

const menuPosition__v = () =>
{
  const menu_e = document.querySelector( `[data--="menu"]` )
  let position_n = document.querySelector( `[data--="header"]` ).offsetHeight
  position_n += document.querySelector( `[data--="link_page"]` ).offsetHeight
  menu_e.style.transform = `translateY( ${position_n}px)`
  const menu_n = menu_e.offsetHeight
  const article_n = document.querySelector( `[data--="article"]` ).offsetHeight
  if ( menu_n < article_n ) menu_e.style.height = `${article_n * 1.5}px`
}

const comments__v = () =>
{
  const comments_e = document.querySelector( '[data--="comments"]' )
  if ( !comments_e.hasChildNodes() )
  {
    const script_e = document.createElement( 'script' )
    script_e.setAttribute( 'data--', 'comments_script' )
    script_e.setAttribute( 'src', 'https://utteranc.es/client.js' )
    script_e.setAttribute( 'repo', '{{ A_o.AUTHOR_s }}/{{ A_o.ID_s.toLowerCase() }}' )
    script_e.setAttribute( 'issue-term', 't' )
    script_e.setAttribute( 'theme', 'photon-dark' )
    script_e.setAttribute( 'crossorigin', 'anonymous' )
    script_e.setAttribute( 'async', true )
    comments_e.appendChild( script_e )
  }
  comments_e.classList.toggle( 'retract' )
}

const linkNear__o = link_s =>
{
  const list_e = document.querySelector( `[data--="menu_list"]` )
  if ( !list_e ) return    //: undefined
  const extension_n = '.html'.length
  const location_s = window.location.pathname.slice( 1, -extension_n )  //: trim '/' at start
  const list_a = document.querySelectorAll( `[data--="menu_list"] > li` )
  if ( !list_a ) return     //: undefined
  const list_n = list_a.length
  const current_e = list_e.querySelector( `[data-link="${location_s}"]` )
  const rank_n = +current_e.getAttribute( 'data-rank' )
  const near_n = ( link_s === 'link_previous' ) ? rank_n - 1 : rank_n + 1
  if ( near_n < 1 || near_n > list_n ) return     //: undefined
  const near_e = list_e.querySelector( `[data-rank="${near_n}"]` )
  if ( !near_e ) return     //: undefined
  const a_e = near_e.querySelector( `span > a` )
  if ( !a_e ) return     //: undefined
  const span_e = near_e.querySelector( `span[data--="note_content"]` )
  if ( !a_e ) return     //: undefined
  return {
    link_s:     near_e.getAttribute( 'data-link' ),
    title_s:    a_e.innerHTML,
    //?? subtitle_s: '',
    abstract_s: span_e.innerHTML,
  }
}

const linkNear__v = ( event_s, link_e ) =>
{
  if ( link_e === null ) return
  if ( event_s === 'mouseenter' )
  {
    const link_s = link_e.getAttribute( 'data--' )
    let title_s = 'No more {{A_o.COLLECTION_s}}'
    //?? let subtitle_s = ''
    let abstract_s = ''
    const near_o = linkNear__o( link_s )
    if ( near_o === undefined )
    {
      document.querySelector( '[data--="link_title"]' ).innerHTML = title_s
      //?? document.querySelector( '[data--="link_subtitle"]' ).innerHTML = subtitle_s
      document.querySelector( '[data--="link_abstract"]' ).innerHTML = abstract_s
    }
    else
    {
      document.querySelector( '[data--="link_title"]' ).innerHTML =
      `<a href="{{U_o.url_s}}${near_o.link_s}.html">${near_o.title_s} ⤴</a>`
      //?? document.querySelector( '[data--="link_subtitle"]' ).innerHTML = near_o.subtitle_s
      document.querySelector( '[data--="link_abstract"]' ).innerHTML = `<i>${near_o.abstract_s}</i>`
    }
  }
  document.querySelector( '[data--="link_info"]' )
    .classList.toggle( 'retract' )
}

const linkURL__s = link_s =>
{
  const link_o = linkNear__o( link_s )
  return link_o ? `{{U_o.url_s}}${link_o.link_s}.html` : undefined
}

/**
 * UI events
 */
void function ()
{
  //: load
  DOM_loader__v( '[data--="menu_iframe"]', () =>
  {
    window
      .addEventListener('load', () =>
      {
//: Menu inline notes sup element click handler
//: to show/hide the note
        document.querySelector( '[data--="menu_list"]' )
          .addEventListener('click', inlineNote__v )
      } )

//: Menu order click handler
//: to sort posts by reverse order
    document.querySelector( '[data--="menu_order"]' )
      .addEventListener('click', click_o =>
      {
        const menu_e = click_o.target.closest('menu')
        if ( menu_e ) DOM_listReverse__v( '[data--="menu_list"]' )
      } )

//: adjust positin + height of menu
    menuPosition__v()
  } )

/**
 * Register service worker
 * */
  if ( 'serviceWorker' in navigator ) window
    .addEventListener( 'load', service__v( '{{U_o.url_s}}{{U_o.SERVICE_PATH_s}}' ) )
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
    const menu_e =document.querySelector( `[data--="menu"]` )
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

/**
 * Article inline notes sup element click handler
 * to show/hide notes
 */
  document.querySelector( '[data--="article"]' )
    .addEventListener('click', inlineNote__v )

/**
 * Comments visibility click handler
 * to show/hide comments
 */
  document.querySelector( '[data--="comments_visibility"]' )
  .addEventListener('click', click_o =>
  {
    comments__v()
  } )

} ()
