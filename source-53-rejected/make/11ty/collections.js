module.exports = make_o =>
{
  make_o.addCollection( 'tip', collection_a => collection_a.getFilteredByTag( 'tip' ) )
}
