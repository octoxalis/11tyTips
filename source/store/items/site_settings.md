---js
{
  date:      `2019-09-06`,
  layout:    `frame.njk`,
  permalink: `tips/site_settings.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  title_s:    `Global settings`,
  subtitle_s: `Useful data for building and content`,
  abstract_s: `Global data for frequent use`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)

## Data everywhere

Eleventy provides a wide range of settings for [data] used in building stage or inside content: [global] data as well as [template and directory] data.

{{_G_.SITE_s}} uses only global data contained in JavaScript files located inside the data directory.

{% _code_block %}
    title_s: 'source/data/settings.js',
    lang_s: "javascript",
[//]:#(_code_block)
const Y = require( './_G_.js' )
const SETTINGS_o =
{
  dev_s: _G_.DEV_s,
  pro_s: _G_.PRO_s,
  git_s: _G_.GIT_s,
  twi_s: _G_.TWI_s,
  rss_s: _G_.RSS_s,
  //: development/production switch
  dev_b: true,
  //dev_b: false,
  url_s: null,
}
;(() => SETTINGS_o.url_s = SETTINGS_o[SETTINGS_o.dev_b === true ? 'dev_s' : 'pro_s'])()
console.log( `Site URL: ${SETTINGS_o.url_s}` )
module.exports = SETTINGS_o
{% end_code_block %}

[comment]: # (======== Links ========)

[data]: https://www.11ty.io/docs/data/
[global]: https://www.11ty.io/docs/data-global/
[template and directory]: https://www.11ty.io/docs/data-template-dir/
