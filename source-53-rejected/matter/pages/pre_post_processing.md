---js
{
  date:      `2019-10-19`,
  layout:    `frame.njk`,
  permalink: `tips/pre_post_processing.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  title_s:     `Processing before and after the template engine`,
  subtitle_s:  `Process templates your own way`,
  abstract_s:  `Add any kind of processing before and after your templating engine has done its work`,
  author_s:    `Octoxalis`,
}
---
[comment]: # (======== Post ========)
# Processing template output

It can be useful to process the final result of the templating work or prepare it by some pre processing.{ data--="page_intro" }

{% _anchor %}
## Wrap the page your own way
{% end_anchor %}


All templating engines have limits and Nunjucks
{% _short_note %}
which is used here by {{A_o.ID_s}}
{% end_short_note %}
has its own. But you can easily go your way beyond those limits to process the output of the templating engine just before everything is engraved as a static HTML page.
For instance you may want to overcome the encoding output of the engine and make some modifications
{% _short_note %}
see also the [frontmatter data] tip for an example of post processing the template engine output without a global filter, but using a front matter specific callback function.
{% end_short_note %}
.

Once again this is acquired thru the use of a filter and an awesome help of the Nunjucks {% raw %}<code>{% set %}</code>{% endraw %} block.
Every global template
{% _short_note %}
i.e. a template which produces a full `html` page.
{% end_short_note %}
has a *starting* block
{% _short_note %}
in the following listing it's the first line `include` tag.
{% end_short_note %}
using a filter whose concern is to initialize some variables needed by the page which is about to be processed by the templating engine
{% _short_note %}
it can be, for instance, a data base access (server-side), or some checking relative to the pages that have been previously processed, etc.
{% end_short_note %}
.

Similarly, there is an *ending* block whose filter processes the output of the template engine, once all the template work has been done, allowing you to further processed the output.
{% _short_note %}
in the following listing it's the last line `include` tag.
{% end_short_note %}


{% set _code %}
{% raw %}
{% include "parts/_template_start_.njk" %}{# ante process #}

{%- set _URL_s = U_o.url_s -%}

{%- set _head_block_s %}
<head>
{% include "parts/_site_url_.njk" %}
{% include "parts/_head_.njk" %}
{% include "parts/_seo_.njk" %}
{% include "parts/_description_.njk" %}
{% include "parts/_favicon_.njk" %}
{% include "parts/_feed_.njk" %}
{% include "parts/_font_inline_.njk" %}
{% include "parts/_style_inline_.njk" %}
{% include "parts/_style_.njk" %}
</head>
{% endset -%}

{%- set _body_block_s %}
<body>
{% include "parts/_nav_.njk" %}
{% include "parts/_article_.njk" %}
{% if U_o.dev_b === false %}{% include "parts/_instant_page_.njk" %}{% endif %}
{% include "parts/_script_.njk" %}
{% if no_comments !== true %}
{% include "parts/_colophon_.njk" %}
{% include "parts/_comment_.njk" %}
{% endif %}
</body>
{% endset -%}

{%- set _template_s %}
<!doctype html>
<html lang="en">
{{ _head_block_s | safe }}
{{ _body_block_s | safe }}
</html>
{% endset -%}

{% include "parts/_template_end_.njk" %}{# post process #}
{% endraw %}
{% endset -%}

{% _code_block %}
    title_s: 'source/matrix/frame.njk',
    lang_s: 'twig',
[//]:#(_code_block)
{{ F_o.tagEscape__s( _code ) }}
{% end_code_block %}


{% _code_block %}
    title_s: 'source/matrix/parts/_template_end_.njk',
    lang_s: 'twig',
[//]:#(_code_block)
{% raw %}
{%- if output__s %}{% set _template_s = output__s( _template_s ) %}{% endif -%}
{%- set _args_o = { date: date, permalink: permalink, tags: tags, title_s: title_s } -%}
{{- _template_s | safe | template_end( _args_o ) | minify_html -}}
{% endraw %}
{% end_code_block %}


{% _anchor %}
## Processing at the very start or end
{% end_anchor %}


The filters invoqued as previously described are also use to make any specific processing required just before the first template is to be processed by Eleventy and just after the last template has been processed. It's kind of a hook, as can be seen is some frameworks, inside Eleventy. This *ante* or *post* processing uses only a directory listing to count the number of template files to be processed and invoque the starting function if no one has already been processed or the ending function if the number of files processed is equivalent to the listing count.


{% _code_block %}
    title_s: 'source/make/11ty/template_process.js',
    lang_s: 'javascript',
[//]:#(_code_block)
{% raw %}
const MD_DIR_s = './matter/pages/'    //: all Mardown files
const DEPTH_n  = 0                    //: ...are located at the root level of MD_DIR_s

var files_a = require( 'klaw-sync' )( MD_DIR_s, { nodir: true, depthLimit: DEPTH_n } )
var count_n = files_a ? files_a.length : 0
var at_n    = 0

module.exports =
{
  start__s: ( input_s, args_a ) =>
  {
    let start_s = input_s
    if ( at_n === 0 && files_a ) require( './template_start' )( files_a )
    //...  process start_s
    return start_s
  },

  end__s: ( output_s, args_a ) =>
  {
    ++at_n
    let end_s = output_s
    //... process end_s
    if ( at_n === count_n && files_a ) require( './template_end' )( files_a )
    return end_s
  },

}
{% endraw %}
{% end_code_block %}


Any kind of processing can be done inside the starting and ending modules and the argument they receive can be anything else than the list of files to process. In {{ A_o.ID_s }}, till now, these modules do not process anything.


{% _code_block %}
    title_s: 'source/make/11ty/template_start.js',
    lang_s: 'javascript',
[//]:#(_code_block)
{% raw %}
module.exports = ( files_a, ...args_ ) =>
{
  console.log( `${files_a.length} Markdown files to be processed` )
}
{% endraw %}
{% end_code_block %}


{% _code_block %}
    title_s: 'source/make/11ty/template_end.js',
    lang_s: 'javascript',
[//]:#(_code_block)
{% raw %}
module.exports = ( files_a, ...args_ ) =>
{
  console.log( `${files_a.length} Markdown files have been processed` )
}
{% endraw %}
{% end_code_block %}


[comment]: # (======== Links ========)

{{ F_o.siteUrl__s( 'frontmatter_data' ) }}
