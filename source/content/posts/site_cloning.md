---js
{
  date:      `2019-09-03`,
  layout:    `templates/base.njk`,
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

## Install a clone of {{ _C.SITE_s }} site

{{ _C.SITE_s }} site has been carefully designed to help those who want to start to use a static site generator such as Eleventy without spending a lot of time to find the best architecture meeting their needs.

A static site is built with three different components:
+ assets (fonts, media, scripts, styles);
{ data--="ulist" }
+ templates (proto html files with placeholders);
+ content (actual content to inject in the template files).

[comment]: # (======== Links ========)
