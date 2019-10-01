const GENERATOR_o =
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
  generatorDir_s:  './generator/scripts/js/11ty/',
  itemsPartsDir_s: './store/items/parts',
}

module.exports = generator_o =>
{
  generator_o.factoryDir_s = GENERATOR_o.dir.includes
  generator_o.itemsPartsDir_s = DIRS_o.itemsPartsDir_s
  generator_o.addPassthroughCopy( { "factory/assets/static": "assets" } )    //: static files
; [ 'libraries',
    'shortcodes',
    'filters',
    'plugins',
    'collections'
  ].forEach( generator_s => require( `${DIRS_o.generatorDir_s}${generator_s}.js` )( generator_o ) )
  return GENERATOR_o    // : return the generator object for further customization
}
