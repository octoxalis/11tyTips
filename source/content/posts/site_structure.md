---js
{
  date:      `2019-09-03`,
  layout:    `templates/base.njk`,
  permalink: `tips/site_structure.html`,
  tags:      [ `tip` ],
  title:     `Site structure`,
  subtitle:  `How to structure a JAMstack site`,
  abstract:  `Site structure and directories`,
  author:    `Octoxalis`,
}
---
[comment]: # (======== Post ========)

## The JAMstack architecture

Eleventy, as most static sites, relies on an architectural paradigm called [JAMstack]{target="_blank" rel="noreferrer"}, an acronym meaning: <q>a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.</q>
{% _short_note %}
See Mathias Biilmann & Phil Hawksworth book: [Modern Web development on the JAMstack]{target="_blank" rel="noreferrer"}.
{% end_short_note %}.

In the JAMstack architecture, *JavaScript* is used not only in the browser for interactivity and presentation but also to build all the files of the site
{% _short_note %}
This is the case of Eleventy. Other generators use different languages: Go, Python, etc.
{% end_short_note %}
; the *APIs* are the programming interfaces to Node packages
{% _short_note %}
Eleventy itself is a Node package.
{% end_short_note %}
or other frameworks used as a back end; *Markdown* is used to set the content of each page of the site, with a settings part (front matter) using either JavaScript or a description language like YAML or TOML and a template part
{% _short_note %}
There are many templating systems: Liquid, Nunjucks, Hanbdlebars, Pug, etc.
{% end_short_note %}
.

## {{_C.SITE_s}} architecture

Trying to stay as simple as possible, this site is built using a minimal set of the JAMstack architecture: JavaScript backed by the Node ecosystem, Nunjucks and Markdown.


[comment]: # (======== Links ========)

[JAMstack]: https://jamstack.org/
[Modern Web development on the JAMstack]: https://www.netlify.com/pdf/oreilly-modern-web-development-on-the-jamstack.pdf