module.exports = config_o =>
{
  let markdown_o =
  {
    html:        true,
    linkify:     true,
    typographer: true
  }
  config_o.setLibrary('md',
    require( 'markdown-it' )( markdown_o )
      .use( require( 'markdown-it-attrs' ) )
      .use( require( 'markdown-it-deflist' ) )
      .use( require( 'markdown-it-include' ), config_o.contentIncludesDir_s )
  )

  config_o.setLibrary('njk',
    require('nunjucks')
      .configure( config_o.templateIncludesDir_s ) )
}
