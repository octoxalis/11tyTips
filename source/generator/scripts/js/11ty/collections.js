module.exports = generator_o =>
{
  generator_o.addCollection( 'tip', collection_a => collection_a.getFilteredByTag( 'tip' ) )
}
