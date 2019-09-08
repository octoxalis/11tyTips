---js
{
  date:      `2019-09-04`,
  layout:    `templates/base.njk`,
  permalink: `tips/source_tree.html`,
  tags:      [ `tip` ],
  title:     `Source tree`,
  subtitle:  `List of the directories and files of this site`,
  abstract:  `A bird's-eye view of the site`,
  author:    `Octoxalis`,
  }
---
[comment]: # (======== Post ========)
## {{_C.SITE_s}} site

{% _code_block %}
    title_s: '{{_C.SITE_s}} source tree',
    lang_s: "txt",
[//]:#(_code_block)
!!!include( source_tree.txt )!!!
{% end_code_block %}

[comment]: # (======== Links ========)
