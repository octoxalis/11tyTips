---js
{
  date:      `2019-09-10`,
  layout:    `frame.njk`,
  permalink: `tips/shortcodes.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  title_s:     `Shortcodes`,
  subtitle_s:  `Forging shortcodes`,
  abstract_s:  `Processing Markdown content with shortcodes`,
  author_s:    `Octoxalis`,
}
---
[comment]: # (======== Post ========)

## A corner stone

Shortcodes are probably the most powerful tool to process Markdown content inline. They are simple to create and use, almost anything can be done with them, and they represent an important opportunity that should not be missed. Eleventy has two kinds of shortcode:
+ simple
{% _short_note %}
the shortcode argument (i.e. content) is passed to a single tag (ex. #1).
{% end_short_note %}
{ data--="ulist" }
+ paired
{% _short_note %}
the shortcode argument is passed enclosed between two tags (ex. #2).
{% end_short_note %}

{% raw %}`{% _shortcode_id "argument" %}`{% endraw %}
{data--="example"}

{% raw %}`{% _shortcode_id %}... Content to be processed ...{% end_shortcode_id %}`{% endraw %}
{data--="example"}

{{ _G_.SITE_s }} doesn't use a lot of shortcodes, but they are essential to its content. Let's dissect the most omnipresent of it: the `_code_block` paired shortcode.
It is passed to Eleventy configuration method `addPairedShortcode` this way:

{% raw %}`generator_o.addPairedShortcode('_code_block', content_s => CODES_o.code_block__s( content_s ) )`{% endraw %}
{data--="example"}

Here, `_code_block` is the shortcode identifier
{% _short_note %}
{{ _G_.SITE_s }} uses a leading underscore character because the shortcode closing tag adds the word `end` before the shortcode identifier: `end_shortcode` is more readable than `endshortcode`, isn't it?
{% end_short_note %}

[comment]: # (======== Links ========)