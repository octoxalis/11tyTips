---js
{
  date:      `2019-09-04`,
  layout:    `frame.njk`,
  permalink: `tips/source_tree.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  title_s:    `Source tree`,
  subtitle_s: `List of the directories and files of this site`,
  abstract_s: `A bird's-eye view of the site`,
  author_s:   `Octoxalis`,
  }
---
[comment]: # (======== Post ========)
# {{_G_.SITE_s}} site tree

A bird's eye view of {{_G_.SITE_s}} site.{ data--="page_intro" }

{% _code_block %}
    title_s: '{{_G_.SITE_s}} source tree',
    lang_s: "txt",
[//]:#(_code_block)
!!!include( _source_tree_.txt )!!!
{% end_code_block %}


[comment]: # (======== Links ========)
