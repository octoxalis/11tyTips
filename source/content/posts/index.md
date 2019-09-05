---js
{
  layout:    `templates/base.njk`,
  permalink: `index.html`,
  tags:      [ `notag` ],
  title:     `Eleventy tips`,
  subtitle:  `Inside Eleventy static site generator`,
  author:    `Octoxalis`,
  date:      `2019-08-09`,
  hdates:     [ `09-08-2019` ],
  abstract:  `Eleventy tips and tricks`,
}
---
[comment]: # (======== Post ========)

## It's Eleventy time!

Welcome to {{_C.ID_s}}, a site for the awesome [11ty] static site generator users.

Eleventy (11ty for short) is a static site generator rapidly gaining popularity among JAMstack developers. Its learning curve is short and it offers the largest choice of templating languages compared with others popular SSG
{% _short_note %}
SSGs usually provide only one templating option: React, Liquid, Go, Jinja2, etc.
<br>
[Hexo](https://www.staticgen.com/hexo) is the most notable exception, but Eleventy has even more options.
{% end_short_note %}
.

11ty can be used without any configuration
{% _short_note %}
Eleventy is really [zero-config] out ofthe box!
{% end_short_note %}
, but its huge power comes from the fact that it is backed by all the Node.js ecosystem. Therefore, you can do anything Node is able to do when building your static site with 11ty.

## Tips for newbies...and advanced users



Have a look at the site [source tree]

[comment]: # (======== Links ========)

[source tree]: {{ settings.url_s + 'site_tree.html' }}
[11ty]: https://11ty.io
[zero-config]: https://www.11ty.io/docs/resources/#zero-config
