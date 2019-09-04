---js
{
  layout:    `templates/base.njk`,
  permalink: `site_tree.html`,
  tags:      [ `notag` ],
  title:     `Eleventy tips`,
  subtitle:  `Structure of this site`,
  author:    `Octoxalis`,
  date:      `2019-08-09`,
  hdates:     [ `09-08-2019` ],
  abstract:  `A bird's-eye view of the site`,
  }
---
[comment]: # (======== Post ========)
# {{_C.ID_s}} site

{% _code_block %}
    title_s: '{{_C.ID_s}} tree',
    lang_s: "txt",
[//]:#(_code_block)
source
├── assets
│   ├── fonts
│   │   ├── athiti-v3-latin-regular.woff2
│   │   ├── FiraCode-Regular.woff2
│   │   └── harmattan-v5-latin-regular.woff2
│   ├── media
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   └── favicon-32x32.png
│   ├── scripts
│   │   └── js
│   │       └── prism.min.js
│   ├── styles
│   │   └── css
│   │       └── prism.min.css
│   └── site.webmanifest
├── build
│   └── scripts
│       └── js
│           ├── 11ty
│           │   ├── collections.js
│           │   ├── filters.js
│           │   ├── libraries.js
│           │   ├── plugins.js
│           │   └── shortcodes.js
│           └── lib
│               ├── content_split.js
│               └── replace.js
├── content
│   ├── includes
│   └── posts
│       ├── 404.md
│       ├── feed.md
│       ├── index.md
│       ├── replace_all.md
│       ├── site_tree.md
│       ├── style_guide.md
│       └── tips_list.md
├── data
│   ├── lib
│   │   └── utils.js
│   ├── posts
│   ├── _C.js
│   ├── descriptions.js
│   └── settings.js
├── includes
│   ├── assets
│   │   ├── scripts
│   │   │   └── js
│   │   │       ├── lib
│   │   │       │   └── _instant_page_.njk
│   │   │       ├── partials
│   │   │       │   ├── dom.js
│   │   │       │   └── ui.js
│   │   │       ├── _site_url_.njk
│   │   │       └── base.njk
│   │   └── styles
│   │       └── css
│   │           ├── partials
│   │           │   ├── aspect_ratio.css
│   │           │   ├── color.css
│   │           │   ├── comments.css
│   │           │   ├── dark_mode.css
│   │           │   ├── destyle.css
│   │           │   ├── font.css
│   │           │   ├── fonts_inline.css
│   │           │   ├── full_width.css
│   │           │   ├── html.css
│   │           │   ├── notes.css
│   │           │   ├── prism_theme.css
│   │           │   ├── rootvar.css
│   │           │   ├── sitetree.css
│   │           │   ├── tips_list.css
│   │           │   └── ui.css
│   │           └── base.njk
│   ├── content
│   │   └── kv_const.njk
│   └── templates
│       ├── partials
│       │   └── blocks
│       │       ├── _article_.njk
│       │       ├── _comments_.njk
│       │       ├── _css_load_.njk
│       │       ├── _description_.njk
│       │       ├── _favicon_.njk
│       │       ├── _feed_.njk
│       │       ├── _fonts_.njk
│       │       ├── _fonts_inline_.njk
│       │       ├── _head_.njk
│       │       ├── _nav_.njk
│       │       ├── _scripts_.njk
│       │       ├── _seo_.njk
│       │       └── _styles_.njk
│       ├── base.njk
│       ├── feed.njk
│       └── tips_list.njk
├── .eleventy.js
└── .eleventyignore
{% end_code_block %}

[comment]: # (======== Links ========)

[11ty]: https://11ty.io
