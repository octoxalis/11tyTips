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
 * Put successful Fetch in cache
 */
const cache__v = ( request_o, response_o ) =>
{
  caches.open( CACHE_s )
    .then( cache_o => cache_o.put( request_o, response_o ) )
}

self.addEventListener('install', install_o => install__v( install_o ) )
self.addEventListener('activate', activate_o => activate__v( activate_o ) )
self.addEventListener('fetch', fetch_o => fetch__v( fetch_o ) )
