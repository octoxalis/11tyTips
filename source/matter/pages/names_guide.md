---js
{
  date:      `2019-12-12`,
  layout:    `frame.njk`,
  permalink: `tips/names_guide.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     7,
  title_s:    `Names guide`,
  subtitle_s: `Variable naming convention`,
  abstract_s: `How variable identifiers are forged`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)
# Pseudo-typed JavaScript

How to identify variable types using a consistent naming scheme.{ data--="page_intro" }

{% _anchor %}
## No static typing?
{% end_anchor %}


Every developer knows that JavaScript is not a static typed language, a useful feature eliminating lots of bugs.
 A language like Typescript has been created as a remedy to that important lack of safety. Even for code modules counting less than a few tens of lines, it's easy to forget what kind of type is exactly a variable or constant declared at the begining of the file and then make a mistake when assining a wrong type to a variable.

{{A_o.ID_s}} follows the [TypesJS]{{U_o.OUTLINK_s}} naming scheme for a cleaner and more meaningful code. Here is how it looks in action
{% _short_note %}
the following listing is the service worker file integrated in {{A_o.ID_s}} which relies heavily on the excellent article by Thomas Hunter II: [_On using Service Workers with Static Content_]{{U_o.OUTLINK_s}}
{% end_short_note %}
:


{% _code_block %}
    title_s: 'source/matrix/assets/scripts/js/parts/_service_worker_.js',
    lang_s: 'javascript',
[//]:#(_code_block)
{% raw %}
/**
 * Unlike most Service Workers, this one always attempts to download assets from the network.
 * Only when network access fails do we fallback to using the cache. 
 * When a request succeeds we always update the cache with the new version.
 * If a request fails and the result isn't in the cache then we display an offline page.
 */
const ID_s      = '{{A_o.ID_s}}'
const KEY_n     = 1                             //: initial cache version
const CACHE_s   = `${ID_s}_${KEY_n}`            //: name of the current cache

const URL_a = //: URLs of assets to immediately cache
[
  '{{U_o.url_s}}',
  '{{U_o.url_s}}index.html',
  '{{U_o.url_s}}menu.html',
  '{{U_o.url_s}}offline.html',
  '{{U_o.url_s}}assets/scripts/js/service_worker.min.js',
  '{{U_o.url_s}}assets/scripts/js/lib.min.js',
  '{{U_o.url_s}}assets/styles/css/lib.min.css',
  '{{U_o.url_s}}favicon.ico',
]

/**
 * Iterate thru URL_a and add cache each entry
 */
const install__v = install_o =>
{
  install_o.waitUntil( caches.open( CACHE_s )
    .then( cache_o => cache_o.addAll( URL_a  ) )
    .then( self.skipWaiting() ) )
}

/**
 * Remove inapplicable caches entries
 */
const activate__v = activate_o =>
{
  activate_o.waitUntil( caches.keys()
    .then( entry_a => entry_a.filter( entry_s => entry_s !== CACHE_s ) )
    .then( remove_a => Promise.all( remove_a.map( remove_s => caches.delete( remove_s ) ) ) )
    .then( () => self.clients.claim() ) )
}

/**
 * Always try to download from server first
 */
const fetch__v = fetch_o =>
{
  fetch_o.respondWith( fetch( fetch_o.request )
      .then( response_o =>
      {
        cache__v( fetch_o.request, response_o )   //: download is successful: cache the result...
        return response_o.clone()                 //... and display it
      } )
      .catch( error_o => cache__o( error_o ) )    //: error_o means network fail (offline...)
  )
}

/**
 * Try to fetch a cache version if network access issues
 */
const cache__o = fetch_o =>
{
  return caches.match( fetch_o.request )
    .then( response_o =>
    {
      return response_o ||        //: We have a cached version, display it
        caches.open( CACHE_s )    //: We don't have a cached version, display offline page
          .then( cache_o => cache_o.match( new Request( `{{U_o.url_s}}offline.html` ) ) )
    } )
}

/**
 * Put successful fetch in cache
 */
const cache__v = ( request_o, response_o ) =>
{
  caches.open( CACHE_s )
    .then( cache_o => cache_o.put( request_o, response_o ) )
}

self.addEventListener('install', install_o => install__v( install_o ) )
self.addEventListener('activate', activate_o => activate__v( activate_o ) )
self.addEventListener('fetch', fetch_o => fetch__v( fetch_o ) )
{% endraw %}
{% end_code_block %}


As a side note, it's worth noting that a declaration like

{% raw %}const ID_s = '{{A_o.ID_s}}'{% endraw %}
{data--="example"}

is only made possible by the use of a minification filter during which Nunjucks variables are expanded before writing the JavaScript file! But it's another story: [minifying]...


[comment]: # (======== Links ========)

{{ F_o.siteUrl__s( 'minifying' ) }}

[TypesJS]: https://typexjs.netlify.com
[_On using Service Workers with Static Content_]: https://thomashunter.name/posts/2019-04-30-service-workers

