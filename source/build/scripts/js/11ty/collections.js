/*
 * Collections definition module
 * Nunjucks
 */
module.exports = config_o =>
{
  config_o.addCollection('tip', collection_a => collection_a.getFilteredByTag('tip') )
}
