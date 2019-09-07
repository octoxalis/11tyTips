---js
{
  date:      `2019-09-05`,
  layout:    `templates/base_comments.njk`,
  permalink: `tips/style_guide.html`,
  tags:      [ `tip` ],
  title:     `Style guide`,
  subtitle:  `inside an awesome static site generator`,
  abstract:  `Tips and tricks`,
  author:    `Octoxalis`,
}
---
[comment]: # (======== Post ========)
{% _short_note %}h1 element<br>p element (introduction){% end_short_note %}

# Style guide

This is an introduction paragraph which should be limited in length.{ data--="page_intro" }

{% _short_note %}h2 element{% end_short_note %}

## Paragraph title

{% _short_note %}h3 element{% end_short_note %}

### Paragraph subtitle

NB: Titles have a `font-style: italic`

{% _short_note %}p element{% end_short_note %}

Paragraph content have a maximum line length fixed to 60ch, yielding to a number of  of about 70 characters per line: this is considered the best line length for readibility.

{% _short_note %}inline code{% end_short_note %}

`for( let at = 0; at < keys_a.length; ++at )`

{% _short_note %}code block{% end_short_note %}

{% _code_block %}
    title_s: 'source/eleventy.js',
    lang_s: "javascript",
[//]:#(_code_block)
const ELEVENTY_o =
{
  buildDir_s: './build/scripts/js/11ty/',
  templateIncludesDir_s: 'includes',
  contentIncludesDir_s: './content/includes',
}

module.exports = config_o =>
{
  config_o.templateIncludesDir_s = ELEVENTY_o.templateIncludesDir_s
  config_o.contentIncludesDir_s = ELEVENTY_o.contentIncludesDir_s
  config_o.addPassthroughCopy( 'assets' )    //: STATIC FILES
  ;
  [ 'libraries',
    'collections',
    'shortcodes',
    'filters',
    'plugins'
  ].forEach( config_s => require( `${ELEVENTY_o.buildDir_s}${config_s}.js` )( config_o ) )

  return {    // : return the config object for further customization
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
      data:     'data',
      includes: 'includes',
      passthru: 'assets',
    },
  }
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
