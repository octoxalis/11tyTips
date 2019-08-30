const ELEVENTY_o =
{
  buildDir_s: './build/scripts/11ty/',
  templateIncludesDir_s: 'includes',
  contentIncludesDir_s: './content/includes',
}

module.exports = config_o =>
{
  config_o.templateIncludesDir_s = ELEVENTY_o.templateIncludesDir_s
  config_o.contentIncludesDir_s = ELEVENTY_o.contentIncludesDir_s

  //---------- STATIC FILES
  config_o.addPassthroughCopy( 'assets' )
  
  //---------- LIBRARIES
  require( `${ELEVENTY_o.buildDir_s}libraries.js` )( config_o )

  //---------- FILTERS
  require( `${ELEVENTY_o.buildDir_s}filters.js` )( config_o )

  //---------- SHORTCODES
  require( `${ELEVENTY_o.buildDir_s}shortcodes.js` )( config_o )

  //---------- COLLECTIONS
  require( `${ELEVENTY_o.buildDir_s}collections.js` )( config_o )

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
