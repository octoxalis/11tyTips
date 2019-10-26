const DOM_rootVar__s = var_s => window.getComputedStyle( document.documentElement ).getPropertyValue( var_s ) || ''

const DOM_rootVar = ( var_s, val_s ) => document.documentElement.style.setProperty( var_s, val_s )

const DOM_loader = ( selector_s, callback_f, delay_n=0 ) =>
{
  const iframe_e = document.querySelector( selector_s )
  iframe_e.addEventListener('load', () =>
    {
      iframe_e.before( (iframe_e.contentDocument.body||iframe_e.contentDocument).children[0])
      iframe_e.remove()
      if ( callback_f )
      {
        if ( delay_n ) window.setTimeout( callback_f, delay_n )
        else callback_f()
      }
    } )
}

const DOM_siblings__a = selector_s =>
{
  const node_e = document.querySelector( selector_s )
  return !node_e ?
    null :
    Array.prototype.filter
      .call( node_e.parentNode.children, sibling => sibling !== node_e )
}

/**
 * HTML:
 * <ol data--="selector">
 *   <li>primo</li>
 * </ol>
 * JS:
 * DOM_listReverse( '[data--="["selector"]' )
 * 
 */
const DOM_listReverse = selector_s =>
{
  const nodes_a = Array.prototype.slice.call(document.querySelectorAll( `${selector_s} li` ))
  nodes_a.forEach( node_e => node_e.parentNode.insertBefore( node_e, node_e.parentNode.firstChild ) )
}

const DOM_scrollToTop = () => window.scroll( { top: 0, left: 0, behavior: 'smooth' } )
