---js
{
  layout:    `templates/base.njk`,
  permalink: `index.html`,
  tags:      [ `notag` ],
  title:     `Eleventy tips`,
  subtitle:  `Inside an awesome static site generator`,
  author:    `Octoxalis`,
  date:      `2019-08-09`,
  hdates:     [ `09-08-2019` ],
  abstract:  `Tips and tricks`,
  upcase__s: string_s => `**${string_s.toUpperCase()}**`
}
---
[comment]: # (======== Post ========)

# 11ty Tips

Welcome to {{_C.ID_s}}, a site for the awesome [11ty] static site generator users.

This page uses global settings (`_C.ID_s`) in the preceding sentence.

In `example #1`, a function declared in page front matter (`upcase__s`) is used (css bold style is from Markdown markup outside the function):

{{ upcase__s( subtitle + ': ' + abstract ) }}
{data--="example"}

In `example #2`, the output is from a function declared in a global JavaScript data directory (`lib/utils.js`) (css italic style is from Markdown markup outside the library function):

_{{ lib.utils.first__s( 'is there!' )}}_
{data--="example"}

_markdown-it-attrs_ Node package is used to set attributes in this page Markdown code, e.g. adding, on its own line, a `{data--="example"}` directive at the end of the `example #3` paragraph:

This is an example paragraph!
{data--="example"}

The following code block is the source of this page (not including the code block itself):

{% _code_block %}
    title_s: '{{_C.PRO_s}}index.md',
    id_n: 43,
    lang_s: "md",
[//]:#(_code_block)
---js
{
  layout:    `templates/base.njk`,
  permalink: `index.html`,
  tags:      [ `notag` ],
  title:     `Eleventy tips`,
  subtitle:  `Inside an awesome static site generator`,
  author:    `Octoxalis`,
  date:      `2019-08-09`,
  hdates:     [ `09-08-2019` ],
  abstract:  `Tips and tricks`,
  upcase__s: string_s => `**${string_s.toUpperCase()}**`
}
---
[comment]: # (======== Post ========)

# 11ty Tips

Welcome to {{_C.ID_s}}, a site for the awesome [11ty] static site generator users.

This page uses global settings (`_C.ID_s`) in the preceding sentence.

In `example #1`, a function declared in page front matter (`upcase__s`) is used (css bold style is from Markdown markup outside the function):

{{ upcase__s( subtitle + ': ' + abstract ) }}
{data--="example"}

In `example #2`, the output is from a function declared in a global JavaScript data directory (`lib/utils.js`) (css italic style is from Markdown markup outside the library function):

_{{ lib.utils.first__s( 'is there!' )}}_
{data--="example"}

_markdown-it-attrs_ Node package is used to set attributes in this page Markdown code, e.g. adding, on its own line, a `{data--="example"}` directive at the end of the `example #3` paragraph:

This is an example paragraph!
{data--="example"}

The following code block is the source of this page (not including the code block itself):

[comment]: # (======== Links ========)

[11ty]: https://11ty.io

{% end_code_block %}

Have a look at the site [source tree]

[comment]: # (======== Links ========)

[source tree]: {{ settings.url_s + 'site_tree.html' }}
[11ty]: https://11ty.io
