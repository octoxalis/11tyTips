module.exports = configure_o =>
{
  configure_o.addCollection( 'tip', collection_a => collection_a.getFilteredByTag( 'tip' ) )
}
