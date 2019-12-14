---js
{
  date:      `2019-12-12`,
  layout:    `frame.njk`,
  permalink: `tips/eleventy_configure.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     4,
  title_s:    `Eleventy settings`,
  subtitle_s: `Customizing Eleventy`,
  abstract_s: `The main components of an Eleventy site build`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)
# Eleventy configuration

You can customize Eleventy starting file as you see fit.{ data--="page_intro" }

{% _anchor %}
## The Eleventy JavaScript file
{% end_anchor %}


Eleventy uses a simple file, named by default `.eleventy.js`
{% _short_note %}
because of the leading dot it's an hidden file
{% end_short_note %}
, to define the settings of the building environment. This file is, by default, located at the root of the source folder but it can be put anywhere. The name itself can also be changed, if you see fit.
{% _short_note %}
{{A_o.ID_s}} modifies both the name, calling it `make.js`, and the location, putting it in the `source/make/11ty` directory.
{% end_short_note %}

This file defines the settings of the main resources used in the building process: _libraries_, _shortcodes_, _filters_, _plugins_, etc. {{A_o.ID_s}} fragments this monolithic file in specific modules, each devoted to a part of the configuration, all located in the `source/make/11ty/` directory. The configuration object returned by the configuration/make file is important because it defines the location of the main components of the building process: the `input` and `output` directories, the templates processors, etc.

{{A_o.ID_s}} declares its own set of directories, modifying some of the default names and locations
{% _short_note %}
for instance, the leading underscore character is suppressed for `output`, `lib` and `matrix` directories, in lieu of `_output`, `_data` and `_includes`; `static` directory is named `assets`, etc.
{% end_short_note %}


{% _code_block %}
    title_s: 'source/make/11ty/make.js',
    lang_s: 'javascript',
[//]:#(_code_block)
{% raw %}
const MAKE_o =
{
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine:     'njk',
  dataTemplateEngine:     'njk',
  templateFormats:        [ 'njk', 'md' ],
  passthroughFileCopy:    true,
  pathPrefix:             '/',
  dir:
  {
    input:    '.',
    output:   '../site',
    data:     'matter/assets/scripts/js/lib',  //: _data
    includes: 'matrix',                        //: _includes
  },
}
const DIRS_o =
{
  makeDir_s:  './',
  pagesPartsDir_s: './matter/pages/parts',
}
module.exports = make_o =>
{
  make_o.matrixDir_s = MAKE_o.dir.includes
  make_o.pagesPartsDir_s = DIRS_o.pagesPartsDir_s
  make_o.addPassthroughCopy( { "matrix/assets/static": "assets" } )    //: static files
; [ 'libraries',
    'shortcodes',
    'filters',
    'plugins',
    'collections'
  ].forEach( make_s => require( `${DIRS_o.makeDir_s}${make_s}.js` )( make_o ) )
  return MAKE_o    // : return the configuration object for further customization
}
{% endraw %}
{% end_code_block %}


[comment]: # (======== Links ========)
