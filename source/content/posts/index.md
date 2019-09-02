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
  upcase__s: output_s => `**${output_s.toUpperCase()}**`
}
---
[comment]: # (======== Post ========)

# 11ty Tips

Welcome to {{_C.ID_s}}, a site for the awesome [11ty] static site generator users.

This page uses global settings (```_C.ID_s```) in the preceding sentence.

A function declared in page front matter (```upcase__s```) is used in the following example (css bold style is from Markdown markup outside the function):

{{ upcase__s( subtitle + ': ' + abstract ) }}
{data--="example"}

The output of the following example is from a function declared in a global JavaScript data directory (```lib/utils.js```) (css italic style is from Markdown markup outside the library function):

_{{ lib.utils.first__s( 'is there!' )}}_
{data--="example"}

{% _code_block %}
    title_s: '/file/path/code_bis.js',
    id_n: 43,
    lang_s: "javascript",
[//]:#(_code_block)
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

[comment]: # (======== Links ========)

[11ty]: https://11ty.io
