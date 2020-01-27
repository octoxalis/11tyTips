---js
{
  date:      `2019-12-12`,
  layout:    `frame.njk`,
  permalink: `tips/site_structure.html`,
  tags:      [ `tip` ],
  eleventyExcludeFromCollections: false,

  rank_n:     1,
  title_s:    `Site structure`,
  subtitle_s: `How to structure a JAMstack site`,
  abstract_s: `Site structure and directories`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)
# The JAMstack architecture

The principles of JAMstack static site.{ data--="page_intro" }

{% _anchor %}
## What is JAMstack?
{% end_anchor %}


Eleventy, as most static sites, relies on an architectural paradigm called [JAMstack]{{U_o.OUTLINK_s}}, an acronym meaning: <q>a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.</q>
{% _note_txt %}
see Mathias Biilmann & Phil Hawksworth book: [Modern Web development on the JAMstack]{{U_o.OUTLINK_s}}.
{% end_note_txt %}.

In the JAMstack architecture, *JavaScript* is used not only in the browser for interactivity and presentation but also to build all the files of the site
{% _note_txt %}
this is the case of Eleventy. Other generators use different languages: Go, Python, etc.
{% end_note_txt %}
; the *APIs* are the programming interfaces to Node packages
{% _note_txt %}
Eleventy itself is a Node package.
{% end_note_txt %}
or other frameworks used as a back end; *Markdown* is used to set the content of each page of the site, with a settings part (front matter) using either JavaScript or a description language like YAML or TOML and a template part
{% _note_txt %}
there are many templating systems: Liquid, Nunjucks, Hanbdlebars, Pug, etc.
{% end_note_txt %}
.

{% _anchor %}
## {{A_o.ID_s}} architecture
{% end_anchor %}


Trying to stay as simple as possible, {{A_o.ID_s}} is built using a minimal set of the JAMstack architecture: **JavaScript**, backed by the Node ecosystem, **Nunjucks**, as templating system, and **Markdown** as content markup language. It doesn't follow the canonical dispatching of files promoted by Eleventy and most satic site generators (data, templates, contents), but follows a pattern examplifying the JAMstack paradigm.

The `source` directory design reflects the JAMstack categories:
+ make
{% _note_txt %}
contains JavaScript modules to be used during the build process and is split in two directories: Eleventy modules (`11ty`) and {{A_o.ID_s}} modules (`lib`).
*This is also where the initial JavaScript file firing the building process is located*. Instead of `.eleventy.js` this file is named `make.js` (without the starting dot because it is not hidden).
{% end_note_txt %}

+ matrix
{% _note_txt %}
gathers, in `./` and `parts` directories, all the templates producing the site HTML files; plus the Javascript and CSS files concatenated and minified (`assets`).
{% end_note_txt %}

+ matter
{% _note_txt %}
contains the Markdown files of all site posts (`pages` subdirectory), plus some files they include (`parts`).
{% end_note_txt %}

{ data--="ulist" }

I sometimes like to call it the *3M* directory
{% _note_txt %}
all of its subdirectory having names begining with an *m* letter, enumerating these directory names sounds like a slogan: <q>make matrix matter(s)!</q>
{% end_note_txt %}
.
All subdirectories of the three first level directories follow a consistent naming scheme:

+ assets
{% _note_txt %}
for directories containing both script files, style files and files not to be processed and just to be passthru copied to output site;
{% end_note_txt %}

+ scripts
{% _note_txt %}
for JavaScript files and, eventually, other scripting language files
{% end_note_txt %}

+ styles
{% _note_txt %}
for Cascading stylesheet files and, eventually, other styling language files (SCCS, etc.)
{% end_note_txt %}

+ parts
{% _note_txt %}
for partial files to be included by other files.
{% end_note_txt %}

{ data--="ulist" }

This structure departs deliberately from what is  generaly adopted by static sites built with Eleventy
{% _note_txt %}
see, for instance, [Eleventy base blog]{{U_o.OUTLINK_s}} structure
{% end_note_txt %}
, examplifying the versatility of the tool
{% _note_txt %}
Eleventy configuration object has two properties allowing this precious flexibility: `dir.data` and `dir.includes`.
{% end_note_txt %}
: **Eleventy doesn't lock you into a predefined scheme** and let you express your specific needs with ease.

{{A_o.ID_s}} has been designed to offer the maximum of flexibility and consistency in the development phase, keeping a strong separation of concerns as to ease any needed refactoring and modification of the code. The site [source tree] gives an overview of the source directory hierarchy.

Following these configuration options leads to a command line *requiring* the `--config` argument:

{% raw %}`npx eleventy --config=make/11ty/make.js`{% endraw %}
{data--="example"}


[comment]: # (======== Links ========)
{{ F_o.siteUrl__s( 'source_tree' ) }}

[JAMstack]: https://jamstack.org/
[Modern Web development on the JAMstack]: https://www.netlify.com/pdf/oreilly-modern-web-development-on-the-jamstack.pdf
[Eleventy base blog]: https://github.com/11ty/eleventy-base-blog