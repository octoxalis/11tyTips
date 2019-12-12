module.exports = make_o =>
{
  let markdown_o =
  {
    html:        true,
    linkify:     true,
    typographer: true
  }
  make_o.setLibrary('md',
    require( 'markdown-it' )( markdown_o )
      .use( require( 'markdown-it-attrs' ) )
      .use( require( 'markdown-it-deflist' ) )
      .use( require( 'markdown-it-include' ), make_o.pagesPartsDir_s )
  )

  make_o.setLibrary('njk',
    require('nunjucks')
      .configure( make_o.matrixDir_s, { autoescape: false, lstripBlocks: true, trimBlocks:true } ) )  //: autoescape for CSS rules
}
