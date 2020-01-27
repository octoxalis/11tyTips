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
{% _note_txt %}h1 element{% end_note_txt %}


This is an introduction paragraph which should be limited in length.
{ data--="page_intro" }

{% _note_txt %}p element, styled with attribute "page_intro"{% end_note_txt %}


{% _anchor %}
## Title
{% end_anchor %}
{% _note_txt %}h2 element{% end_note_txt %}


{% _anchor %}
### Subtitle
{% end_anchor %}
{% _note_txt %}
h3 element<br/>
<b>Titles have a</b> <code>font-style: italic</code>
{% end_note_txt %}


**Paragraph** content have a maximum line length fixed to 60ch, yielding to a number of  of about 70 characters per line: this is considered the best line length for readibility.
{% _note_txt %}p element{% end_note_txt %}


`for ( let at = 0; at < keys_a.length; ++at )`
{% _note_txt %}inline code{% end_note_txt %}


`for ( let at = 0; at < keys_a.length; ++at )`
{% _note_txt %}example{% end_note_txt %}
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
{% _note_txt %}code block{% end_note_txt %}


### Lists

{% _note_txt %}Unordered list{% end_note_txt %}

+ Primo
+ Secondo
+ Tertio

{ data--="ulist" }

{% _note_txt %}Nested unordered lists{% end_note_txt %}


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
{% _note_txt %}

  + One
{ data--="ulist" }
  + Two
  + Three
{% end_note_txt %}


[comment]: # (======== Links ========)
