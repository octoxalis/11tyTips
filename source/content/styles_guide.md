---js
{
  date:      `2019-09-07`,
  layout:    `frame.njk`,
  permalink: `tips/styles_guide.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  title_s:    `Style guide`,
  subtitle_s: `Styles of this site`,
  abstract_s: `Styles listing`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)
{% _short_note %}h1 element<br>p element (introduction){% end_short_note %}

# Style guide

This is an introduction paragraph which should be limited in length.{ data--="page_intro" }

{% _short_note %}h2 element{% end_short_note %}

## Paragraph title_s

{% _short_note %}h3 element{% end_short_note %}

### Paragraph subtitle_s

NB: Titles have a `font-style: italic`

{% _short_note %}p element{% end_short_note %}

Paragraph content have a maximum line length fixed to 60ch, yielding to a number of  of about 70 characters per line: this is considered the best line length for readibility.

{% _short_note %}inline code{% end_short_note %}

`for( let at = 0; at < keys_a.length; ++at )`

{% _short_note %}example{% end_short_note %}

`for( let at = 0; at < keys_a.length; ++at )`
{data--="example"}

{% _short_note %}code block{% end_short_note %}

{% _code_block %}
    title_s: 'source/eleventy.js',
    lang_s: "javascript",
[//]:#(_code_block)
const ELEVENTY_o =
{
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine:     'njk',
  dataTemplateEngine:     'njk',
  templateFormats:        [ 'md','njk','html' ],
  passthroughFileCopy:    true,
  pathPrefix:             '/',
  dir:
  {
    input:    '.',
    output:   '../site',
    passthru: 'assets',
    data:     'data',
    includes: 'templates',
  },
}

const DIRS_o =
{
  buildDir_s: './build/scripts/js/11ty/',
  contentPartsDir_s: './content/parts',
}

module.exports = config_o =>
{
  config_o.templateIncludesDir_s = ELEVENTY_o.dir.includes
  config_o.contentPartsDir_s = DIRS_o.contentPartsDir_s
  config_o.addPassthroughCopy( 'assets' )    //: static files
; [ 'libraries',
    'shortcodes',
    'filters',
    'plugins',
    'collections'
  ].forEach( config_s => require( `${DIRS_o.buildDir_s}${config_s}.js` )( config_o ) )
  return ELEVENTY_o    // : return the config object for further customization
}
{% end_code_block %}

{% _short_note %}
Unordered list:<br>
`data--="ulist"` attribute has to be set on a *separate line*
{% end_short_note %}
+ Primo
{ data--="ulist" }
+ Secondo
+ Tertio

{% _short_note %}Nested unordered list{% end_short_note %}
+ Primo
{ data--="ulist" }
  - One
{ data--="ulist" }
  - Two
  - Three
+ Secondo
  - Un
{ data--="ulist" }
  - Deux
+ Tertio

{% _short_note %}
List inside an inline note
{% end_short_note %}
- It works...
{% _short_note %}
 *only preceded by a list item*
  + One
{ data--="ulist" }
  + Two
  + Three
{% end_short_note %}

[comment]: # (======== Links ========)
