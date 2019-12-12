const U_o = require( '../../matter/assets/scripts/js/lib/U_o.js' )
const C_o = require( '../../matter/assets/scripts/js/lib/C_o.js' )
const A_o = require( '../../matter/assets/scripts/js/lib/A_o.js' )

const rank__s = at_n => `#${('' + at_n).padStart( 3, '0' )}`

module.exports = list_a =>
{
  //... sort according to list_a[0].date
  //...
  let tip_n = 0
  let list_s =
`
<menu data--="menu">
  <h3><a href="${U_o.url_s}">Home</a></h3>
  ${C_o.h4_a__s( U_o.GIT_s, 'Github' )}
  ${C_o.h4_a__s( U_o.TWI_s, 'Twitter' )}
  ${C_o.h4_a__s( U_o.RSS_s, 'RSS' )}
  <h2 data--="menu_order">${'All ' + A_o.COLLECTION_s + 's'}</h2>
  <ol data--="menu_list">
`
  for ( let at_n = 0; at_n < list_a.length; ++at_n )
  {
    if ( list_a[at_n].tags.includes( 'tip' ) )
    {
      ++tip_n    // index 1
      const link_s = `${U_o.url_s}${list_a[at_n].permalink}`
      list_s +=
`
    <li data--="menu_item">
      <span>${rank__s( tip_n )}</span>
      <span><a href="${link_s}">${list_a[at_n].title_s}</a></span>
      <ins data--="inline_note"><sup></sup><span data--="note_content">${list_a[at_n].subtitle_s}</span></ins>
    </li>
`
    }
  }

  list_s +=
`
  </ol>
</menu>
`
  return list_s
}
