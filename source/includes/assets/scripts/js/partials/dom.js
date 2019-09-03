const DOM_rootVar__s = ( var_s ) => window.getComputedStyle( document.documentElement ).getPropertyValue( var_s ) || ''

const DOM_rootVar = ( var_s, val_s ) => document.documentElement.style.setProperty( var_s, val_s )

const DOM_loader = ( selector_s, callback_f ) =>
{
  const iframe_e = document.querySelector( selector_s )
  iframe_e.addEventListener('load', () =>
    {
      iframe_e.before( (iframe_e.contentDocument.body||iframe_e.contentDocument).children[0])
      iframe_e.remove()
      if ( callback_f ) callback_f()
    } )
}

const DOM_siblings__a = ( selector_s ) =>
{
  const element_e = document.querySelector( selector_s )
  return !element_e ?
    null :
    Array.prototype.filter
      .call( element_e.parentNode.children, sibling => sibling !== element_e )
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
  const items_a = Array.prototype.slice.call(document.querySelectorAll( `${selector_s} li` ))
  items_a.forEach( item_e => item_e.parentNode.insertBefore( item_e, item_e.parentNode.firstChild ) )
}

const DOM_scrollToTop = () =>
{
  window.scroll( { top: 0, left: 0, behavior: 'smooth' } )
}
