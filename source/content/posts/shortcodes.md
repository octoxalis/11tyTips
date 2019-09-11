---js
{
  date:      `2019-09-10`,
  layout:    `templates/base.njk`,
  permalink: `tips/shortcodes.html`,
  tags:      [ `tip` ],

  title_s:     `Shortcodes`,
  subtitle_s:  `Forging shortcodes`,
  abstract_s:  `Processing Markdown content with shortcodes`,
  author_s:    `Octoxalis`,
}
---
[comment]: # (======== Post ========)

## Corner stone

_Shorcodes_ are probably the most powerful tool to process Markdown content inline. They are simple to create and use, almost anything can be done with them, and they represent an important opportunity that should not be missed. Eleventy has two kinds of shortcode:
+ simple
{% _short_note %}
The shortcode argument (i.e. content) is passed to a single tag (example #1).
{% end_short_note %}
{ data--="ulist" }
+ paired
{% _short_note %}
The shortcode argument is passed enclosed between two tags (example #2).
{% end_short_note %}
{% raw %}
`{% shortcode_id "argument" %}`{data--="example"}
{% endraw %}
{% raw %}
`{% shortcode_id %}... Content to be processed ...{% end_shortcode_id %}`{data--="example"}
{% endraw %}

{{ _C.SITE_s }} doesn't use a lot of shortcodes, but they are essential to its content. Let's dissect the most omnipresent of it: the `_code_block` shortcode.

[comment]: # (======== Links ========)
