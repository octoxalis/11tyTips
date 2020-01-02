---js
{
  date:      `2019-12-12`,
  layout:    `frame.njk`,
  permalink: `tips/source_tree.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     3,
  title_s:    `Source tree`,
  subtitle_s: `List of the directories and files of this site`,
  abstract_s: `A bird's-eye view of the site`,
  author_s:   `Octoxalis`,
  }
---
[comment]: # (======== Post ========)
# {{A_o.ID_s}} site tree

A bird's eye view of {{A_o.ID_s}} site.{ data--="page_intro" }

{% _code_block %}
    title_s: 'source/matter/pages/parts/_source_tree_.txt',
    lang_s: "txt",
[//]:#(_code_block)
!!!include( _source_tree_.txt )!!!
{% end_code_block %}


[comment]: # (======== Links ========)
