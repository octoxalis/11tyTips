/*
 * Filters definition module
 * Nunjucks
 */

module.exports = config_o =>
{
  // : Filter skeleton
  // : config_o.addFilter('anyfilter', (anyarg) => 'anyresult')

  // : Date filter
  //const { DateTime } = require('luxon')
  config_o.addFilter('readableDate', date_o => require('luxon').fromJSDate( date_o ).toFormat('dd LLL yyyy') )
  
  // : css minify filter
  const CSSmin = require('clean-css')
  config_o.addFilter('cssmin', code_s => new CSSmin({}).minify( code_s ).styles )

  // : js minify filter (using uglify-es for ES2016 compat)
  const JSmin = require('uglify-es')
  config_o.addFilter('jsmin', code_s =>
  {
    let jsmin = JSmin.minify( code_s )
    if( jsmin.error )
    {
        console.log('JSmin error: ', jsmin.error)
        return code_s
    }
    return jsmin.code
  })
}
