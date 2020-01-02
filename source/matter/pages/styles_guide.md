---js
{
  date:      `2019-12-12`,
  layout:    `frame.njk`,
  permalink: `tips/styles_guide.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     6,
  title_s:    `Styles guide`,
  subtitle_s: `Styles of this site`,
  abstract_s: `Styles listing`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)
# Styles guide
{% _short_note %}h1 element{% end_short_note %}


This is an introduction paragraph which should be limited in length.
{ data--="page_intro" }

{% _short_note %}p element, styled with attribute "page_intro"{% end_short_note %}


{% _anchor %}
## Title
{% end_anchor %}
{% _short_note %}h2 element{% end_short_note %}


{% _anchor %}
### Subtitle
{% end_anchor %}
{% _short_note %}
h3 element<br/>
<b>Titles have a</b> <code>font-style: italic</code>
{% end_short_note %}


**Paragraph** content have a maximum line length fixed to 60ch, yielding to a number of  of about 70 characters per line: this is considered the best line length for readibility.
{% _short_note %}p element{% end_short_note %}


`for ( let at = 0; at < keys_a.length; ++at )`
{% _short_note %}inline code{% end_short_note %}


`for ( let at = 0; at < keys_a.length; ++at )`
{% _short_note %}example{% end_short_note %}
{data--="example"}


{% _code_block %}
    title_s: 'source/make/11ty/libraries.js',
    lang_s: 'javascript',
[//]:#(_code_block)
{% raw %}
module.exports = make_o =>
{
  let markdown_o =
  {
    html:        true,
    linkify:     true,
    typographer: true
  }
  make_o.setLibrary('md',
    require( 'markdown-it' )( markdown_o )
      .use( require( 'markdown-it-attrs' ) )
      .use( require( 'markdown-it-deflist' ) )
      .use( require( 'markdown-it-include' ), make_o.pagesPartsDir_s )
  )
  make_o.setLibrary('njk',
    require('nunjucks')
      .configure( make_o.matrixDir_s, { autoescape: false } ) )  //: autoescape for CSS rules
}
{% endraw %}
{% end_code_block %}
{% _short_note %}code block{% end_short_note %}


### Lists

{% _short_note %}Unordered list{% end_short_note %}

+ Primo
+ Secondo
+ Tertio

{ data--="ulist" }

{% _short_note %}Nested unordered lists{% end_short_note %}


+ Primo
  - One
{ data--="ulist" }
  - Two
  - Three
+ Secondo
  - Un
{ data--="ulist" }
  - Deux
+ Tertio

{ data--="ulist" }



- Inside a short note, it works only preceded by a list item
{% _short_note %}

  + One
{ data--="ulist" }
  + Two
  + Three
{% end_short_note %}


[comment]: # (======== Links ========)
