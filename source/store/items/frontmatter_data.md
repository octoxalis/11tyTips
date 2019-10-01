---js
{
  date:      `2019-09-09`,
  layout:    `frame.njk`,
  permalink: `tips/frontmatter_data.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  title_s:    `Front matter`,
  subtitle_s: `Front matter data howto`,
  abstract_s: `Accessing front matter data in Markdown and templates`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Aliases ========)
{% set _11ty_f = lib.utils.EleventyLink__s %}

[comment]: # (======== Links ========)
{{ _11ty_f( 'JFM_s' ).link }}
{{ _11ty_f( 'UDF_s' ).link }}

[comment]: # (======== Post ========)
## Front matter data

Each Markdown file has its own data, declared at the begining of the file in the front matter part
{% _short_note %}
{{_C.SITE_s}} uses a JavaScript `Object` for the front matter.
{% end_short_note %}
, a few ones being mandatory
{% _short_note %}
no so strickly speaking! For instance, you're not requested to use a Date, but it's more than useful if you want to sort your posts by date.
{% end_short_note %}
, others being used to supply some page specific content or variables
{% _short_note %}
have a look at {{ _11ty_f( 'UDF_s' ).ref }}{target="_blank" rel="noreferrer"} for a list of Eleventy properties usable in front matter.
{% end_short_note %}
.

*Mandatory data*
+ Date
{% _short_note %}
the Date property is mainly used to sort the posts but also to be shown it on the page.
{% end_short_note %}
{ data--="ulist" }
+ Layout
{% _short_note %}
this is the template used to render the page.
{% end_short_note %}
+ Permalink
{% _short_note %}
this is the name of the output file: HTML, or any other format (e.g. minified JavaScript).
{% end_short_note %}
+ Tags
{% _short_note %}
the collection(s) including the output file.
{% end_short_note %}


*Specific data*
+ Title
{% _short_note %}
used by {{_C.SITE_s}} to identify the page in the browser tab.
{% end_short_note %}
{ data--="ulist" }
+ Subtitle
{% _short_note %}
Used by {{_C.SITE_s}} to describe the page content in the Tips list menu.
{% end_short_note %}
+ Abstract
{% _short_note %}
actually not used by {{_C.SITE_s}}, but could be...
{% end_short_note %}
+ Author
{% _short_note %}
useful if there are multiple authors for the posts of the site.
{% end_short_note %}

{% _code_block %}
    title_s: 'Page front matter data',
    lang_s: "javascript",
[//]:#(_code_block)
---js
{
  date:      `2019-09-06`,
  layout:    `frame.njk`,
  permalink: `tips/frontmatter_data.html`,
  tags:      [ `tip` ],

  title_s:     `Front matter`,
  subtitle_s:  `Front matter data access`,
  abstract_s:  `Accessing front matter data in Markdown and templates`,
  author_s:    `Octoxalis`,
}
---
{% end_code_block %}

To access any property declared in the front matter it has to be enclosed in double parenthesis {% raw %}`{{ ... }}`{% endraw %}
{% _short_note %}
{{_C.SITE_s}} uses Nunjucks. Using other templating systems, this is a bit different.
{% end_short_note %}
. For instance, the `abstract_s` property in the front matter is injected in this page with the following code: {% raw %}`{{ abstract_s }}`{% endraw %} and renders as:<br>
<q>{{ abstract_s }}</q>.

## Function properties

If you use JavaScript for the front matter
{% _short_note %}
a very good idea because it gives you the full power of the language to process your content.
{% end_short_note %}
and Nunjucks as templating system, you can declare functions as properties
{% _short_note %}
see {{ _11ty_f( 'JFM_s' ).ref }}{target="_blank" rel="noreferrer"} documentation page.
{% end_short_note %}
. Usually, apart very specific cases, it's much more easy to declare content processing functions in a module located inside the data directory
{% _short_note %}
because it will be accessible from any Markdown content or any template and with the possibility to require any Node package that could be useful.
{% end_short_note %}
.

However, {{_C.SITE_s}} tips list menu is such a case: the `rank__s` property calls the `String.prototype.padStart` method to add one or two `0` before the tip rank to normalize it and is called this way:

{% raw %}`<span>{{ rank__s(loop.index) }}</span>`{% endraw %}
{data--="example"}

[comment]: # (======== Escape Nunjucks ========)
{% set _code %}
{% raw %}
<menu data--="tips_menu">
  <h4><a href="{{ settings.url_s }}">Home</a></h4>
  <h4>→ <a href="{{ settings.git_s }}" target="_blank" rel="noreferrer">Github</a></h4>
  <h4>→ <a href="{{ settings.twi_s }}" target="_blank" rel="noreferrer">Twitter</a></h4>
  <h4>→ <a href="{{ settings.rss_s }}" target="_blank">RSS</a></h4>
  <h2 data--="tips_order">All the tips</h2>
  <ol data--="tips_list">
  {% for _post_o in collections.tip %}
    <li data--="tips_item">
      <span>{{ rank__s(loop.index) }}</span>
      <a href="{{ _post_o.url | url }}">{{ _post_o.data.title_s }}</a>
      <span>{{ _post_o.data.subtitle_s }}</span>
    </li>
  {% endfor %}
  </ol>
</menu>
{% endraw %}
{% endset %}

{% _code_block %}
    title_s: '{{_C.SITE_s}}/source/templates/tips_list.njk',
    lang_s: "javascript"
[//]:#(_code_block)
---js
{
  rank__s: at_n => `#${('' + at_n).padStart( 3, '0' )}`
}
---
{{ _code }}
{% end_code_block %}

