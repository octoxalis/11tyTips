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
## A question of names and types
{% end_anchor %}


Every developer knows that JavaScript is not a static typed language, a useful feature eliminating lots of bugs.
 A language like Typescript has been created as a remedy to that important lack of safety. Even for code modules counting less than a few tens of lines, it's easy to forget what kind of type is exactly a variable or constant declared at the begining of the file and then make a mistake when assining a wrong type to a variable.

{{A_o.SITE_s}} adopts a simple recipe to avoid such mistakes: only adding a mnemonic letter at the end of each identifier to specify the variable or constant type.
This simple adjonction has a secondary benefice: it simplifies the identifier derivations.

Just an example: the JavaScript `String.prototype.split` method returns an array of Strings:

{% _code_block %}
    title_s: 'MDN web doc',
    lang_s: 'javascript',
[//]:#(_code_block)
var str = 'The quick brown fox jumps over the lazy dog.';
var words = str.split(' ');
{% end_code_block %}


Two different words for two tightly related entities! Isn't it semantically more meaningful to use the same identifier with different specifiers?

{% _code_block %}
    title_s: '{{A_o.SITE_s}}: Pseudo-typed identifiers',
    lang_s: 'javascript',
[//]:#(_code_block)
var lazyDog_s = 'The quick brown fox jumps over the lazy dog.';
var lazyDog_a = lazyDog_s.split(' ');
{% end_code_block %}


A more tricky example
{% _short_note %}
with smart inline type coercion tricks!
{% end_short_note %}
:

{% _code_block %}
    title_s: '{{A_o.SITE_s}}: Tricky pseudo-typed identifiers',
    lang_s: 'javascript',
[//]:#(_code_block)
const oneTwoThree_s = '123'
let   oneTwoThree_n = +oneTwoThree_s          //: to Number
const oneTwoFour_s  = '' + ++oneTwoThree_n    //: to String
{% end_code_block %}

{% _anchor %}
### Types specifiers
{% end_anchor %}


This naming recipe applies to all primitive immutable types:
+ Null
+ Undefined
+ Boolean
+ Number
+ BigInt
+ String
+ Array
+ Object
+ Symbol

{ data--="ulist" }


It extends to specific Object types:
+ Function
+ Class
+ RegExp

{ data--="ulist" }


The suffix specifying the type is a single letter preceded by an underscore character, lowercase letters for "wrapped" types
{% _short_note %}
Boolean, Number, BigInt, String, Array, Object, Symbol, Function, Class, RegExp.
See [ MDN Primitive description](https://developer.mozilla.org/en-US/docs/Glossary/Primitive){{U_o.OUTLINK_s}}.
{% end_short_note %}
, uppercase letters for "unwrapped" types
{% _short_note %}
Null, Undefined.
{% end_short_note %}
.

| Type       | Specifier  |
| -----------|:----------:|
| Null       | __N_        |
| Undefined  | _U_o        |
| Boolean    | __b_        |
| Number     | __n_        |
| BigInt     | __i_        |
| String     | __s_        |
| Array      | __a_        |
| Object     | __o_        |
| Symbol     | __y_        |
| Function   | __f_        |
| Class      | __c_        |
| RegExp     | __r_        |
{ .half_width }

To give further meaningful information, function identifiers follow a different scheme:
instead of using the previous convention you put two underscore characters before the type specifier **of the returned value** and no specifier for a `void` function wich returns nothing.

`const awesome__s = () => 'An awesome String'`
{data--="example"}

`const clone__s = awesome__s`
{data--="example"}

In case of a function returning different types of value, just omit the type character.

`const silly__ = string_b => string_b ? 'A weird String' : 1234`
{data--="example"}

You could do the same for a variable accepting different kinds of type, but is it really a good practice?

`let hybrid_ = 'A String'`<br>
`hybrid_ = 1234  //: What a mess!`
{data--="example"}

{% _code_block %}
    title_s: '{{A_o.SITE_s}}/source/matrix/assets/static/scripts/js/parts/dom.js',
    lang_s: 'javascript',
[//]:#(_code_block)
const DOM_siblings__a = selector_s =>
{
  const node_e = document.querySelector( selector_s )
  return !node_e ?
    null :
    Array.prototype.filter
      .call( node_e.parentNode.children, sibling => sibling !== node_e )
}

const DOM_listReverse = selector_s =>
{
  const nodes_a = Array.prototype.slice.call(document.querySelectorAll( `${selector_s} li` ))
  nodes_a.forEach( node_e => node_e.parentNode.insertBefore( node_e, node_e.parentNode.firstChild ) )
}
{% end_code_block %}


The previous code shows an **exception** to the specifiers convention used: for `DOM` elements, it seems more appropriate to use the `_e` suffix than the `_o` suffix used for `Object`.

This useful convention is used not only in JavaScript context but also in Nunjucks context. However, in templates, variable identifiers are usualy prefixed with an _underscore_ character:

{% raw %}`{% set _URL_s = U_o.url_s %}`{% endraw %}
{data--="example"}

However, don't forget that in Nunjucks, variables names begining with one or more underscore are **private** and can't be exported outside the template.
{% _short_note %}
unfortunatly, the Nunjucks documentation doesn't state it: I found this important note in the [Jinja2 documentation]{{U_o.OUTLINK_s}}.
{% end_short_note %}


[comment]: # (======== Links ========)

[Jinja2 documentation]: https://jinja.palletsprojects.com/en/2.10.x/templates/#import