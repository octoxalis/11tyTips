const path_s = '../../matter/assets/scripts/js/lib/'
const U_o = require( `${path_s}U_o.js` )
const C_o = require( `${path_s}C_o.js` )
const A_o = require( `${path_s}A_o.js` )

const order__s = order_n => `${('' + order_n).padStart( 4, '.' )}`

module.exports = menu_a =>
{
  const github_s = U_o.GIT_s ? C_o.h4_a__s( U_o.GIT_s, 'Github' ) : ''
  const twitter_s = U_o.TWI_s ? C_o.h4_a__s( U_o.TWI_s, 'Twitter' ) : ''
  const rss_s = U_o.RSS_s ? C_o.h4_a__s( U_o.RSS_s, 'RSS' ) : ''
  menu_a.sort( ( current_o, other_o ) => current_o.menu_n - other_o.menu_n )
  let order_n = 0
  let menu_s =
`
<menu data--="menu">
  <h3><a href="${U_o.url_s}">Home</a></h3>
  ${github_s}
  ${twitter_s}
  ${rss_s}
  <h2 data--="menu_order">${'All ' + A_o.COLLECTION_s + 's'}</h2>
  <ol data--="menu_list">
`
  for ( let entry_o of menu_a )
  {
    ++order_n    // index 1
    const link_s = `${U_o.url_s}${entry_o.permalink}`
    menu_s +=
`
    <li data--="menu_item">
      <span>${order__s( order_n )}</span>
      <span><a href="${link_s}">${entry_o.title_s}</a></span>
      <ins data--="inline_note"><sup></sup><span data--="note_content">${entry_o.abstract_s}</span></ins>
    </li>
`
  }

  menu_s +=
`
  </ol>
</menu>
`
  return menu_s
}
