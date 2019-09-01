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
  config_o.addPassthroughCopy( 'assets' )    //: STATIC FILES
  ;
  [ 'libraries',
    'collections',
    'shortcodes',
    'filters',
    'plugins'
  ].forEach( ( config_s ) => require( `${ELEVENTY_o.buildDir_s}${config_s}.js` )( config_o ) )

  return {    // : return the config object for further customization
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
