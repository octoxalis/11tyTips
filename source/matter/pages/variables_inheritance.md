---js
{
  date:      `2019-12-12`,
  layout:    `frame.njk`,
  permalink: `tips/variables_inheritance.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     14,
  title_s:    `Variables scope and templates inheritance`,
  subtitle_s: `Global and private viariables in Nunjucks blocks`,
  abstract_s: `Take care of scope rules when using template inheritance`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)
# Variables and templates inheritance

In Nunjucks, inheriting templates can have private variables.{ data--="page_intro" }

{% _anchor %}
## Variables and blocks
{% end_anchor %}


When you rely on template inheritance
{% _short_note %}
using the {% raw %}`{% extends %}`{% endraw %} declaration
{% end_short_note %}
, you cant' have a {% raw %}`{% block %}{% endblock %}`{% endraw %} inside a variable `set` block. The other way, a variable declared inside a {% raw %}`{% block %}{% endblock %}`{% endraw %} will not be accessible outside. Therefore, you can't gather all variables in a global variable passed as an argument to the processing filter. However, you still have the possibility to process each block individualy.

{% _anchor %}
### Variables scope
{% end_anchor %}


When using variables declared with the `set` block, never forget that any variable whose name begins with one or more underscore character is **private**. Therefore it can not be imported outside of its block scope
{% _short_note %}
unfortunatly, the Nunjucks documentation doesn't state it: I found this important note in the [Jinja2 documentation]{{U_o.OUTLINK_s}}.
{% end_short_note %}.


[comment]: # (======== Links ========)

[Jinja2 documentation]: https://jinja.palletsprojects.com/en/2.10.x/templates/#import