---js
{
  date:      `2019-09-03`,
  layout:    `frame.njk`,
  permalink: `tips/site_cloning.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  title_s:     `Cloning 11tyTips site`,
  subtitle_s:  `Install a new skeleton site`,
  abstract_s:  `Start bloging with a clean site structure`,
  author_s:    `Octoxalis`,
}
---
[comment]: # (======== Post ========)
# Cloning of {{ A_o.ID_s }} site

Why not use {{ A_o.ID_s }} as a boilerplate for your own new site?{ data--="page_intro" }

{% _anchor %}
## Install a clone of {{ A_o.ID_s }} site
{% end_anchor %}


{{ A_o.ID_s }} site has been designed to help those wanting to start with a static site generator such as Eleventy, without spending a lot of time to find the best architecture meeting their needs. All tips explained in its pages are exemplified by its source code: the dogfooding principle!

If you want to use it as a frame for your new site, visit the [{{ U_o.FRAME_s }}]{{U_o.OUTLINK_s}} site.

[comment]: # (======== Links ========)

[{{ U_o.FRAME_s }}]: {{ U_o.FRAME_URL_s }}
