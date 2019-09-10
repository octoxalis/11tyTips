const ELEVENTY_o =
{
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

const DIRS_o =
{
  buildDir_s: './build/scripts/js/11ty/',
  contentIncludesDir_s: './content/includes',
}

module.exports = config_o =>
{
  config_o.templateIncludesDir_s = ELEVENTY_o.dir.includes
  config_o.contentIncludesDir_s = DIRS_o.contentIncludesDir_s
  config_o.addPassthroughCopy( 'assets' )    //: STATIC FILES
  ;
  [ 'libraries',
    'shortcodes',
    'filters',
    'plugins',
    'collections'
  ].forEach( config_s => require( `${DIRS_o.buildDir_s}${config_s}.js` )( config_o ) )

  return ELEVENTY_o    // : return the config object for further customization
}
