/*
 * Collections definition module
 * Nunjucks
 */
module.exports = config_o =>
{
  config_o
    .addCollection('post', collection_a => collection_a.getFilteredByTag('post').reverse() )
}
