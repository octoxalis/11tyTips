//> retrieve previous + next pages info
const linkNear__o = link_s =>
{
  const list_e = document.querySelector( `[data--="menu_list"]` )
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

//> insert in DOM previous + next pages info
//> show/hide previous + next pages info block
const linkNear__v = ( event_s, link_e ) =>
{
  if ( link_e === null ) return
  if ( event_s === 'mouseenter' )
  {
    const link_s = link_e.getAttribute( 'data--' )
    let title_s
    let abstract_s
    const near_o = linkNear__o( link_s )
    if ( near_o !== undefined )
    {
      title_s = `<a href="{{U_o.url_s}}${near_o.link_s}.html">${near_o.title_s} ⤴</a>`
      abstract_s = `<i>${near_o.abstract_s}</i>`
    }
    else
    {
      title_s = 'No more {{A_o.COLLECTION_s}}'
      abstract_s = ''
    }
    document.querySelector( '[data--="link_title"]' ).innerHTML = title_s
    document.querySelector( '[data--="link_abstract"]' ).innerHTML = abstract_s
}
  document.querySelector( '[data--="link_info"]' )
    .classList.toggle( 'retract' )
}

//> transform the link_s path part in a full URL
const linkURL__s = link_s =>
{
  const link_o = linkNear__o( link_s )
  return link_o ? `{{U_o.url_s}}${link_o.link_s}.html` : undefined
}

