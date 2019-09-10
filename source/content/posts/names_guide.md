---js
{
  date:      `2019-09-08`,
  layout:    `templates/base.njk`,
  permalink: `tips/names_guide.html`,
  tags:      [ `tip` ],

  title_s:    `Names guide`,
  subtitle_s: `Variable naming convention`,
  abstract_s: `How variable identifiers are forged`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)

## A question of names and types

Every developer knows that JavaScript is not a static typed language, a useful feature eliminating lots of bugs.
 A language like Typescript has been created as a remedy to that important lack of safety. Even for code modules counting less than a few tens of lines, it's easy to forget what kind of type is exactly a variable or constant declared at the begining of the file and then make a mistake when assining a wrong type to a variable.

I've adopted a simple recipe to avoid such mistakes: just add a mnemonic letter at the end of each identifier to specify the variable or constant type.
This simple adjonction have a secondary benefice: it simplifies the names variations.

Just an example: the JavaScript `String.prototype.split` function returns an array of Strings:

{% _code_block %}
    title_s: 'MDN web doc',
    lang_s: "javascript",
[//]:#(_code_block)
var str = 'The quick brown fox jumps over the lazy dog.';
var words = str.split(' ');
{% end_code_block %}

Two different words for two tightly related entities! Isn't it more meaningful to use the same identifier with different specifiers?

{% _code_block %}
    title_s: '{{_C.SITE_s}}: Pseudo-typed identifiers',
    lang_s: "javascript",
[//]:#(_code_block)
var lazyDog_s = 'The quick brown fox jumps over the lazy dog.';
var lazyDog_a = lazyDog_s.split(' ');
{% end_code_block %}

A more tricky example:

{% _code_block %}
    title_s: '{{_C.SITE_s}}: Tricky pseudo-typed identifiers',
    lang_s: "javascript",
[//]:#(_code_block)
const oneTwoThree_s = '123'
const oneTwoThree_n = +'123'          //: type conversion to Number
const oneTwoFour_s = '' + ++ID_n      //: type conversion to String
{% end_code_block %}

This naming recipe applies to all primitive immutable types:
+ Null
{ data--="ulist" }
+ Undefined
+ Boolean
+ Number
+ BigInt
+ String
+ Array
+ Object
+ Symbol

It extends to specific Object types:
+ Function
{ data--="ulist" }
+ Class
+ RegExp

Suffixes specifying the type are a single letter preceded by an underscore character, lowercase letters for "wrapped" types
{% _short_note %}
Boolean, Number, BigInt, String, Array, Object, Symbol, Function, Class, RegExp.
See [ MDN Primitive description](https://developer.mozilla.org/en-US/docs/Glossary/Primitive){target="_blank" rel="noreferrer"}.
{% end_short_note %}
, uppercase letters for "unwrapped" types
{% _short_note %}
Null, Undefined.
{% end_short_note %}
.

| Type       | Specifier  |
| -----------|:----------:|
| Null       | __N_     |
| Undefined  | __U_     |
| Boolean    | __b_     |
| Number     | __n_     |
| BigInt     | __i_     |
| String     | __s_     |
| Array      | __a_     |
| Object     | __o_     |
| Symbol     | __y_     |
| Function   | __f_     |
| Class      | __c_     |
| RegExp     | __r_     |
{ .middle_wide }

To give further meaningful information, function identifiers have different specifiers:
in an assignment, the previous convention is used, but for a declaration,
two underscore characters before the type specifier of the return value is used and no specifier when the function returns nothing.

`const awesome__s = () => 'An awesome String'`
{data--="example"}

`const clone_f = awesome__s`
{data--="example"}

{% _code_block %}
    title_s: '{{_C.SITE_s}}/source/includes/assets/scripts/js/partials/dom.js',
    lang_s: "javascript",
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
