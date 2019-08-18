/*
 * Libraries definition module
 */
module.exports = ( config_o, parts_s ) =>
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
    .use( require( 'markdown-it-include' ), parts_s )
  )

  config_o.setLibrary('njk', require('nunjucks').configure( 'includes' ) )
}
