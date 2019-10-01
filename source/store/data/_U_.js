const _G_ = require( './_G_.js' )

const _U_o =
{
  dev_s: _G_.DEV_s,
  pro_s: _G_.PRO_s,
  git_s: _G_.GIT_s,
  twi_s: _G_.TWI_s,
  rss_s: _G_.RSS_s,
  //: development/production switch
  //dev_b: true,
  dev_b: false,
  url_s: null,
}
;(() => _U_o.url_s = _U_o[_U_o.dev_b === true ? 'dev_s' : 'pro_s'])()
console.log( `Site URL: ${_U_o.url_s}` )

module.exports = _U_o
