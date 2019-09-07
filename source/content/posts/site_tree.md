---js
{
  date:      `2019-09-04`,
  layout:    `templates/base_comments.njk`,
  permalink: `tips/site_tree.html`,
  tags:      [ `tip` ],
  title:     `11tyTips source tree`,
  subtitle:  `List of the directories and files of the site`,
  abstract:  `A bird's-eye view of the site`,
  author:    `Octoxalis`,
  }
---
[comment]: # (======== Post ========)
## {{_C.SITE_s}} site

{% _code_block %}
    title_s: '{{_C.SITE_s}} tree',
    lang_s: "txt",
[//]:#(_code_block)
!!!include( site_tree.txt )!!!
{% end_code_block %}

[comment]: # (======== Links ========)

[11ty]: https://11ty.io
