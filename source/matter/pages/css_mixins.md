---js
{
  date:      `2020-01-02`,
  layout:    `frame.njk`,
  permalink: `tips/css_mixins.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     16,
  title_s:    `CSS mixins`,
  subtitle_s: `Create CSS mixins without any preprocessor`,
  abstract_s: `Filters ala SASS`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)
# CSS mixins

Do you really need SASS?{ data--="page_intro" }

{% _anchor %}
## Mixins without preprocessor
{% end_anchor %}


CSS preprocessors as SASS have become an important step in the front-end landscape to simplify stylesheets creation and maintening.
However they have lost a bit of prominance since the apparition of the new CSS rising star: _Custom properties_ AKA <q>CSS variables</q>.
And JAMstack static site generators as Eleventy could be another factor of preprocessors darkening because they give you all the bolts you need to create the elements you want to use and re-use with **pure CSS and Vanilla JavaScript**.

{{A_o.ID_s}} contains an example of a pseudo-CSS file which, preprocessed by the Nunjucks template engine, produces a genuine CSS file with a few repeats of the same `@font_face` CSS rule pattern
{% _short_note %}
only three repeats because {{A_o.ID_s}} is very thrifty regarding the number of fonts beeing used
{% end_short_note %}
.


{% _code_block %}
    title_s: '{{A_o.ID_s}}/source/matrix/assets/styles/css/parts/_font_face_mixin_.css',
    lang_s: 'twig'
[//]:#(_code_block)
{% raw %}
/* defaults: styles: 'Regular', type_s: 'woff2' */
{{
  [
    { family_s:'Harmattan', file_s: 'harmattan-v5-latin-regular' },
    { family_s:'Athiti',    file_s: 'athiti-v3-latin-regular' },
    { family_s:'Fira Code', file_s: 'FiraCode-Regular' }
  ] | font_face( U_o.url_s )
}}
{% endraw %}
{% end_code_block %}


But where is CSS in this `.css` file? Nowhere actually: the CSS fragment is created by the requested filter called `font_face`. And, apart the opening and closing double braces {%raw%}`{{ ... }}`{%endraw%}
{% _short_note %}
pointing out the declaration of a JavaScript variable
{% end_short_note %}
, everything is a JavaScript `Array` syntax declaration, an `Array` to be processed by that `font_face` filter.


Once again, the substitution is made by a _magical_ Nunjucks filter registered at configuration step in the `11ty` directory `filters.js` file.


{% _code_block %}
    title_s: '{{A_o.ID_s}}/source/make/11ty/filters.js',
    lang_s: 'javascript'
[//]:#(_code_block)
{% raw %}
//...
  const MIXIN_o = require('../lib/css_mixin.js')
  make_o.addFilter('font_face', ( face_a, ...args_ ) => MIXIN_o.font_face__s( face_a, ...args_ ) )
//...
{% endraw %}
{% end_code_block %}


The `face_a` argument of this filter is the `Array` declared in the previous `_font_face_mixin_.css` file:


{% _code_block %}
    title_s: '{{A_o.ID_s}}/source/make/lib/css_mixin.js',
    lang_s: 'javascript'
[//]:#(_code_block)
{% raw %}
module.exports =
{
  font_face__s: ( face_a, ...args_ ) =>
  {
    if ( !face_a || !args_ ) return ''
    let code_s = ''
    face_a.forEach( face_o =>
      {
        const family_s = face_o.family_s
        const file_s   = face_o.file_s
        const style_s  = face_o.style_s || 'Regular'
        const type_s   = face_o.type_s || 'woff2'
        code_s += `
@font-face
{
  font-display: swap;
  font-family: '${family_s}';
  font-style: normal;
  font-weight: 400;
  src:
    local('${family_s}'),
    local('${family_s}-${style_s}'),
    url('${args_[0]}assets/fonts/${file_s}.${type_s}')
    format('${type_s}');
}`
      }
    )
    return code_s
  },
  
}
{% endraw %}
{% end_code_block %}


The output of this CSS-like preprocessing is inlined
{% _short_note %}
for performance concerns
{% end_short_note %}
in the page `head` section thru the `_font_inline_.njk` template.
Of course this is only available if you put a `"dataTemplateEngine": "njk"` property inside your Eleventy configuration file
{% _short_note %}
see [eleventy configure] page
{% end_short_note %}
.


Data template engine processing, offered not only for Nunjucks but other templating systems, is a major strengh of Eleventy static site generator relevant not only for CSS preprocessing but also for JavaScript files preprocessing. Hence some {{A_o.ID_s}} JS files make use of global data variables or constants as
{% _short_note %}
emphasized in the following examples
{% end_short_note %}
:


{%raw%}const idb_o = new KVIdb( '**{{A_o.ID_s}}**_idb', '**{{A_o.ID_s}}**_store' ){%endraw%}
{data--="example"}

{%raw%}const key_s = location_s.slice( location_s.lastIndexOf( '<b>{{A_o.COLLECTION_s}}</b>s/'), -extension_n ){%endraw%}
{data--="example"}


But there's more to explore there...

[comment]: # (======== Links ========)

{{ F_o.siteUrl__s( 'eleventy_configure' ) }}