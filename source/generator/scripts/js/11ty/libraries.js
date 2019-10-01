module.exports = generator_o =>
{
  let markdown_o =
  {
    html:        true,
    linkify:     true,
    typographer: true
  }
  generator_o.setLibrary('md',
    require( 'markdown-it' )( markdown_o )
      .use( require( 'markdown-it-attrs' ) )
      .use( require( 'markdown-it-deflist' ) )
      .use( require( 'markdown-it-include' ), generator_o.itemsPartsDir_s )
  )

  generator_o.setLibrary('njk',
    require('nunjucks')
      .configure( generator_o.factoryDir_s ) )
}
