---js
{
  date:      `2019-09-08`,
  layout:    `frame.njk`,
  permalink: `tips/names_guide.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  title_s:    `Names guide`,
  subtitle_s: `Variable naming convention`,
  abstract_s: `How variable identifiers are forged`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)
# Pseudo-typed JavaScript

How to identify variable types using a consistent naming scheme.{ data--="page_intro" }

{% _anchor %}
## No static typing?
{% end_anchor %}


Every developer knows that JavaScript is not a static typed language, a useful feature eliminating lots of bugs.
 A language like Typescript has been created as a remedy to that important lack of safety. Even for code modules counting less than a few tens of lines, it's easy to forget what kind of type is exactly a variable or constant declared at the begining of the file and then make a mistake when assining a wrong type to a variable.

{{A_o.ID_s}} follows the [TypesJS]{{U_o.OUTLINK_s}} naming scheme for a cleaner and more meaningful code.

[comment]: # (======== Links ========)

[TypesJS]: https://typexjs.netlify.com