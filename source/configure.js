const CONFIGURE_o =
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
  configureDir_s:  './configure/scripts/js/11ty/',
  itemsPartsDir_s: './store/items/parts',
}

module.exports = configure_o =>
{
  configure_o.factoryDir_s = CONFIGURE_o.dir.includes
  configure_o.itemsPartsDir_s = DIRS_o.itemsPartsDir_s
  configure_o.addPassthroughCopy( { "factory/assets/static": "assets" } )    //: static files
; [ 'libraries',
    'shortcodes',
    'filters',
    'plugins',
    'collections'
  ].forEach( config_s => require( `${DIRS_o.configureDir_s}${config_s}.js` )( configure_o ) )
  return CONFIGURE_o    // : return the config object for further customization
}
