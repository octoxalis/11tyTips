module.exports = generator_o =>
{
  // : date
  generator_o.addFilter('readableDate', date_o => require('luxon').fromJSDate( date_o ).toFormat('dd LLL yyyy') )
  
  // : css minify
  const CSSmin = require('clean-css')
  generator_o.addFilter('cssmin', code_s => new CSSmin({}).minify( code_s ).styles )

  // : js minify (using uglify-es for ES2016 compat)
  const JSmin = require('uglify-es')
  generator_o.addFilter('jsmin', code_s =>
  {
    let jsmin = JSmin.minify( code_s )
    if( jsmin.error )
    {
        console.log('JSmin error: ', jsmin.error)
        return code_s
    }
    return jsmin.code
  })

  // : RSS feed
  generator_o.addFilter('RSSfeed', code_s => require('../lib/feed_content.js')( code_s ) )
}
