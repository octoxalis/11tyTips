---js
{
  layout:    `base.njk`,
  permalink: `index.html`,
  //tags:      [ `` ],
  title:     `Eleventy tips`,
  subtitle:  `Inside an awesome static site generator`,
  author:    `Octoxalis`,
  date:      `2019-08-09`,
  hdates:     [ `09-08-2019` ],
  abstract:  `Tips and tricks`,
  
}
---
[comment]: # (======== Post ========)

# 11ty Tips

Welcome to 11tyTips, a site for the awesome [11ty] static site generator users.

{% _one_co %}
    title_s: "Useful tips",
    id_n: 1234,    // comment
    class_s: "a_class"
[//]:#(_one_co)

${_one_co.title_s}

Do you use 11ty?

{% _two_co %}
    title_s: 'Nested component',
    id_n: 42,
    class_s: "b_class",
    call_f: "callTest__s",
[//]:#(_two_co)

${_two_co.title_s}

+ A component can be nested in another component
+ The nested component MUST be of a different kind!
+ Callback property is named **call_s**

*${_two_co.call_f}*

{% end_two_co %}

**Therefore this is the trailing paragraph of ${_one_co.title_s}.**

{% end_one_co %}

{% _codeblock_co %}
    title_s: '/file/path/code.js',
    id_n: 41,
    lang_s: "javascript",
[//]:#(_codeblock_co)
const template_s = `A template string`
const temp_s = `${template_s}--plusplus`
const reg_re = /[a-zA-Z_?]*/gi

const ELEVENTY_o =
{
  scriptsDir: './build/scripts/11ty/',
  contentDir: 'includes/content',
}
module.exports = config_o =>
{
  //======== STATIC FILES
  config_o.addPassthroughCopy( 'static' )
  //======== LIBRARIES
  require( `${ELEVENTY_o.scriptsDir}libraries.js` )( config_o, ELEVENTY_o.contentDir )
  //======== FILTERS
  require( `${ELEVENTY_o.scriptsDir}filters.js` )( config_o )
  //======== SHORTCODES
  require( `${ELEVENTY_o.scriptsDir}shortcodes.js` )( config_o )
  //======== COLLECTIONS
  require( `${ELEVENTY_o.scriptsDir}collections.js` )( config_o )
  // : return the config object for further customization
  return {
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
      includes: 'templates',
    },
  }
}
{% end_codeblock_co %}

{% _codeblock_co %}
    title_s: '/file/path/code_bis.js',
    id_n: 43,
    lang_s: "javascript",
[//]:#(_codeblock_co)
const CALL_s = 'call_f'
const callTest__s = ( content_o ) => `<span class="light">Callback</span> is there: ${content_o.id_n}`
const Render_o =
{
  replace__s: ( component_s, content_o, content_s ) =>
  {
    const keys_a = Object.keys( content_o )
    for( let at = 0; at < keys_a.length; ++at )
    {
      const key_s = keys_a[at]
      content_s = content_s.replace( new RegExp( \`\\$\\{${component_s}.${key_s}\\}\`, 'g' ),
      ( key_s === CALL_s ) ? eval( content_o[key_s] )( content_o ) : content_o[key_s] )
    }
    return content_s
  },
}
module.exports = Render_o
{% end_codeblock_co %}

{% _codeblock_co %}
    title_s: '11tyTips tree',
    id_n: 40,
    lang_s: "txt",
[//]:#(_codeblock_co)
source
├── assets
│   ├── fonts
│   │   ├── athiti-v3-latin-regular.woff2
│   │   ├── FiraCode-Bold.woff2
│   │   ├── FiraCode-Light.woff2
│   │   ├── FiraCode-Medium.woff2
│   │   ├── FiraCode-Regular.woff2
│   │   ├── FiraCode-Retina.woff2
│   │   └── harmattan-v5-latin-regular.woff2
│   ├── scripts
│   │   └── js
│   │       ├── micro-slider.js
│   │       ├── prism.js
│   │       └── prism.min.js
│   └── styles
│       └── css
│           ├── micro-slider.css
│           ├── prism.css
│           └── prism.min.css
├── build
│   └── scripts
│       └── 11ty
│           ├── code_render.js
│           ├── collections.js
│           ├── filters.js
│           ├── libraries.js
│           ├── shortcodes copy.js
│           └── shortcodes.js
├── content
│   ├── assets
│   │   ├── scripts
│   │   │   └── js
│   │   │       └── main.md
│   │   └── styles
│   │       └── css
│   │           └── main.md
│   └── posts
│       └── index.md
├── data
│   ├── posts
│   ├── descriptions.js
│   └── settings.js
├── includes
│   ├── assets
│   │   ├── scripts
│   │   │   └── js
│   │   │       ├── partials
│   │   │       │   └── main.js
│   │   │       └── base.njk
│   │   └── styles
│   │       └── css
│   │           ├── partials
│   │           │   ├── 11ty.css
│   │           │   ├── aspect_ratio.css
│   │           │   ├── color.css
│   │           │   ├── font.css
│   │           │   ├── milligram_button_input.css
│   │           │   ├── milligram_layout.css
│   │           │   ├── milligram.css
│   │           │   ├── prism-theme.css
│   │           │   └── reset.css
│   │           └── base.njk
│   ├── layouts
│   │   └── partials
│   │       ├── blocks
│   │       │   ├── _description_.njk
│   │       │   ├── _head_.njk
│   │       │   ├── _nav_.njk
│   │       │   ├── _scripts_.njk
│   │       │   ├── _seo_.njk
│   │       │   └── _styles_.njk
│   │       ├── lib
│   │       │   └── _instant_page_.njk
│   │       └── _site_url_.njk
│   └── base.njk
├── .eleventy.js
└── .eleventyignore
{% end_codeblock_co %}


[comment]: # (======== Links ========)

[11ty]: https://11ty.io
