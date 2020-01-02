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

{{ _11ty__s( 'SORT_s' ).link_s }}

[comment]: # (======== Post ========)
# Creating a menu

Creating a menu with previous and next links.{ data--="page_intro" }

{% _anchor %}
## Sorting a collection
{% end_anchor %}


There are many ways to sort a collection of posts, some of them provided out-of-the-box by Eleventy
{% _short_note %}
see {{ _11ty__s( 'SORT_s' ).ref_s }}{{U_o.OUTLINK_s}} documentation page.
{% end_short_note %}
. However, {{A_o.NAME_s}} doesn't use the formated date front matter property but a specific one, named `rank_n`
{% _short_note %}
it's an integer positive number
{% end_short_note %}
, allowing to sort a posts collection according a unique value regardless of the date
{% _short_note %}
you could have multiple posts with the same date, unless you use a full date with hours, minutes and seconds...
{% end_short_note %}
This `rank_n` should therefore be a unique index
{% _short_note %}
because it is used to retrieve the previous and next pages of any given post in the menu list; 
however, a duplicate `rank_n` index doesn't cause any disturbance when retrieving those links (see infra).
{% end_short_note %}
.


{% _code_block %}
    title_s: '{{A_o.ID_s}}/source/make/11ty/collections.js',
    lang_s: 'javascript'
[//]:#(_code_block)
{% raw %}
const sort_o =
{
//> Sort a tag collection
//> according to rank_n front matter property
  sortByRank__a: ( collection_a, tag_s ) =>
  {
    return collection_a
      .getFilteredByTag( tag_s )
      .sort( ( current_o, other_o ) => current_o.data.rank_n - other_o.data.rank_n )
  }
}

module.exports = make_o =>
{
  make_o.tag_a.forEach( tag_o => make_o.addCollection( tag_o.tag_s,
    collection_a => sort_o[tag_o.sort_f]( collection_a, tag_o.tag_s ) ) )
}
{% endraw %}
{% end_code_block %}


{% _anchor %}
## Listing posts as an HTML fragment
{% end_anchor %}


To display the global menu in every page of the site, an HTML fragment is built with a template listing all pages as links in an ordered list, each one having its page `rank_n` front matter property recorded as a `data-rank` attribute.

The main loop of the menu template iterates thru the posts collection previously sorted and add every useful data that we want to display in the menu itself or as a clue of the previous and next pages: `permalink`, `rank_n`, `title_s`, etc.


{% _code_block %}
    title_s: 'source/matrix/menu.njk',
    lang_s: 'javascript',
[//]:#(_code_block)
{% raw %}
{%- set _collection_s = A_o.COLLECTION_s %}
{# .... #}
{%- set _menu_list_s %}
  <ol data--="menu_list">
{% for _item_o in collections[_collection_s] %}
    {% if _item_o.data.tags == _collection_s %}
    {% set _link_s = _item_o.data.permalink.slice( 0, _html_n ) %}
    <li data--="menu_item" data-link="{{_link_s}}" data-rank="{{_item_o.data.rank_n}}">
      <span>{{pad__s( _item_o.data.rank_n )}}</span>
      <span><a href="{{U_o.url_s + _item_o.data.permalink}}">{{_item_o.data.title_s}}</a></span>
      <ins data--="inline_note"><sup></sup><span data--="note_content">{{_item_o.data.abstract_s}}</span></ins>
      <span hidden>{{_item_o.data.subtitle_s}}</span>
    </li>
    {% endif %}
{% endfor %}
  </ol>
{% endset -%}
{% endraw %}
{% end_code_block %}


{% _anchor %}
## Retrieving posts links in the DOM
{% end_anchor %}


Previous and next posts links are much less difficult to retrieve on the client side than at build time. For that reason, the menu template doesn't try to create a double linked list but instead delegates the work  to a JavaScript function run in the browser.
For any post page displayed by the browser, we have in the menu HTML fragment built by the template all necessary data about the preceding and following pages relative to the current one
{% _short_note %}
when they exist: the first page in the menu list has no previous page and the last one no next page!
{% end_short_note %}
.

For that we have to search the DOM for the nodes having a `data-rank` attribute with values surrounding that one of the current page.


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
    title_s: 'source/matrix/assets/scripts/js/parts/_link_page_.js',
    lang_s: 'javascript',
[//]:#(_code_block)
{{ F_o.tagEscape__s( _code ) }}
{% end_code_block %}


{% _anchor %}
## Attaching useful data to links
{% end_anchor %}


A link is only a link and doesn't convey a lot of meaning by itself apart its URL
{% _short_note %}
the `href` attribute
{% end_short_note %}
. Unveiling the title and some other pieces of data before fetching a previous or next post is a much more useful help.
The data previously retrieved in the surrounding links of the current page are there to be used and we can display them as we like
{% _short_note %}
bellow the navigation bar at the top of the page
{% end_short_note %}
.


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

