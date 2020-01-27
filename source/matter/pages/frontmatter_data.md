---js
{
  date:      `2019-12-12`,
  layout:    `frame.njk`,
  permalink: `tips/frontmatter_data.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     8,
  title_s:    `Front matter`,
  subtitle_s: `Front matter data howto`,
  abstract_s: `Accessing front matter data in Markdown and templates`,
  author_s:   `Octoxalis`,

  output__s: output_s => output_s.replace( /\[% raw %\]/g, '{% raw %}' ).replace( /\[% endraw %\]/g, '{% endraw %}' ),
}
---
[comment]: # (======== Aliases ========)

{% set _11ty__s = F_o.eleventyUrl__s %}

[comment]: # (======== Links ========)

{{ _11ty__s( 'JFM_s' ).link_s }}
{{ _11ty__s( 'UDF_s' ).link_s }}

[comment]: # (======== Post ========)

# Front matter data

Front matter, the initial section of each Markdown file, offers much more than you think.{ data--="page_intro" }

{% _anchor %}
## Front matter is all you need
{% end_anchor %}


Each Markdown file has its own data, declared at the begining of the file in the front matter part
{% _note_txt %}
{{A_o.ID_s}} uses a JavaScript `Object` for the front matter.
{% end_note_txt %}
, a few ones being mandatory
{% _note_txt %}
no so strickly speaking! For instance, you're not requested to use a Date, but it's more than useful if you want to sort your posts by date.
{% end_note_txt %}
, others being used to supply some page specific content or variables
{% _note_txt %}
have a look at {{ _11ty__s( 'UDF_s' ).ref_s }}{{U_o.OUTLINK_s}} for a list of Eleventy properties usable in front matter.
{% end_note_txt %}
.


**Mandatory data**

+ Date
{% _note_txt %}
the Date property is mainly used to sort the posts but also to be shown it on the page.
{% end_note_txt %}

+ Layout
{% _note_txt %}
this is the template used to render the page.
{% end_note_txt %}

+ Permalink
{% _note_txt %}
this is the name of the output file: HTML, or any other format (e.g. minified JavaScript).
{% end_note_txt %}

+ Tags
{% _note_txt %}
the collection(s) including the output file.
{% end_note_txt %}

{ data--="ulist" }


**Specific data**

+ Menu index
{% _note_txt %}
Tip pages are sorted using this index, instead of the creation date.
{% end_note_txt %}

+ Title
{% _note_txt %}
used by {{A_o.ID_s}} to identify the page in the browser tab.
{% end_note_txt %}

+ Subtitle
{% _note_txt %}
Used by {{A_o.ID_s}} to describe the page content in the Tips list menu.
{% end_note_txt %}

+ Abstract
{% _note_txt %}
actually not used by {{A_o.ID_s}}, but could be...
{% end_note_txt %}

+ Author
{% _note_txt %}
useful if there are multiple authors for the posts of the site.
{% end_note_txt %}

{ data--="ulist" }


{% _code_block %}
    title_s: 'source/matter/pages/frontmatter_data.md',
    lang_s: 'javascript',
[//]:#(_code_block)
---js
{
  date:      `2019-12-12`,
  layout:    `frame.njk`,
  permalink: `tips/frontmatter_data.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     8,
  title_s:    `Front matter`,
  subtitle_s: `Front matter data howto`,
  abstract_s: `Accessing front matter data in Markdown and templates`,
  author_s:   `Octoxalis`,

  output__s: output_s => output_s.replace( /\[% raw %\]/g, '{% raw %}' ).replace( /\[% endraw %\]/g, '{% endraw %}' ),
}
---
{% end_code_block %}


To access any property declared in the front matter it has to be enclosed in double parenthesis {% raw %}`{{ ... }}`{% endraw %}
{% _note_txt %}
{{A_o.ID_s}} uses Nunjucks. Using other templating systems, this is a bit different.
{% end_note_txt %}
. For instance, the `abstract_s` property in the front matter is injected in this page with the following code: {% raw %}`{{ abstract_s }}`{% endraw %} and renders as:<br/>
<q>{{ abstract_s }}</q>.

{% _anchor %}
## Function properties
{% end_anchor %}


