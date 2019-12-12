---js
{
  date:      `2019-12-12`,
  layout:    `frame.njk`,
  permalink: `tips/site_configure.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  menu_n:     5,
  title_s:    `Global settings`,
  subtitle_s: `Useful data for building and content`,
  abstract_s: `Global data for frequent use`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)
# Configuring your new Eleventy site

Eleventy provides you with simple but efficient configuration options.{ data--="page_intro" }

{% _anchor %}
## Data everywhere
{% end_anchor %}


Eleventy provides a wide range of settings for [data] used in building stage or inside content: [global] data as well as [template and directory] data.

{{A_o.ID_s}} uses only global data contained in JavaScript files located inside the data directory.

{% _code_block %}
    title_s: 'source/matter/assets/scripts/js/lib/U_o.js',
    lang_s: 'javascript',
[//]:#(_code_block)
{% raw %}
const A_o = require( './A_o.js' )

const U_o =
{
  dev_b: true,     //: development/production switch
  //dev_b: false,
  url_s: null,

  DEV_s: A_o.LOCAL_s,
  PRO_s: A_o.URL_s,

  GIT_s: `https://github.com/${A_o.AUTHOR_s}/${A_o.ID_s}/`,
  TWI_s: `https://twitter.com/${A_o.ID_s}/`,
  RSS_s: `${A_o.URL_s}feed.xml`,
  SERVICE_PATH_s: 'assets/scripts/js/service_worker.min.js',

  HOME_s:    `[Home page]: ${A_o.URL_s}`,
  NODE_s :   `[Node.js]: https://nodejs.org`,
  COMMENT_s: `[utteranc.es]: https://github.com/utterance/utterances`,

  FRAME_s:     '11ty Frame',
  FRAME_URL_s: `https://11tyframe.netlify.com/`,

  ELEVENTY_s:     `[Eleventy]: https://11ty.io`,
  ELEVENTY_JFM_s: `/docs/data-frontmatter/#javascript-front-matter`,
  ELEVENTY_UDF_s: `/docs/data-frontmatter/#user-defined-front-matter-customizations`,

  OUTLINK_s: '{target="_blank" rel="noreferrer noopener"}',

}
void function () { U_o.url_s = U_o[U_o.dev_b === true ? 'DEV_s' : 'PRO_s'] } ()
console.log( `Site URL: ${U_o.url_s}` )

module.exports = U_o
{% endraw %}
{% end_code_block %}


[comment]: # (======== Links ========)

[data]: https://www.11ty.io/docs/data/
[global]: https://www.11ty.io/docs/data-global/
[template and directory]: https://www.11ty.io/docs/data-template-dir/
