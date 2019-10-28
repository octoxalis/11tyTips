/**
 * 
 * dependancies:
 * - luxon
 */
const { DateTime } = require( "luxon" )


const dateToISO__s = ( date_o ) => DateTime
  .fromJSDate( date_o )
  .toISO({ includeOffset: true, suppressMilliseconds: true })

// .eleventy.js
eleventyConfig.addNunjucksFilter( "feed_date", date_o => dateToISO__s( date_o ) )

eleventyConfig.addNunjucksFilter( "feed_last_date", collection =>
{
  if( !collection || !collection.length ) throw new Error( "Collection is empty in feed_last_date filter." )
  return dateToISO__s( collection[ collection.length - 1 ].date )
} )



/*
const absoluteUrl__s = ( url_s, base_s ) =>
{
  try
  {
    return ( new ( require("url")( url_s, base_s ) ) ).toString()
  }
  catch( error_o )
  {
    console.log( `Failed to convert ${url_s} to an absolute URL with base_s %${base_s}` )
    return url_s
  }
}
*/
/*
const htmlToAbsoluteUrls__s = ( html_s, base_s ) =>
{
  if( !base_s ) throw new Error( `htmlToAbsoluteUrls__s was missing the full URL base_s 'absolutePostUrl' argument.`)
  let url_o =
  {
    eachURL: ( url_s, attr_s, element_o ) =>
    {
      url_s = url_s.trim()
      return ( url_s.indexOf("#") !== 0 ) ? { url: absoluteUrl__s( url_s, base_s ) } : url_s  // #anchor in-page
    }
  }
  let modifier = require('posthtml')().use( require('posthtml-urls')( url_o ) )
  return modifier.process( html_s )
}
*/
/*
eleventyConfig.addNunjucksAsyncFilter( "htmlToAbsoluteUrls", ( html_s, base_s, callback ) =>
{
  if( !html_s ) return callback( null, '' )
  htmlToAbsoluteUrls__s( html_s, base_s )
    .then( result_o => callback(null, result_o.html) )
} )
*/
