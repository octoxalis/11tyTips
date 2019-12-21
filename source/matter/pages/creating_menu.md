---js
{
  date:      `2019-12-12`,
  layout:    `frame.njk`,
  permalink: `tips/creating_menu.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     15,
  title_s:    `Creating a menu`,
  subtitle_s: `Sorting a collection of posts to creat a menu`,
  abstract_s: `A smart menu of posts is hard to create`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Aliases ========)

{% set _11ty__s = F_o.eleventyUrl__s %}

[comment]: # (======== Links ========)

{{ _11ty__s( 'SORT_s' ).link }}

[comment]: # (======== Post ========)
# Creating a menu

Creating a menu with previous and next links.{ data--="page_intro" }

{% _anchor %}
## Sorting a collection
{% end_anchor %}


There are many ways to sort a collection of posts, some of them provided out-of-the-box by Eleventy
{% _short_note %}
see {{ _11ty__s( 'SORT_s' ).ref }}{{U_o.OUTLINK_s}} documentation page.
{% end_short_note %}
.

{% _more_to_come %}
{% end_more_to_come %}


{% _code_block %}
    title_s: '{{A_o.ID_s}}/source/make/11ty/collections.js',
    lang_s: 'javascript'
[//]:#(_code_block)
{% raw %}
module.exports = make_o =>
{
  make_o.tag_a
    .forEach( tag_s => make_o.addCollection( tag_s,
      collection_a =>
      {
        return collection_a
          .getFilteredByTag( tag_s )
          .sort( ( current_o, other_o ) => current_o.data.rank_n - other_o.data.rank_n )
      } )
    )
}
{% endraw %}
{% end_code_block %}


{% _anchor %}
## Retrieving posts links in the DOM
{% end_anchor %}


{% _more_to_come %}
Previous and nex posts links are much less difficult to retrieve on the client side...
{% end_more_to_come %}


{% set _code %}
{% raw %}
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
{% endraw %}
{% endset -%}


{% _code_block %}
    title_s: 'source/matrix/assets/scripts/js/parts/_link_page_.js_',
    lang_s: 'javascript',
[//]:#(_code_block)
{{ F_o.tagEscape__s( _code ) }}
{% end_code_block %}


{% _anchor %}
## Adding useful info to links
{% end_anchor %}


{% _more_to_come %}
Unveiling the title and pieces of data before fetching a previous or next post is always a useful help...
{% end_more_to_come %}


{% _code_block %}
    title_s: 'source/matrix/assets/scripts/js/parts/_link_page_.js_',
    lang_s: 'javascript',
[//]:#(_code_block)
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
{% end_code_block %}


[comment]: # (======== Links ========)