If you use JavaScript for the front matter
{% _note_txt %}
a very good idea because it gives you the full power of the language to process your content.
{% end_note_txt %}
and Nunjucks as templating system, you can declare functions as properties
{% _note_txt %}
see {{ _11ty__s( 'JFM_s' ).ref_s }}{{U_o.OUTLINK_s}} documentation page.
{% end_note_txt %}
. Usually, apart very specific cases, it's much more easy to declare content processing functions in a module located inside the data directory
{% _note_txt %}
because it will be accessible from any Markdown content or any template and with the possibility to require any Node package that could be useful.
{% end_note_txt %}
.

However, this page front matter is such a case: the `output__s` front matter last property is a conventional way to execute a function after processing the entire page
{% _note_txt %}
see also [frontmatter function] page.
{% end_note_txt %}
.


[comment]: # (======== TODO: ## Front matter variables ========)


{% _anchor %}
## Front matter properties and global data functions
{% end_anchor %}


{{A_o.ID_s}} is full of Eleventy documentation links: we need official references! Some of these references can appear in different pages and therefore they are potential global data. {{A_o.ID_s}} source has an `F_o.js` file inside its `matter/assets/scripts/js/lib` directory where a `eleventyUrl__s` function computes the link to any Eleventy docs page using an acronym of the page and anchor.

{% _code_block %}
    title_s: 'source/matter/assets/scripts/js/lib/F_o.js',
    lang_s: 'javascript',
[//]:#(_code_block)
eleventyUrl__s: key_s =>
{
  const path_s = U_o[ `ELEVENTY_${key_s}` ]
  const anchor_n = path_s.indexOf( '#')
  if ( anchor_n === -1 )    //: return a link to 11ty.io
  {
    console.log( `ALERT! no anchor found in path: ${path_s}` )
    const ref_n = U_o.ELEVENTY_s.indexOf( ':' )
    return { ref_s: U_o.ELEVENTY_s.substring( 0, ref_n ), link_s: U_o.ELEVENTY_s }
  }
  const anchor_s = path_s.substring( anchor_n )
  const anchorLink_s = U_o.ELEVENTY_s.replace( ']', `${anchor_s}]`) + path_s
  return { ref_s: anchorLink_s.substring( 0, anchorLink_s.indexOf( ':') ), link_s: anchorLink_s }
}
{% end_code_block %}


The acronyms
{% _note_txt %}
usually three characters are enough to get a unique identifier:<br/>
`JFM_s` for `#javascript-front-matter`,<br/>
`UDF_s` for `#user-defined-front-matter-customizations`.
{% end_note_txt %}
, used as keys, could be set inside each page front matter and used as a key by the function to expand the actual link reference.

Hence to get the _reference_ and the _link_ of a _reference-style link_ is just as easy as:

{% raw %}`{{ F_o.eleventyUrl__s( 'JFM_s' ).ref_s }}`{% endraw %}<br/>
{% raw %}`{{ F_o.eleventyUrl__s( 'JFM_s' ).link_s }}`{% endraw %}
{data--="example"}

Actually, most of Eleventy link keys are gathered in the `U_o.js` global data file and not in the front matter!

{% _anchor %}
### Even shorter
{% end_anchor %}


But we can do more, using Nunjucks {% raw %}`{% set %}`{% endraw %} tag in each Markdown file referencing an Eleventy documentation page, then call the link function as in the following examples:

{% raw %}`{{ _11ty__s( 'JFM_s' ).link_s }}`{% endraw %}
{% _note_txt %}
Reference-style link located in Links section, after the Aliases section.
{% end_note_txt %}
{data--="example"}

{% raw %}`{{ _11ty__s( 'JFM_s' ).ref_s }}`{% endraw %}
{% _note_txt %}
reference inside content.
{% end_note_txt %}
{data--="example"}

{% _code_block %}
    title_s: 'source/matter/pages/frontmatter_data.md',
    lang_s: 'javascript',
[//]:#(_code_block)
{% raw %}
[comment]: # (======== Aliases ========)
{% set _11ty__s = F_o.eleventyUrl__s %}

{{ _11ty__s( 'JFM_s' ).link_s }}
{{ _11ty__s( 'UDF_s' ).link_s }}

[comment]: # (======== Post ========)
{% endraw %}
{% end_code_block %}


[comment]: # (======== Links ========)
{{ F_o.siteUrl__s( 'frontmatter_function' ) }}
