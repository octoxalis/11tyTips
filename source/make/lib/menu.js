const path_s = '../../matter/assets/scripts/js/lib/'
const U_o = require( `${path_s}U_o.js` )
const collection_s = require( `${path_s}A_o.js` ).COLLECTION_s

const pad__s = rank_n => `${('' + rank_n).padStart( 4, '.' )}`

module.exports =
{
  menu__a: collection_a =>
  {
    const h4_a__s = ( href_s, title_s ) => `<h4>→ <a href="${href_s}" target="_blank" rel="noreferrer">${title_s}</a></h4>`
    const github_s  = U_o.GIT_s ? h4_a__s( U_o.GIT_s, 'Github' ) : ''
    const twitter_s = U_o.TWI_s ? h4_a__s( U_o.TWI_s, 'Twitter' ) : ''
    const rss_s     = U_o.RSS_s ? h4_a__s( U_o.RSS_s, 'RSS' ) : ''
    let rank_n = 0
    let menu_s =
`
<menu data--="menu" data-collection="${collection_s}" class="no_pointer">
  <h3><a href="${U_o.url_s}">Home</a></h3>
  ${github_s}
  ${twitter_s}
  ${rss_s}
  <h2 data--="menu_order">All ${collection_s}s</h2>
  <ol data--="menu_list">
`
    for ( let item_o of collection_a )
    {
      ++rank_n    // index 1
      const link_s = `${U_o.url_s}${item_o.link_s}.html`
      menu_s +=
`
    <li data--="menu_item" data-link="${item_o.link_s}" data-rank="${item_o.rank_n}">
      <span>${pad__s( rank_n )}</span>
      <span><a href="${link_s}">${item_o.title_s}</a></span>
      <ins data--="inline_note"><sup></sup><span data--="note_content">${item_o.abstract_s}</span></ins>
      <span hidden>${item_o.subtitle_s}</span>
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
}