But the same result would have been possible calling directly the `padStart` method inside the template
{% _short_note %}
nevertheless, my prefered solution is the property function because it's more readable.
{% end_short_note %}
:

{% raw %}`<span>#{{ ('' + tip_n).padStart( 3, '0' ) }}</span>`{% endraw %}
{data--="example"}

[comment]: # (======== TODO: ## Front matter variables ========)

## Front matter properties and global data functions

{{_C.SITE_s}} is full of Eleventy documentation links: we need official references! Some of these references can appear in different pages and therefore they are potential global data. {{_C.SITE_s}} source has an `utils.js` file inside its `data/lib` directory where a `EleventyLink__s` function compute the link to any Eleventy docs page using an acronym of the page and anchor.

{% _code_block %}
    title_s: '{{_C.SITE_s}}/source/data/lib/utils.js',
    lang_s: "javascript",
[//]:#(_code_block)
EleventyLink__s: ( key_s ) =>
{
  const path_s = _C[ `ELEVENTY_${key_s}` ]
  const anchor_n = path_s.indexOf( '#')
  if ( anchor_n === -1 )    //: return a link to 11ty.io
  {
    console.log( `ALERT! (EleventyLink__s) no anchor found in path: ${path_s}` )
    const ref_n = _C.ELEVENTY_s.indexOf( ':' )
    return { ref: _C.ELEVENTY_s.substring( 0, ref_n ), link: _C.ELEVENTY_s }
  }
  const anchor_s = path_s.substring( anchor_n )
  const anchorLink_s = _C.ELEVENTY_s.replace( ']', `${anchor_s}]`) + path_s
  return { ref: anchorLink_s.substring( 0, anchorLink_s.indexOf( ':') ), link: anchorLink_s }
}
{% end_code_block %}

The acronyms
{% _short_note %}
usually three characters are enough to get a unique identifier:<br>
`JFM_s` for `#javascript-front-matter`,<br>
`UDF_s` for `#user-defined-front-matter-customizations`.
{% end_short_note %}
, used as keys, could be set inside each page front matter and used as a key by the function to expand the actual link reference.

Hence to get the _reference_ and the _link_ of a _reference-style link_ is just as easy as:

{% raw %}`{{ lib.utils.EleventyLink__s( 'JFM_s' ).ref }}`{% endraw %}<br>
{% raw %}`{{ lib.utils.EleventyLink__s( 'JFM_s' ).link }}`{% endraw %}
{data--="example"}

Actually, most of Eleventy link keys are gathered in the `_C.js` global data file and not in the front matter!

### Even shorter

But we can do more, using Nunjucks `set` tag in each Markdown file referencing an Eleventy documentation page, then call the link function as in the following examples:

{% raw %}`{{ _11ty_f( 'JFM_s' ).link }}`{% endraw %}
{% _short_note %}
Reference-style link located in Links section, after the Aliases section.
{% end_short_note %}
{data--="example"}

{% raw %}`{{ _11ty_f( 'JFM_s' ).ref }}`{% endraw %}
{% _short_note %}
reference inside content.
{% end_short_note %}
{data--="example"}

{% _code_block %}
    title_s: '{{_C.SITE_s}}/source/store/items/frontmatter_data.md',
    lang_s: "javascript",
[//]:#(_code_block)
{% raw %}
[comment]: # (======== Aliases ========)
{% set _11ty_f = lib.utils.EleventyLink__s %}

[comment]: # (======== Links ========)
{{ _11ty_f( 'JFM_s' ).link }}
{{ _11ty_f( 'UDF_s' ).link }}

[comment]: # (======== Post ========)
{% endraw %}
{% end_code_block %}
