module.exports = configure_o =>
{
  let markdown_o =
  {
    html:        true,
    linkify:     true,
    typographer: true
  }
  configure_o.setLibrary('md',
    require( 'markdown-it' )( markdown_o )
      .use( require( 'markdown-it-attrs' ) )
      .use( require( 'markdown-it-deflist' ) )
      .use( require( 'markdown-it-include' ), configure_o.itemsPartsDir_s )
  )

  configure_o.setLibrary('njk',
    require('nunjucks')
      .configure( configure_o.factoryDir_s ) )
}
