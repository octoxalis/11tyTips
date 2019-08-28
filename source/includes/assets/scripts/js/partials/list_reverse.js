/**
 * HTML:
 * <ol data--="selector">
 *   <li>primo</li>
 * </ol>
 * JS:
 * DOM_listReverse( [data--="["selector"] )
 * 
 */
const DOM_listReverse = selector_s =>
{
  const items_a = Array.prototype.slice.call(document.querySelectorAll( `${selector_s} li` ))
  items_a.forEach( item_e => item_e.parentNode.insertBefore( item_e, item_e.parentNode.firstChild ) )
}
