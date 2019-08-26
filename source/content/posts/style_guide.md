---js
{
  layout:    `base.njk`,
  permalink: `style_guide.html`,
  //tags:      [ `` ],
  title:     `Eleventy tips`,
  subtitle:  `Inside an awesome static site generator`,
  author:    `Octoxalis`,
  date:      `2019-08-09`,
  hdates:     [ `09-08-2019` ],
  abstract:  `Tips and tricks`,
  
}
---
[comment]: # (======== Post ========)

# Style guide

Welcome to {{settings._id}}, a site for the awesome [11ty] static site generator users.

## The Article element

The article element
{% _short_note %}
__An HTML5 addition__
<u></u>
The &lt;article&gt; tag has been added in *HTML5* standard.
__<br>__
{% end_short_note %}
represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.

##  The Hgroup element

The hgroup element
{% _short_note %}
<code>
for( let at = 0; at < keys_a.length; ++at )
</code>
{% end_short_note %}
represents the heading of a section, which consists of all the h1–h6 element children of the hgroup element. The element is used to group a set of h1–h6 elements when the heading has multiple levels, such as subheadings, alternative titles, or taglines.

The rank of an hgroup element is the rank of the highest-ranked h1–h6 element descendant of the hgroup element, if there are any such elements, or otherwise the same as for an h1 element (the highest rank). Other h1–h6 elements of heading content in the hgroup element indicate subheadings or subtitles or (secondary) alternative titles.

{% _code_block %}
    title_s: '/file/path/code_bis.js',
    id_n: 43,
    lang_s: "javascript",
[//]:#(_code_block)
const CALL_s = 'call_f'
const callTest__s = ( content_o ) => `<span class="light">Callback</span> is there: ${content_o.id_n}`
const Render_o =
{
  replace__s: ( component_s, content_o, content_s ) =>
  {
    const keys_a = Object.keys( content_o )
    for( let at = 0; at < keys_a.length; ++at )
    {
      const key_s = keys_a[at]
      content_s = content_s.replace( new RegExp( \`\\$\\{${component_s}.${key_s}\\}\`, 'g' ),
      ( key_s === CALL_s ) ? eval( content_o[key_s] )( content_o ) : content_o[key_s] )
    }
    return content_s
  },
}
module.exports = Render_o    //: Don't forget to add a comment!
{% end_code_block %}

[comment]: # (======== Links ========)

[11ty]: https://11ty.io
