/*
 * User Interface
 * Naming scheme: element_s.data-attribute
 */
const C_o = require( './C_o.js' )

module.exports =
{
  header: attribute_s =>
  {
    let markup_s
    switch ( attribute_s )
    {
      case 'data-theme':
        markup_s = `Modify site skin by clicking inside this box:
          ↕ for luminosity mode${C_o.HUE_SET_n ? ' ↔ for hue color' : ''}`
        break;
      default:
        markup_s = ''
    }
    return `${attribute_s}="${markup_s}"`
  }
}
