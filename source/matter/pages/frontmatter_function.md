---js
{
  date:      `2019-12-12`,
  layout:    `frame.njk`,
  permalink: `tips/frontmatter_function.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     12,
  title_s:    `Front matter post processing function`,
  subtitle_s: `Modify the template engine output`,
  abstract_s: `A front matter function can be invoqued to modify the global or partial output of the template engine`,
  author_s:   `Octoxalis`,

  output__s: output_s => output_s.replace( /\[% raw %\]/g, '{% raw %}' ).replace( /\[% endraw %\]/g, '{% endraw %}' ),
}
---
[comment]: # (======== Post ========)
# JavaScript front matter functions

For specific processing needs of a page, you can declare functions in the front matter section.{ data--="page_intro" }

{% _anchor %}
## Post processing the template engine output
{% end_anchor %}


A singular use case of a front matter function
{% _note_txt %}
see [frontmatter data] page for an introduction to front matter properties.
{% end_note_txt %}
is when you want to process the output of the template engine. For instance, in Nunjucks, if you want to output something that would normaly be processed as a Nunjucks block
{% _note_txt %}
exactly what I'm doing writing this page!
{% end_note_txt %}
, you have to enclose it in a `[% raw %][% endraw %]` tags pair. But it doesn't work if you want to output only one tag of the pair either the `[% raw %]` or `[% endraw %]` tag. The shortcoming is simple: use a front matter function.

In the markdown file, the `raw` tags are writen by replacing the curly bracket characters (`{` and `}`) by the square bracket characters (`[` and `]`) and reverted to curly brackets after the template processing with the front matter function.

By convention, I call this front matter function `output__s` and it takes as argument the  template engine output, to process it the way I want.

{% _code_block %}
    title_s: 'source/matter/pages/frontmatter_function.md',
    lang_s: 'javascript'
[//]:#(_code_block)
{% raw %}
---js
{
  //...
  output__s: output_s => output_s.replace( /\[% raw %\]/g, '{% raw %}' ).replace( /\[% endraw %\]/g, '{% endraw %}' )
}
---
{% endraw %}
{% end_code_block %}


This `output__s` function is automaticaly invoqued (if it exists in the front matter part of any Markdown file) at the end of the global frame template passing the template engine result previously captured by a Nunkucks {% raw %}`{% set %} {% endset %}`{% endraw %} block.

{% _code_block %}
    title_s: 'source/matrix/frame.njk',
    lang_s: "twig"
[//]:#(_code_block)
{% raw %}
{%- set _template_s %}
<!doctype html><html lang="{{A_o.LANGUAGE_s}}">
{{- _head_block_s | safe | head_end( data_o ) -}}{# head process #}
{{- _body_block_s | safe | body_end( data_o ) -}}{# body process #}
</html>
{% endset -%}

{%- if output__s %}{% set _template_s = output__s( _template_s ) %}{% endif -%}
{% endraw %}
{% end_code_block %}


However, you are not at all constrained to process the output of the template engine globally: you can process only a part of it if you see fit as well as you can use multiple processing functions and multiple invocations. It's just a question of enclosing the output to process in a `set` block.


[comment]: # (======== Links ========)
{{ F_o.siteUrl__s( 'frontmatter_data' ) }}
