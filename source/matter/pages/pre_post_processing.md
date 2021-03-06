---js
{
  date:      `2019-12-12`,
  layout:    `frame.njk`,
  permalink: `tips/pre_post_processing.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     13,
  title_s:    `Processing before and after the template engine`,
  subtitle_s: `Process templates your own way`,
  abstract_s: `Add any kind of processing before and after your templating engine has done its work`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)
# Processing template output

It can be useful to process the final result of the templating work or prepare it by some pre processing.{ data--="page_intro" }

{% _anchor %}
## Wrap the page your own way
{% end_anchor %}


All templating engines have limits and Nunjucks
{% _note_txt %}
which is used here by {{A_o.ID_s}}
{% end_note_txt %}
has its own. But you can easily go your way beyond those limits to process the output of the templating engine just before everything is engraved as a static HTML page.
For instance you may want to overcome the encoding output of the engine and make some modifications
{% _note_txt %}
see also the [frontmatter data] tip for an example of post processing the template engine output without a global filter, but using a front matter specific callback function.
{% end_note_txt %}
.

Once again this is acquired thru the use of a filter and an awesome help of the Nunjucks {% raw %}<code>{% set %}</code>{% endraw %} block.
Every global template
{% _note_txt %}
i.e. a template which produces a full `html` page.
{% end_note_txt %}
has a *starting* block
{% _note_txt %}
in the following listing it's the _ante_ process comment line.
{% end_note_txt %}
using a filter whose concern is to initialize some variables needed by the page which is about to be processed by the templating engine
{% _note_txt %}
it can be, for instance, a data base access (server-side), or some checking relative to the pages that have been previously processed, etc.
{% end_note_txt %}
.

Similarly, there is an *ending* block whose filter processes the output of the template engine, once all the template work has been done, allowing you to further process the output.
{% _note_txt %}
in the following listing it's the _post_ process comment line.
{% end_note_txt %}


{% set _code %}
{% raw %}
{% set data_o = D_o.data__o( permalink, collections.all ) %}
{{- '' | template_start( data_o ) -}}{# ante process #}

{%- set _head_block_s %}
{% include "parts/blocks/_head_.njk" %}
{% endset -%}

{%- set _body_block_s %}
{% include "parts/blocks/_body_.njk" %}
{% endset -%}

{%- set _template_s %}
<!doctype html><html lang="{{A_o.LANGUAGE_s}}">
{{- _head_block_s | safe | head_end( data_o ) -}}{# head process #}
{{- _body_block_s | safe | body_end( data_o ) -}}{# body process #}
</html>
{% endset -%}

{%- if output__s %}{% set _template_s = output__s( _template_s ) %}{% endif -%}
{{- _template_s | safe | template_end( data_o ) | minify_html -}}{# post process #}
{% endraw %}
{% endset -%}

{% _code_block %}
    title_s: 'source/matrix/frame.njk',
    lang_s: 'twig',
[//]:#(_code_block)
{{ F_o.tagEscape__s( _code ) }}
{% end_code_block %}


{% _anchor %}
## Processing at build start or end
{% end_anchor %}


The filters invoqued as previously described are also used to make any specific processing required just before the first template is to be processed by Eleventy and just after the last template has been processed. It's kind of a hook, as can be seen is some frameworks, inside Eleventy. This *ante* or *post* processing uses only a directory listing to count the number of template files to be processed and invoque the starting function if no one has already been processed or the ending function if the number of files processed is equivalent to the listing count
{% _note_txt %}
this simple algorithm is based on the fact that all posts are in a single directory, without any subdirectories (otherwise the algorithm would have to walk thru all subdirectories), and that this <q>flat</q> directory contains only Markdown files.
{% end_note_txt %}
.


{% _code_block %}
    title_s: 'source/make/lib/template_process.js',
    lang_s: 'javascript',
[//]:#(_code_block)
{% raw %}
const STRING_o = require( './string.js' )

let files_a       = null
let count_n       = 0
let current_n     = 0

void function ()
{
  const MD_DIR_s = './matter/pages/'    //: all Mardown files
  const DEPTH_n  = 0                    //: ...are located at the root level of MD_DIR_s
  files_a = require( 'klaw-sync' )( MD_DIR_s, { nodir: true, depthLimit: DEPTH_n } )
  if ( files_a ) count_n = files_a.length
} ()


const buildStart__v = data_o =>
{
  console.log( `${count_n} Markdown files to process` )
}

const buildEnd__v = data_o =>
{
  //... what else?
}

const templateStart__s = ( input_s, data_o ) =>
{
  let start_s = input_s
  //... what else?
  return start_s
}

const templateEnd__s = ( input_s, data_o ) =>
{
  let end_s = input_s
  //... what else?
  return end_s
}

const headEnd__s = ( input_s, data_o ) =>
{
  let head_s = input_s
  //... what else?
  return head_s
}

const bodyEnd__s = ( input_s, data_o ) =>
{
  let body_s = input_s
  //... what else?
  return body_s
}

module.exports =
{
  start__s: ( input_s, data_o ) =>
  {
    if ( !files_a ) return input_s
    if ( current_n === 0 ) buildStart__v( data_o )
    let start_s = templateStart__s( input_s, data_o )
    return start_s
  },

  head__s: ( input_s, data_o ) => headEnd__s( input_s, data_o ),

  body__s: ( input_s, data_o ) => bodyEnd__s( input_s, data_o ),

  end__s: ( input_s, data_o ) =>
  {
    ++current_n
    let end_s = templateEnd__s( input_s, data_o )
    if ( current_n === count_n ) buildEnd__v( data_o )
    return end_s
  },
}
{% endraw %}
{% end_code_block %}


Any kind of processing can be done inside the starting and ending functions: in {{ A_o.ID_s }}, the starting function output the number of Markdown files to be processed and the ending function create the file (`menu.html`) listing the pages referenced as links in the menu of the site.

To have full control on the site data, these functions take as argument an `Object` gathering all or a selection of
{% _note_txt %}
made according to the `EXPORT_a` Array declared in the `F_o.js` global data file
{% end_note_txt %}
all declared global data
{% _note_txt %}
including the `page` Object used for pagination, all the collection Objects and even global properties not usually accessible: `content` and `layoutContent`...
{% end_note_txt %}
. These data are retrieve by a simple `set` tag at the begining of the base template:

{% _code_block %}
    title_s: 'source/matrix/frame.njk',
    lang_s: 'twig',
[//]:#(_code_block)
{% raw %}
{% set data_o = F_o.data__o( permalink, collections.all ) %}
{% endraw %}
{% end_code_block %}


and are used by all the template processing functions
{% _note_txt %}
the `data_o` argument
{% end_note_txt %}
.


[comment]: # (======== Links ========)

{{ F_o.siteUrl__s( 'frontmatter_data' ) }}
