---js
{
  date:      `2019-09-02`,
  layout:    `templates/base.njk`,
  permalink: `tips/site_structure.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  title_s:    `Site structure`,
  subtitle_s: `How to structure a JAMstack site`,
  abstract_s: `Site structure and directories`,
  author_s:   `Octoxalis`,
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

Trying to stay as simple as possible, {{_C.SITE_s}} is built using a minimal set of the JAMstack architecture: JavaScript backed by the Node ecosystem, Nunjucks as templating system and Markdown as content markup language.

The `source` directory is designed to reflect these categories of resources:

+ build
{% _short_note %}
Contains JavaScript modules to be used during the build process. For consistancy with other source script directories, it is deeply refined in `script/js/` and split in two directories: Eleventy modules (`11ty`) and {{_C.SITE_s}} modules (`lib`).
{% end_short_note %}
+ includes
{% _short_note %}
Gathers all the templates used either by the Markdown files (`templates`) or the Javascript and CSS files to be joined and minified (`assets`).
{% end_short_note %}
+ content & data
{% _short_note %}
The first directory contains the Markdown files of all site posts, plus some files included in them;
the second one gathers JavaScript data modules consumed by the Markdown content files.
{% end_short_note %}
{ data--="ulist" }

A further directory is added to contain all the third-party assets used by the site: _fonts_, _media_, _scripts_ and _styles_ which are passthru copied to the built site directory.

This structure has been designed to offer the maximum of flexibility and consistence in the development phase, keeping a strong separation of concerns as to ease any needed refactoring and modification of the code.

[comment]: # (======== Links ========)

[JAMstack]: https://jamstack.org/
[Modern Web development on the JAMstack]: https://www.netlify.com/pdf/oreilly-modern-web-development-on-the-jamstack.pdf