const path_s = '../../matter/assets/scripts/js/lib/'
const U_o = require( `${path_s}U_o.js` )
const C_o = require( `${path_s}C_o.js` )

const collection_s = require( `${path_s}A_o.js` ).COLLECTION_s + 's'
const pad__s = order_n => `${('' + order_n).padStart( 4, '.' )}`

module.exports =
{
  menu__a: menu_a =>
  {
    const github_s = U_o.GIT_s ? C_o.h4_a__s( U_o.GIT_s, 'Github' ) : ''
    const twitter_s = U_o.TWI_s ? C_o.h4_a__s( U_o.TWI_s, 'Twitter' ) : ''
    const rss_s = U_o.RSS_s ? C_o.h4_a__s( U_o.RSS_s, 'RSS' ) : ''
    let order_n = 0
    let menu_s =
`
<menu data--="menu">
  <h3><a href="${U_o.url_s}">Home</a></h3>
  ${github_s}
  ${twitter_s}
  ${rss_s}
  <h2 data--="menu_order">All ${collection_s}</h2>
  <ol data--="menu_list">
`
    for ( let entry_o of menu_a )
    {
      ++order_n    // index 1
      const link_s = `${U_o.url_s}${entry_o.link_s}.html`
      menu_s +=
`
    <li data--="menu_item">
      <span>${pad__s( order_n )}</span>
      <span><a href="${link_s}">${entry_o.title_s}</a></span>
      <ins data--="inline_note"><sup></sup><span data--="note_content">${entry_o.abstract_s}</span></ins>
    </li>
`
    }
    menu_s +=
`
  </ol>
  <script>
  const pageLink_a = ${JSON.stringify( menu_a )}
  //console.log( pageLink_a )
  </script>
</menu>
`
    return menu_s
  }
}
