---js
{
  date:      `2019-09-09`,
  layout:    `templates/base.njk`,
  permalink: `tips/frontmatter_data.html`,
  tags:      [ `tip` ],

  title_s:    `Front matter`,
  subtitle_s: `Front matter data howto`,
  abstract_s: `Accessing front matter data in Markdown and templates`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Aliases ========)
{% set _link_f = lib.utils.EleventyLink__s %}

[comment]: # (======== Links ========)
{{ _link_f( 'jfm_s' )[1] }}
{{ _link_f( 'udf_s' )[1] }}

[comment]: # (======== Post ========)
## Front matter data

Each Markdown file has its own data, declared at the begining of the file in the front matter part
{% _short_note %}
{{_C.SITE_s}} uses a JavaScript `Object` for the front matter.
{% end_short_note %}
, a few ones being mandatory
{% _short_note %}
No so strickly speaking! For instance, you're not requested to use a Date, but it's more than useful if you want to sort your posts by date.
{% end_short_note %}
, others being used to supply some page specific content or variables
{% _short_note %}
Have a look at {{ _link_f( 'udf_s' )[0] }}{target="_blank" rel="noreferrer"} for a list of Eleventy properties usable in front matter.
{% end_short_note %}
.

*Mandatory data*
+ Date
{% _short_note %}
The Date property is mainly used to sort the posts but also to be shown it on the page.
{% end_short_note %}
{ data--="ulist" }
+ Layout
{% _short_note %}
This is the template used to render the page.
{% end_short_note %}
+ Permalink
{% _short_note %}
This is the name of the output file: HTML, or any other format (e.g. minified JavaScript).
{% end_short_note %}
+ Tags
{% _short_note %}
The collection(s) including the output file.
{% end_short_note %}


*Specific data*
+ Title
{% _short_note %}
Used by {{_C.SITE_s}} to identify the page in the browser tab.
{% end_short_note %}
{ data--="ulist" }
+ Subtitle
{% _short_note %}
Used by {{_C.SITE_s}} to describe the page content in the Tips list menu.
{% end_short_note %}
+ Abstract
{% _short_note %}
Actually not used by {{_C.SITE_s}}, but could be...
{% end_short_note %}
+ Author
{% _short_note %}
Useful if there are multiple authors for the posts of the site.
{% end_short_note %}

{% _code_block %}
    title_s: 'Page front matter data',
    lang_s: "javascript",
[//]:#(_code_block)
---js
{
  date:      `2019-09-06`,
  layout:    `templates/base.njk`,
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
A very good idea because it gives you the full power of the language to process your content.
{% end_short_note %}
and Nunjucks as templating system, you can declare functions as properties
{% _short_note %}
See {{ _link_f( 'jfm_s' )[0] }}{target="_blank" rel="noreferrer"} documentation page.
{% end_short_note %}
. Usually, apart very specific cases, it's much more easy to declare content processing functions in a module located inside the data directory
{% _short_note %}
Because it will be accessible from any Markdown content or any template and with the possibility to require any Node package that could be useful.
{% end_short_note %}
.

However, {{_C.SITE_s}} tips list menu is such a case: the `rank__s` property calls the `String.prototype.padStart` method to add one or two `0` before the tip rank to normalize it and is called this way:

{% raw %}`<span>{{ rank__s(tip_n) }}</span>`{% endraw %}
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
  {% for _tip_o in collections.tip %}
    <li data--="tips_entry">
      <span>{{ rank__s(loop.index) }}</span>
      <a href="{{ _tip_o.url | url }}">{{ _tip_o.data.title_s }}</a>
      <span>{{ _tip_o.data.subtitle_s }}</span>
    </li>
  {% endfor %}
  </ol>
</menu>
{% endraw %}
{% endset %}

{% _code_block %}
    title_s: '{{_C.SITE_s}}/source/includes/templates/tips_list.njk',
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
Nevertheless, my prefered solution is the property function because it's more readable.
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
  const path_s = _C[ `eleventy_${key_s}` ]
  const anchor_n = path_s.indexOf( '#')
  if ( anchor_n === -1 )
  {
    console.log( `No anchor found in path ${path_s}` )
    return
  }
  const anchor_s = path_s.substring( anchor_n )
  const anchorLink_s = _C.ELEVENTY_s.replace( ']', `${anchor_s}]`) + path_s
  return [anchorLink_s.substring( 0, anchorLink_s.indexOf( ':') ), anchorLink_s]
}
{% end_code_block %}

The acronyms, used as keys
{% _short_note %}
`jfm_s` is the acronym of `#javascript-front-matter`,
`udf_s` is the acronym of `#user-defined-front-matter-customizations`.
Usually three charachters are enough to get a unique identifier.
{% end_short_note %}
, could be set inside each page front matter and used as a key by the function to expand the actual link reference.

Hence to get the _reference-style link_ and the _link_ itself is just as easy as:

{% raw %}`{{ lib.utils.EleventyLink__s( 'jfm_s' )[0] }}`{% endraw %}<br>
{% raw %}`{{ lib.utils.EleventyLink__s( 'jfm_s' )[1] }}`{% endraw %}
{data--="example"}

Actually, most of Eleventy link keys are gathered in the `_C.js` global data file and not in the front matter!

### Even shorter

But we can do more, using Nunjucks `set` tag in each Markdown file referencing an Eleventy documentation page, then call the link function as in the following examples:

{% raw %}`{{ _link_f( 'jfm_s' )[1] }}`{% endraw %}
{% _short_note %}
Link located in Links section, after the Aliases section.
{% end_short_note %}
{data--="example"}

{% raw %}`{{ _link_f( 'jfm_s' )[0] }}`{% endraw %}
{% _short_note %}
reference-style link inside content.
{% end_short_note %}
{data--="example"}

{% _code_block %}
    title_s: '{{_C.SITE_s}}/source/content/posts/frontmatter_data.md',
    lang_s: "javascript",
[//]:#(_code_block)
{% raw %}
[comment]: # (======== Aliases ========)
{% set _link_f = lib.utils.EleventyLink__s %}

[comment]: # (======== Links ========)
{{ _link_f( 'jfm_s' )[1] }}
{{ _link_f( 'udf_s' )[1] }}

[comment]: # (======== Post ========)
{% endraw %}
{% end_code_block %}
