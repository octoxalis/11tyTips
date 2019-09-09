---js
{
  date:      `2019-09-06`,
  layout:    `templates/base.njk`,
  permalink: `tips/frontmatter_data.html`,
  tags:      [ `tip` ],
  title:     `Front matter`,
  subtitle:  `Front matter data howto`,
  abstract:  `Accessing front matter data in Markdown and templates`,
  author:    `Octoxalis`,
}
---
[comment]: # (======== Post ========)

## Front matter data

Each Markdown file has its own data, declared at the begining of the file in the front matter part
{% _short_note %}
{{site_s}} uses a JavaScript object for front matter.
{% end_short_note %}
, a few ones being mandatory
{% _short_note %}
No so strickly speaking! For instance, you're not requested to use a Date, but it's more than useful if you want to sort your posts by date.
{% end_short_note %}
, others being used to supply some page specific content or variables
{% _short_note %}
Have a look at {{ lib.utils.eltyAnchor__s( 'udf_s' )[0] }}{target="_blank" rel="noreferrer"} for a list of Eleventy properties usable in front matter.
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
  title:     `Front matter`,
  subtitle:  `Front matter data howto`,
  abstract:  `Accessing front matter data in Markdown and templates`,
  author:    `Octoxalis`,

  jfm_s: `/docs/data-frontmatter/#javascript-front-matter`,
}
---
{% end_code_block %}

To access any property declared in the front matter it has to be enclosed in double parenthesis {% raw %}`{{ ... }}`{% endraw %}. For instance, the `abstract` property in the front matter is injected in this page with the following code: {% raw %}`{{ abstract }}`{% endraw %} and renders as:<br>
<q>{{ abstract }}</q>.

## Function properties

If you use JavaScript for the front matter
{% _short_note %}
A very good idea because it gives you the full power of the language to process your content.
{% end_short_note %}
and Nunjucks as templating system, you can declare functions as properties
{% _short_note %}
See {{ lib.utils.eltyAnchor__s( 'jfm_s' )[0] }}{target="_blank" rel="noreferrer"} documentation page.
{% end_short_note %}
. However, apart very specific cases, it's much more easy to declare content processing functions in a module located inside the data directory
{% _short_note %}
Because it will be accessible from any Markdown content or any template and with the possibility to require any Node package that could be useful.
{% end_short_note %}
.

[comment]: # (======== ## Front matter variables ========)

## Front matter properties and global data functions

{{_C.SITE_s}} is full of Eleventy documentation links: we need official references! Some of these references can appear in different pages and therefore they are potential global data. {{_C.SITE_s}} source has an `utils.js` file inside its `data/lib` directory where a `eltyAnchor__s` function compute the link to any Eleventy docs page using an acronym of the page and anchor. The acronyms could be set inside each page front matter and used as a key by the function to expand the actual link reference.

Hence to get the reference-style link and the link itself is just as easy as:
{% raw %}`{{ lib.utils.eltyAnchor__s( 'jfm_s' )[0] }}`{% endraw %}
{% raw %}`{{ lib.utils.eltyAnchor__s( 'jfm_s' )[1] }}`{% endraw %}
{% _short_note %}
Actually, most of Eleventy link keys are gathered in the `_C.js` global data file and not in the front matter.
{% end_short_note %}
.

{% _code_block %}
    title_s: '11tytips/source/data/lib/utils.js',
    lang_s: "javascript",
[//]:#(_code_block)
eltyAnchor__s: ( key_s ) =>
{
  const path_s = _C[ `elty_${key_s}` ]
  const anchor_n = path_s.indexOf( '#')
  if ( anchor_n === -1 )
  {
    console.log( `No anchor found in path ${path_s}` )
    return
  }
  const anchor_s = path_s.substring( anchor_n )
  const anchorLink_s = _C.ELTY_s.replace( ']', `${anchor_s}]`) + path_s
  return [anchorLink_s.substring( 0, anchorLink_s.indexOf( ':') ), anchorLink_s]
}
{% end_code_block %}

[comment]: # (======== Links ========)

{{ lib.utils.eltyAnchor__s( 'jfm_s' )[1] }}
{{ lib.utils.eltyAnchor__s( 'udf_s' )[1] }}