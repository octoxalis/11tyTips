---js
{
  layout:    `templates/base_comments.njk`,
  permalink: `tips/site_structure.html`,
  tags:      [ `tip` ],
  title:     `Site structure`,
  subtitle:  `How to structure a JAMstack site`,
  author:    `Octoxalis`,
  date:      `2019-09-05`,
  hdates:     [ `05-09-2019` ],
  abstract:  `Site structure and directories`,
}
---
[comment]: # (======== Post ========)

## The JAMstack architecture

Eleventy, as most static sites, relies on an architectural paradigm called [JAMstack](https://jamstack.org/):
+ JavaScript,
{ .list_noorder }
+ APIs,
+ Markdown.

JavaScript is used not only in the browser for interactivity and presentation but also to build all the files of the site. Markdown is used to set the content of each page of the site, with a preliminary part (front matter) using either JavaScript or a description language like YAML or TOML. The APIs unify 

[comment]: # (======== Links ========)
{{_C._11TY_LINK_s }}
