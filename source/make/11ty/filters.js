module.exports = make_o =>
{
  //: date
  //xx make_o.addFilter('readable_date', date_o => require('luxon').fromJSDate( date_o ).toFormat('dd LLL yyyy') )
  
  //: css minify
  const CSS_f = require('clean-css')
  make_o.addFilter('minify_css', code_s => new CSS_f({}).minify( code_s ).styles )

  //: js minify
  make_o.addFilter('minify_js', code_s =>
  {
    let MINIFY_o = require('terser').minify( code_s )
    if( MINIFY_o.error )
    {
        console.log('terser error: ', MINIFY_o.error)
        return code_s
    }
    return MINIFY_o.code
  })

  //: html minify filter
  make_o.addFilter('minify_html', code_s => require('html-minifier').minify( code_s,
    { removeAttributeQuotes: false,
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      keepClosingSlash: true,    //: for XML validation
    }) )

  //: RSS feed
  make_o.addFilter('feed_content', code_s => require('../lib/feed_content.js')( code_s ) )

  const ISODATE__s = require('../lib/dateToISO.js')
  make_o.addNunjucksFilter( "feed_date", date_o => ISODATE__s( date_o ) )

  make_o.addNunjucksFilter( "feed_last_date", collection =>
  {
    if( !collection || !collection.length ) throw new Error( "Collection is empty in feed_last_date filter." )
    return ISODATE__s( collection[ collection.length - 1 ].date )
  } )

  const TEMPLATE_o = require('../lib/template_process.js')
  make_o.addFilter('head_end', ( head_s, ...args_ ) => TEMPLATE_o.head__s( head_s, ...args_ ) )
  make_o.addFilter('body_end', ( body_s, ...args_ ) => TEMPLATE_o.body__s( body_s, ...args_ ) )
  make_o.addFilter('template_start', ( start_s, ...args_ ) => TEMPLATE_o.start__s( start_s, ...args_ ) )
  make_o.addFilter('template_end', ( end_s, ...args_ ) => TEMPLATE_o.end__s( end_s, ...args_ ) )

  const MIXIN_o = require('../lib/css_mixin.js')
  make_o.addFilter('font_face', ( face_a, ...args_ ) => MIXIN_o.font_face__s( face_a, ...args_ ) )
}
