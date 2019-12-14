const DOM_rootVar__s = var_s => window.getComputedStyle( document.documentElement ).getPropertyValue( var_s ) || ''

const DOM_rootVar__v = ( var_s, val_s ) => document.documentElement.style.setProperty( var_s, val_s )

const DOM_loader__v = ( selector_s, callback__, delay_n=0 ) =>
{
  const iframe_e = document.querySelector( selector_s )
  iframe_e.addEventListener('load', () =>
    {
      iframe_e.before( (iframe_e.contentDocument.body||iframe_e.contentDocument).children[0])
      iframe_e.remove()
      if ( callback__ )
      {
        if ( delay_n ) window.setTimeout( callback__, delay_n )
        else callback__()
      }
    } )
}

const DOM_siblings__a = selector_s =>
{
  const node_e = document.querySelector( selector_s )
  return !node_e ?
    null :
    Array.prototype.filter
      .call( node_e.parentNode.children, sibling_e => sibling_e !== node_e )
}

/**
 * HTML:
 * <ol data--="selector">
 *   <li>primo</li>
 * </ol>
 * JS:
 * DOM_listReverse__v( '[data--="["selector"]' )
 * 
 */
const DOM_listReverse__v = selector_s =>
{
  const nodes_a = Array.prototype.slice.call(document.querySelectorAll( `${selector_s} li` ))
  nodes_a.forEach( node_e => node_e.parentNode.insertBefore( node_e, node_e.parentNode.firstChild ) )
}

const DOM_scrollToTop__v = () => window.scroll( { top: 0, left: 0, behavior: 'smooth' } )

const DOM_locationKey__s = () =>
{
  const extension_n = '.html'.length
  let location_s = window.location.href
  const key_s = location_s.slice( location_s.indexOf( '{{A_o.COLLECTION_s}}'), -extension_n )
  return key_s
}

const DOM_pageLink__a = ( key_s, link_a ) =>
{
  for ( at_n = 0; at_n < link_a.length; ++at_n )
  {
    if ( link_a[at_n].link_s === key_s )
    {
      const prev_n = at_n ? at_n - 1 : null
      const next_n = ( at_n < link_a.length - 1 ) ? at_n + 1 : null
      return [ prev_n, next_n ]
    }
  }
  return []
}

const DOM_pageLink__s = ( link_s, link_a ) =>
{
  const [ prev_n, next_n ] = DOM_pageLink__a( DOM_locationKey__s(), link_a )
  let index_n = ( link_s === 'prev' ) ? prev_n : next_n
  return ( !index_n ) ? '' : `${_URL_s}${link_a[index_n].link_s}.html`
  
}
