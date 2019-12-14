---js
{
  date:      `2019-12-12`,
  layout:    `frame.njk`,
  permalink: `tips/minifying.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     10,
  title_s:    `Minifying styles and script`,
  subtitle_s: `Minify, inline, export CSS and JavaScript`,
  abstract_s: `Generate minified CSS and JavaScript as inline blocks or files`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)
# Minifying assets

Use the power of Node packages inside Eleventy.{ data--="page_intro" }

{% _anchor %}
## Bypassing build tools
{% end_anchor %}


Build tools are tedious: that's my opinion, when it comes to simple and static sites. And one of the strength of Eleventy is that you can bypass build tools to accomplish the necessary step of minifying some assets to speed up pages downloading. Of course, you need some processing to reduce all CSS or JavaScript files, but Node is full of packages to do that processing and compress those files and it would be a pity to ignore that power: simply call it up directly within your Eleventy build step.

One of the immediate benefices is that you can therefore split your assets in small chunks to manage them very easily during the development phase.

{% _more_to_come %}
The realm of filters
{% end_more_to_come %}


[comment]: # (======== Links ========)
