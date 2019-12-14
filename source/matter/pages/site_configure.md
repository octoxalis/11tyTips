---js
{
  date:      `2019-12-12`,
  layout:    `frame.njk`,
  permalink: `tips/site_configure.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     5,
  title_s:    `Global settings`,
  subtitle_s: `Useful data for building and content`,
  abstract_s: `Global data for frequent use`,
  author_s:   `Octoxalis`,

  //export_a: ['layoutContent',],
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


The gobal data files can contain not only constants
{% _short_note %}
as in the preceding listing of the `U_o.js` file
{% end_short_note %}
but also functions
{% _short_note %}
as in the following `F_o.js` file
{% end_short_note %}
which means that all the power of Node.js is at hand.


{% _code_block %}
    title_s: 'source/matter/assets/scripts/js/lib/F_o.js',
    lang_s: 'javascript',
[//]:#(_code_block)
{% raw %}
const EXPORT_a =    // default exported data
[
  'date',
  'layout',
  'permalink',
  'tags',
  'rank_n',
  'title_s',
  'subtitle_s',
  'abstract_s',
  'author_s',
]

const MD_DIR_s = './matter/pages/'    //: all Mardown files
const DEPTH_n  = 0                    //: ...are located at the root level of MD_DIR_s

module.exports =
{
  files_a: require( 'klaw-sync' )( MD_DIR_s, { nodir: true, depthLimit: DEPTH_n } ),

  data__o: ( collection_a, permalink_s ) =>
  {
    let export_o = {}
    collection_a.forEach( collection_o =>
      {
        const data_o = collection_o.data
        if ( data_o.permalink === permalink_s )
        {
          if ( data_o.export_a === null ) export_o = data_o    //: get all data!
          else
          {
            const export_a = data_o.export_a || EXPORT_a    //: get declared or default data only
            export_a.forEach( prop_s => export_o[prop_s] = data_o[prop_s] )
          }
        }
      } )
    return export_o
  },
//...
}
{% endraw %}
{% end_code_block %}


[comment]: # (======== Links ========)

[data]: https://www.11ty.io/docs/data/
[global]: https://www.11ty.io/docs/data-global/
[template and directory]: https://www.11ty.io/docs/data-template-dir/
