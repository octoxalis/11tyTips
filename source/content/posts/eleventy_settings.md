---js
{
  date:      `2019-09-05`,
  layout:    `templates/base.njk`,
  permalink: `tips/eleventy_settings.html`,
  tags:      [ `tip` ],

  title_s:     `Eleventy settings`,
  subtitle_s:  `Customizing Eleventy`,
  abstract_s:  `The main components of an Eleventy site build`,
  author_s:    `Octoxalis`,
}
---
[comment]: # (======== Post ========)

## The Eleventy JavaScript file

Eleventy uses a simple Javascript file, named `.eleventy.js`
{% _short_note %}
Because of the leading dot it's an hidden file.
{% end_short_note %}
, to define the settings of the building environment. This file is located at the root of the source folder but it can be put anywhere, just modifying the Node `package.json` file `"main"` property. The name itself can also be changed, if you see fit.

This file defines the settings of the main resources used in the building process: _libraries_, _shortcodes_, _filters_, _plugins_, etc. {{_C.SITE_s}} fragments this monolithic file in specific modules, each devoted to the configuration of a resource, all located in the `source/build/script/js/11ty/` directory.

The configuration object returned by the `.eleventy.js` module is important because it defines the location of the main parts of the building process: the `input` and `output` directories, the templates processors, etc.

{{_C.SITE_s}} declares its own set of directories, modifying some of the default names and locations
{% _short_note %}
For instance, the leading underscore character is suppressed for `output`, `data` and `includes` directories, in lieu of `_output`, `_data` and `_includes`; `static` directory is named `assets`, etc.
{% end_short_note %}


[comment]: # (======== Links ========)
