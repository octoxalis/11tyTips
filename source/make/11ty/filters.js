module.exports = make_o =>
{
  //: date
  //xx make_o.addFilter('readable_date', date_o => require('luxon').fromJSDate( date_o ).toFormat('dd LLL yyyy') )
  
  //: css minify
  const css_f = require('clean-css')
  make_o.addFilter('minify_css', code_s => new css_f({}).minify( code_s ).styles )

  //: js minify
  make_o.addFilter('minify_js', code_s =>
  {
    let minify_o = require('uglify-es').minify( code_s )
    if( minify_o.error )
    {
        console.log('uglify-es error: ', minify_o.error)
        return code_s
    }
    return minify_o.code
  })

  //: html minify filter
  make_o.addFilter('minify_html', code_s => require('html-minifier').minify( code_s, { removeAttributeQuotes: false, useShortDoctype: true, removeComments: true, collapseWhitespace: true }) )

  //: RSS feed
  make_o.addFilter('rss_feed', code_s => require('../lib/feed_content.js')( code_s ) )

  const dateToISO__s = require('../lib/dateToISO.js')
  make_o.addNunjucksFilter( "feed_date", date_o => dateToISO__s( date_o ) )

  make_o.addNunjucksFilter( "feed_last_date", collection =>
  {
    if( !collection || !collection.length ) throw new Error( "Collection is empty in feed_last_date filter." )
    return dateToISO__s( collection[ collection.length - 1 ].date )
  } )

  const template_o = require('../lib/template_process.js')
  //: Before template
  make_o.addFilter('template_start', ( input_s, ...args_ ) => template_o.start__s( input_s, ...args_ ) )
  //: After template
  make_o.addFilter('template_end', ( output_s, ...args_ ) => template_o.end__s( output_s, ...args_ ) )

}
