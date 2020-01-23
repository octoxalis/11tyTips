---js
{
  date:      `2020-01-02`,
  layout:    `frame.njk`,
  permalink: `tips/lightning_images.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     17,
  title_s:    `Light(ning) images`,
  subtitle_s: `Lightning-fast images`,
  abstract_s: `How to alleviate overweight images`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)
# Intangible images

Where are my images?{ data--="page_intro" }

{% _anchor %}
## Please, no delay
{% end_anchor %}


Web images are an endless challenge: we want them wide, beautiful, we want their colors, their evocation power, but in no case their slowness. {{A_o.ID_s}} adopts an on-demand image loading paradigm: any image is loaded only when requested by the site visitor
{% _short_note %}
this is my personal approach of the lazy loading pattern, both lighter and simpler to implement than the _Observer_ pattern
{% end_short_note %}
.


To implement this pattern, the trick is to hide by default all images that do not need to be displayed inconditionnaly
{% _short_note %}
therefore any image that is a substantial part of the site page (logo, hero, etc.) is not concerned by this on-demand pattern
{% end_short_note %}
, to unhide them, one by one, at a later time when a specific action is triggered by the visitor. That specific action is a simple opening of an inline note, tailored for the image case, as in the following _note_
{% _short_img %}
![Adam de Coster][1PX]{data-src="{{U_o.url_s}}assets/media/wide_img.webp" data-size="150"}
{% end_short_img %}


{% _code_block %}
    title_s: 'source/matter/pages/lightning_images.md',
    lang_s: 'twig'
[//]:#(_code_block)
{% raw %}
{% _short_img %}
![Adam de Coster][1PX]{data-src="{{U_o.url_s}}assets/media/wide_img.webp" data-size="150"}
{% end_short_img %}

[comment]: # (======== Links ========)

[1PX]: {{U_o.url_s}}assets/media/1px.webp "OnePixel"
{% endraw %}
{% end_code_block %}


The `_short_img` shortcode has two parts:

+ a regular Markdown image declaration
{% _short_note %}
the `{%raw%}![Adam de Coster][1PX]{%endraw%}` part
{% end_short_note %}

+ an associated Markdown attribute
{% _short_note %}
the `{%raw%}{data-src="{{U_o.url_s}}assets/media/wide_img.webp"}{%endraw%}` part
{% end_short_note %}

{ data--="ulist" }


As soon as the site visitor clicks the note index for the first time, the image is loaded. This is not an automatic displaying but a manual one: <q>There is an image here, do you want to see it? If you do, here it is!</q>
{% _short_note %}
Of course, if the image has a big size and the network flow is slow, the image will load slowly. Nevertheless, I think the user experience is much better having an overall very fast page loading and a potentially slow image loading, because this is a well known case, and, moreover, there is no need for any blurring or degraded image which only accentuate the waiting perception and finally *slow down even more* the genuine image display.
{% end_short_note %}


{% _anchor %}
## Resize à la carte
{% end_anchor %}


For the sake of convinience, specific sizes can be specified for each image in the Markdown source:
{% _short_img %}
![Adam de Coster][1PX]{data-src="{{U_o.url_s}}assets/media/wide_img.webp" data-size="50%"}
{% end_short_img %}

The `data-size` attribute takes either a **unique value**
{% _short_note %}
it will be applied to the width of the image, the height beeing supplied by the browser, keeping the image ratio
{% end_short_note %}
:

data-size="200"
{data--="example"}

or **two values** separated by a `space` character:
{% _short_note %}
applied to the width then the height of the image
{% end_short_note %}
:


data-size="200 200"
{data--="example"}


Since size values are converted in a style attribute added to the image HTML tag, any compliant CSS value can be used: `percentage`, `rem`, etc.
{% _short_img %}
![Adam de Coster][1PX]{data-src="{{U_o.url_s}}assets/media/wide_img.webp" data-size="25%"}
{% end_short_img %}
:

data-size="25%"
{data--="example"}


When no size is added to the inline attribute, by default the image width is 100% of the page width
{% _short_img %}
![Adam de Coster][1PX]{data-src="{{U_o.url_s}}assets/media/wide_img.webp"}
{% end_short_img %}
.


{% _anchor %}
## A 1px default
{% end_anchor %}


Because a true image declaration is needed by the Markdown processor, a one pixel sized image data URI
{% _short_note %}
see this base64 png pixel [generator](http://png-pixel.com/)
{% end_short_note %}
is systematically used as a placeholder: it's very light and {{A_o.ID_s}} has a CSS rule to prevent it to be displayed anyway. And it can be inserted at the end of the Markdown file like it is here, with the an helper function:


{% _code_block %}
    title_s: 'source/matter/pages/lightning_images.md',
    lang_s: 'twig'
[//]:#(_code_block)
{% raw %}
[comment]: # (======== Links ========)
[1PX]: {{ F_o.img1px__s() }} "A young woman holding a distaff before a lit candle"
{% endraw %}
{% end_code_block %}


And here is the final code produced:

{% set _code %}
{% raw %}
<ins data--="inline_img">
  <sup></sup>
  <span data--="note_content">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
         alt="Adam de Coster"
         title="A young woman holding a distaff before a lit candle"
         data-src="http://127.0.0.1:5500/assets/media/wide_img.webp"
         data-size="50%">
  </span>
</ins>
{% endraw %}
{% endset -%}

{% _code_block %}
    title_s: 'site/tips/lightning_images.html',
    lang_s: 'html'
[//]:#(_code_block)
{{ F_o.tagEscape__s( _code ) }}
{% end_code_block %}


[comment]: # (======== Links ========)

[1PX]: {{ F_o.img1px__s() }} "A young woman holding a distaff before a lit candle"
