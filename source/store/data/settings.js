const _C = require( './_C.js' )

const SETTINGS_o =
{
  dev_s: _C.DEV_s,
  pro_s: _C.PRO_s,
  git_s: _C.GIT_s,
  twi_s: _C.TWI_s,
  rss_s: _C.RSS_s,
  //: development/production switch
  //dev_b: true,
  dev_b: false,
  url_s: null,
}
;(() => SETTINGS_o.url_s = SETTINGS_o[SETTINGS_o.dev_b === true ? 'dev_s' : 'pro_s'])()
console.log( `Site URL: ${SETTINGS_o.url_s}` )

module.exports = SETTINGS_o