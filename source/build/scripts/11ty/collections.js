/*
 * Collections definition module
 * Nunjucks
 */
module.exports = config_o =>
{
  config_o
    .addCollection('post', collection_a => collection_a.getFilteredByTag('post').reverse() )
  config_o
    .addCollection('menu', collection_a => collection_a.getFilteredByTag('menu') )
}
