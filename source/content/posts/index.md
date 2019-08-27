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
  uppercase__s: function( output_s )
  {
    return `**${output_s.toUpperCase()}**`
  }
}
---
[comment]: # (======== Post ========)

# 11ty Tips

Welcome to {{_C._ID}}, a site for the awesome [11ty] static site generator users.

This page uses global settings (```_C._ID```) in the preceding sentence and a function declared in page data (```subtitle__s```) in the following one. Output of function inside this page front matter (css bold style is from Markdown markup outside the function):

{{ uppercase__s( subtitle + ': ' + abstract ) }}{[data--="example"]}

This output is from a function declared in a global JavaScript data directory (```lib/utils.js```) (css italic style is from Markdown markup outside the library function):

_{{ lib.utils.first__s( 'is there!' )}}_{[data--="example"]}

{% _code_block %}
    title_s: '/file/path/code_bis.js',
    id_n: 43,
    lang_s: "javascript",
[//]:#(_code_block)
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
//: Don't forget to add a comment!
module.exports = Render_o
{% end_code_block %}

{% _code_block %}
    title_s: '{{_C._ID}} tree',
    id_n: 40,
    lang_s: "txt",
[//]:#(_code_block)
source
├── assets
│   ├── fonts
│   │   ├── athiti-v3-latin-regular.woff2
│   │   ├── FiraCode-Regular.woff2
│   │   └── harmattan-v5-latin-regular.woff2
│   ├── media
│   │   └── GitHub-Mark.png
│   ├── scripts
│   │   └── js
│   │       └── prism.min.js
│   ├── styles
│   │   └── css
│   │       └── prism.min.css
│   └── svg
│       └── Twitter_Logo.svg
├── build
│   └── scripts
│       ├── 11ty
│       │   ├── collections.js
│       │   ├── filters.js
│       │   ├── libraries.js
│       │   └── shortcodes.js
│       └── lib
│           ├── content_split.js
│           └── replace.js
├── content
│   └── posts
│       ├── 404.md
│       ├── index.md
│       ├── replace_all.md
│       ├── style_guide.md
│       └── tips_list.md
├── data
│   ├── lib
│   │   ├── const.js
│   │   └── utils.js
│   ├── posts
│   ├── descriptions.js
│   └── settings.js
├── includes
│   ├── assets
│   │   ├── icons
│   │   │   ├── _github_.svg
│   │   │   ├── _menu_.svg
│   │   │   └── _twitter_.svg
│   │   ├── scripts
│   │   │   └── js
│   │   │       ├── partials
│   │   │       │   ├── dom.js
│   │   │       │   └── ui.js
│   │   │       └── base.njk
│   │   └── styles
│   │       └── css
│   │           ├── partials
│   │           │   ├── aspect_ratio.css
│   │           │   ├── color.css
│   │           │   ├── dark_mode.css
│   │           │   ├── destyle.css
│   │           │   ├── font.css
│   │           │   ├── fonts_inline.css
│   │           │   ├── html.css
│   │           │   ├── notes.css
│   │           │   ├── prism_theme.css
│   │           │   ├── rootvar.css
│   │           │   └── ui.css
│   │           └── base.njk
│   ├── content
│   │   └── globals.njk
│   ├── layouts
│   │   └── partials
│   │       ├── blocks
│   │       │   ├── _article_.njk
│   │       │   ├── _css_load_.njk
│   │       │   ├── _description_.njk
│   │       │   ├── _favicon_.njk
│   │       │   ├── _fonts_.njk
│   │       │   ├── _fonts_inline_.njk
│   │       │   ├── _head_.njk
│   │       │   ├── _nav_.njk
│   │       │   ├── _scripts_.njk
│   │       │   ├── _seo_.njk
│   │       │   └── _styles_.njk
│   │       ├── lib
│   │       │   └── _instant_page_.njk
│   │       └── _site_url_.njk
│   ├── base.njk
│   └── list.njk
├── .eleventy.js
└── .eleventyignore
{% end_code_block %}


[comment]: # (======== Links ========)

[11ty]: https://11ty.io
