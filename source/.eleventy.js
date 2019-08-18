const ELEVENTY_o =
{
  scriptsDir: './build/scripts/11ty/',
}

module.exports = config_o =>
{
  //---------- STATIC FILES
  config_o.addPassthroughCopy( 'assets' )
  
  //---------- LIBRARIES
  require( `${ELEVENTY_o.scriptsDir}libraries.js` )( config_o, ELEVENTY_o.contentDir )

  //---------- FILTERS
  require( `${ELEVENTY_o.scriptsDir}filters.js` )( config_o )

  //---------- SHORTCODES
  require( `${ELEVENTY_o.scriptsDir}shortcodes.js` )( config_o )

  //---------- COLLECTIONS
  require( `${ELEVENTY_o.scriptsDir}collections.js` )( config_o )

  // : return the config object for further customization
  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine:     'njk',
    dataTemplateEngine:     'njk',
    templateFormats:        [ 'md','njk','html' ],
    passthroughFileCopy:    true,
    pathPrefix:             '/',
    dir:
    {
      input:    '.',
      output:   '../site',
      data:     'data',
      includes: 'includes',
      passthru: 'assets',
    },
  }
}
