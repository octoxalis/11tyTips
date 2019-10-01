const CONFIG_o =
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
    data:     'store/data',
    includes: 'factory',
  },
}

const DIRS_o =
{
  configDir_s: './configure/scripts/js/11ty/',
  itemsPartsDir_s: './store/items/parts',
}

module.exports = config_o =>
{
  config_o.templateIncludesDir_s = CONFIG_o.dir.includes
  config_o.itemsPartsDir_s = DIRS_o.itemsPartsDir_s
  config_o.addPassthroughCopy( { "store/assets": "assets" } )    //: static files
; [ 'libraries',
    'shortcodes',
    'filters',
    'plugins',
    'collections'
  ].forEach( config_s => require( `${DIRS_o.configDir_s}${config_s}.js` )( config_o ) )
  return CONFIG_o    // : return the config object for further customization
}
