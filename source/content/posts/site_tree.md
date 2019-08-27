---js
{
  layout:    `base.njk`,
  permalink: `site_tree.html`,
  //tags:      [ `` ],
  title:     `Eleventy tips`,
  subtitle:  `Structure of this site`,
  author:    `Octoxalis`,
  date:      `2019-08-09`,
  hdates:     [ `09-08-2019` ],
  abstract:  `A bird's-eye view of the site`,
  }
---
[comment]: # (======== Post ========)

# {{_C._ID}} site

{% _code_block %}
    title_s: '{{_C._ID}} tree',
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
│   │   └── share.njk
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
