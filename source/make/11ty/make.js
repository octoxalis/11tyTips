const MAKE_o =
{
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine:     'njk',
  dataTemplateEngine:     'njk',
  templateFormats:        [ 'njk', 'md' ],
  passthroughFileCopy:    true,
  pathPrefix:             '/',
  dir:
  {
    input:    '.',
    output:   '../site',
    data:     'matter/assets/scripts/js/lib',
    includes: 'matrix',
  },
}

const DIRS_o =
{
  makeDir_s:  './',
  pagesPartsDir_s: './matter/pages/parts',
}

module.exports = make_o =>
{
  make_o.matrixDir_s = MAKE_o.dir.includes
  make_o.pagesPartsDir_s = DIRS_o.pagesPartsDir_s
  make_o.addPassthroughCopy( { "matrix/assets/static": "assets" } )    //: static files
; [ 'libraries',
    'shortcodes',
    'filters',
    'plugins',
    'collections'
  ].forEach( make_s => require( `${DIRS_o.makeDir_s}${make_s}.js` )( make_o ) )
  return MAKE_o    // : return the configuration object for further customization
}


