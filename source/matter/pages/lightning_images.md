---js
{
  date:      `2020-01-27`,
  layout:    `frame.njk`,
  permalink: `tips/lightning_images.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     17,
  title_s:    `Light(ning) images`,
  subtitle_s: `Lightning-fast images`,
  abstract_s: `How to slim overweight images`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)
# Intangible images

Where are my images?{ data--="page_intro" }

{% _anchor %}
## Please, no delay
{% end_anchor %}


Web images are an endless challenge: we want them wide, beautiful, we want their colors, their evocation power, but in no case their slowness. Evidently images have to be optimised to be as light as possible. {{A_o.ID_s}} uses the outstanding [Compress-Or-Die]{{U_o.OUTLINK_s}} site
{% _note_txt %}
Every front-end developer should visit this site not only for the impressive compression engine proposed by Christoph Erdmann but also for a thorough understanding of the JPEG format
{% end_note_txt %}
to lighten and transform all images for a maximum speed gain.
Nevertheless, {{A_o.ID_s}} goes further and enforces an **on-demand image loading** paradigm: any image is loaded only when the site visitor does want to open the Pandora box
{% _note_txt %}
this is my personal approach to the lazy loading pattern, both lighter and simpler to implement than the usual _Observer_ pattern
{% end_note_txt %}
!


To implement this pattern, the trick is to hide by default all images that do not need to be displayed inconditionnaly
{% _note_txt %}
therefore any image that is a substantial part of the site page (logo, hero, etc.) is not concerned by this on-demand pattern
{% end_note_txt %}
, and unhide them, one by one, at a later time, when a specific action is triggered by the visitor. That specific action is simply the opening of an inline note, tailored for the image case, as in the following _note_
{% _note_img %}
![Adam de Coster][1PX]{data-src="{{U_o.url_s}}assets/media/Adam_de_Coster_gray.jpg" data-size="150"}
{% end_note_img %}


{% _code_block %}
    title_s: 'source/matter/pages/lightning_images.md',
    lang_s: 'twig'
[//]:#(_code_block)
{% raw %}
{% _note_img %}
![Adam de Coster][1PX]{data-src="{{U_o.url_s}}assets/media/Adam_de_Coster_gray.jpg" data-size="150"}
{% end_note_img %}

[comment]: # (======== Links ========)

[1PX]: {{U_o.url_s}}assets/media/1px.jpg "OnePixel"
{% endraw %}
{% end_code_block %}


The `_note_img` shortcode has two parts:

+ a regular Markdown image declaration
{% _note_txt %}
the `![Adam de Coster][1PX]` part
{% end_note_txt %}

+ an associated Markdown attribute
{% _note_txt %}
the `{data-src="{%raw%}{{U_o.url_s}}{%endraw%}assets/media/Adam_de_Coster_gray.jpg"}` part
{% end_note_txt %}

{ data--="ulist" }


As soon as the site visitor clicks the note index for the first time, the image is loaded. This is not an automatic displaying but a manual one: <q>There is an image here, do you want to see it? If you do, here it is!</q>
{% _note_txt %}
Of course, if the image has a big size and the network flow is slow, the image will load slowly. Nevertheless, I think the user experience is much better having an overall very fast page loading and a potentially slow image loading, because this is a well known case, and, moreover, there is no need for any blurring or degraded image which only accentuate the waiting perception and finally *slow down even more* the genuine image display.
{% end_note_txt %}


{% _anchor %}
## Resize à la carte
{% end_anchor %}


For the sake of convinience, specific sizes can be specified for each image in the Markdown source, for instance `50%`:
{% _note_img %}
![Adam de Coster][1PX]{data-src="{{U_o.url_s}}assets/media/Adam_de_Coster_gray.jpg" data-size="50%"}
{% end_note_img %}

The `data-size` attribute takes either a **unique value**
{% _note_txt %}
it will be applied to the width of the image, the height beeing supplied by the browser, keeping the image ratio
{% end_note_txt %}
:

data-size="200"
{data--="example"}

or **two values** separated by a `space` character:
{% _note_txt %}
applied to the width then the height of the image
{% end_note_txt %}
:


data-size="200 200"
{data--="example"}


Since size values are converted in a style attribute added to the image HTML tag, any compliant CSS value can be used: `percentage`, `rem`, etc.
{% _note_img %}
![Adam de Coster][1PX]{data-src="{{U_o.url_s}}assets/media/Adam_de_Coster_gray.jpg" data-size="25%"}
{% end_note_img %}
:

data-size="25%"
{data--="example"}


When no size is added to the inline attribute, by default the image width is 100% of the page width
{% _note_txt %}
and fills the whole available space of its container: if its intrisinc size is less that this one it scales up!
{% end_note_txt %}
. The `_note_img` shortcode also accept an `Array` argument to put a legend
{% _note_txt %}
each slot of this `Array` is a new line of the legend
{% end_note_txt %}
under the image displayed
{% _note_img [ 'Adam de Coster', 'Young women holding a distaff' ] %}
![Adam de Coster][1PX]{data-src="{{U_o.url_s}}assets/media/Adam_de_Coster_gray.jpg"}
{% end_note_img %}
.

{% raw %}`{% _note_img [ 'Adam de Coster', 'Young women holding a distaff' ] %}`{% endraw %}
{data--="example"}


{% _anchor %}
## A 1px default
{% end_anchor %}


Because a true image declaration is needed by the Markdown processor, a one pixel sized image data URI
{% _note_txt %}
see this base64 png pixel [generator]{{U_o.OUTLINK_s}}
{% end_note_txt %}
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
<ins data--="note_img">
  <sup></sup>
  <span data--="note_content">
    <em class="note_link_a">
      <a class="note_link"
         role="button"
         onclick="loadColorImg__v( this, 'gray', )"> ⤵</a>
    </em>
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
         alt="Adam de Coster"
         title="A young woman holding a distaff before a lit candle"
         data-src="http://11tytips.netlify.com/assets/media/Adam_de_Coster_gray.jpg"
         data-size="100%"><br>
    <em class="note_img_title">Adam de Coster [1586-1643]</em><br>
    <b class="note_img_subtitle">Young women holding a distaff before a lit candle</b>
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


{% _anchor %}
## Further image optimisation and control
{% end_anchor %}


When images displayed using the on-demand loading mechanism described in this tip are an important matter  for the site content
{% _note_txt %}
i.e. images are a substantial part of the content, not just an illustration to decorate the text content
{% end_note_txt %}
; when image compression must preserve a high rendering quality; the image size can still be heavy, more than a few hundreds of kilobytes. A useful technique is to propose, at first, a meaningful presentation of the image in grayscale instead of full color! Actually, grayscale images, eliminating the less meaningful part of the image data: color, and retaining only the most important one: luminosity, are so useful to the sensory perception that, in many cases, they are the most important step of the content understanding.

As a consequence, {{A_o.ID_s}} can fire a dual step loading mechanism: first, a grayscale image then, *only if needed*
{% _note_txt %}
if the site visitor does want it: in the following example, by clicking the button above the image
{% end_note_txt %}
, second, the full size colored image, which replaces the first one
{% _note_img [ 'Adam de Coster [1586-1643]', 'Young women holding a distaff before a lit candle' ] %}
{% note_link [ 'loadColorImg__v, ⤵, gray' ] %}
![Adam de Coster][1PX]{data-src="{{U_o.url_s}}assets/media/Adam_de_Coster_gray.jpg" data-size="100%"}
{% end_note_img %}
.


{% _anchor %}
## Identification and legend
{% end_anchor %}


Most of the time, the image tag `title` attribute
{% _note_txt %}
an its factotum the `alt` attribute
{% end_note_txt %}
is enough regarding image identification. But sometimes it can be necessary to display more information
{% _note_txt %}
for instance a title, a place, a credit, etc.
{% end_note_txt %}
: this is the purpose of the legend `Array` mentioned above.
But some reactivity can be necessary too. This is the purpose of another shortcode, named `note_link`: this is an `Array` of strings, each one enclosing a function name with its dedicated symbol and arguments
{% _note_txt %}
if the function has arguments
{% end_note_txt %}
.

{% raw %}`{% note_link [ 'loadColorImg__v, ⤵, gray, color' ] %}`{% endraw %}
{data--="example"}

Each slot of this `Array` yields a link, displaying the function symbol, which triggers the function itself. In the previous image note, the function `loadColorImg__v` loads the heavy full colored image coming to replace the much lighter gray one initialy loaded, which acts as an image preview
{% _note_txt %}
Light *grayscale* image (500 x 720 pixels): 18 698 bytes<br>
Heavy *full color* image (1388 x 2000 pixels): 158 852 bytes<br>
Ratio is 0.11<br>
<i>This ratio could even be much less using a smaller grayscale image, if the aim were to just have an image preview, instead of a gray image to study contrasts, luminosity, etc.</i>
{% end_note_txt %}
.


[comment]: # (======== Links ========)

[1PX]: {{ F_o.img1px__s() }} "A young woman holding a distaff before a lit candle"
[Compress-Or-Die]: https://compress-or-die.com/
[generator]: http://png-pixel.com/