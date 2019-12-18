/**
 * _link_page_.js
 */

let linkNear_a = []    //: [ prev_o, next_o ]


const linkNear__a = link_o =>
{
  if ( link_o === undefined ) return
  const { rank_n } = link_o
  let prev_o
  let next_o
  let link_s, title_s, subtitle_s, abstract_s
  if ( rank_n > 1 )    //: rank_n [ 1..._COLLECTION_a.length ]
  {
    ( { link_s, title_s, subtitle_s, abstract_s } = _COLLECTION_a[rank_n - 2] )
    prev_o = { link_s: link_s, title_s: title_s, subtitle_s: subtitle_s, abstract_s: abstract_s  }
  }
  if ( rank_n < _COLLECTION_a.length )
  {
    ( { link_s, title_s, subtitle_s, abstract_s } = _COLLECTION_a[rank_n] )
    next_o = { link_s: link_s, title_s: title_s, subtitle_s: subtitle_s, abstract_s: abstract_s  }
  }
  linkNear_a = [ prev_o, next_o ]
}

const linkNearShow__v = ( event_s, link_e ) =>
{
  if ( link_e === null ) return
  if ( event_s === 'mouseenter' )
  {
    const link_s = link_e.getAttribute( 'data--' )
    let title_s = 'No more {{A_o.COLLECTION_s}}'
    //xx let subtitle_s = ''
    let abstract_s = ''
    const near_o = linkNear_a[( link_s === 'link_previous' ) ? 0 : 1]
    if ( near_o === undefined )
    {
      document.querySelector( '[data--=link_title]' ).innerHTML = title_s
      //xx document.querySelector( '[data--=link_subtitle]' ).innerHTML = subtitle_s
      document.querySelector( '[data--=link_abstract]' ).innerHTML = abstract_s
    }
    else
    {
      document.querySelector( '[data--=link_title]' ).innerHTML = `${near_o.title_s} ⤴`
      //xx document.querySelector( '[data--=link_subtitle]' ).innerHTML = near_o.subtitle_s
      document.querySelector( '[data--=link_abstract]' ).innerHTML = `<i>${near_o.abstract_s}</i>`
    }
  }
  document.querySelector( '[data--=link_info]' )
    .classList.toggle( 'retract' )
}


const linkPage__a = ( key_s, collection_a ) =>
{
  const link_o = collection_a.find( link_o => link_o.link_s === key_s )
  if ( link_o )
  {
    const at_n = link_o.rank_n    //: rank_n [ 1..._COLLECTION_a.length ]
    const prev_n = at_n ? at_n - 1 : null
    const next_n = ( at_n < collection_a.length ) ? at_n + 1 : null
    return [ prev_n, next_n ]
  }
  return []
}

const linkPageURL__s = ( link_s, collection_a ) =>
{
  const [ prev_n, next_n ] = linkPage__a( DOM_locationKey__s(), collection_a )
  let index_n = ( ( link_s === 'link_previous' ) ? prev_n : next_n ) - 1    //: rank_n [ 1..._COLLECTION_a.length ]
  return ( index_n < 0 ) ? '' : `${_URL_s}${collection_a[index_n].link_s}.html`
}


const linkPage__o = () =>
{
  if ( _COLLECTION_a === null ) _COLLECTION_a = JSON.parse( document.querySelector('[data--=collection_a]').innerHTML )
  if ( !_COLLECTION_a ) return null
  const extension_n = '.html'.length
  const location_s = window.location.pathname.slice( 1, -extension_n )  //: trim '/' at start
  return _COLLECTION_a.find( link_o => link_o.link_s === location_s )
}

const linkPage__v = () => linkNear__a( linkPage__o() )
