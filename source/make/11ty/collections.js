module.exports = make_o =>
{
  make_o.tag_a
    .forEach( tag_s => make_o.addCollection( tag_s,
      collection_a =>
      {
        return collection_a
          .getFilteredByTag( tag_s )
          .sort( ( current_o, other_o ) => current_o.data.rank_n - other_o.data.rank_n )
      } )
    )
}
