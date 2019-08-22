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

{% _codeblock %}
    title_s: '/file/path/code_bis.js',
    id_n: 43,
    lang_s: "javascript",
[//]:#(_codeblock)
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
{% end_codeblock %}

{% _codeblock %}
    title_s: '11tyTips tree',
    id_n: 40,
    lang_s: "txt",
[//]:#(_codeblock)
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
{% end_codeblock %}


[comment]: # (======== Links ========)

[11ty]: https://11ty.io
