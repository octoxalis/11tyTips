const path_s = '../../matter/assets/scripts/js/lib/'
const A_o = require( `${path_s}A_o.js` )

module.exports = make_o =>
{
  make_o.addCollection( A_o.COLLECTION_s, collection_a => collection_a.getFilteredByTag( A_o.COLLECTION_s ) )
}
