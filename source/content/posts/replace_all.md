---js
{
  layout:    `base.njk`,
  permalink: `replace_all.html`,
  //tags:      [ `` ],
  title:     `Eleventy tips - replace all`,
  subtitle:  `How to replace all content`,
  author:    `Octoxalis`,
  date:      `2019-08-09`,
  hdates:     [ `09-08-2019` ],
  abstract:  `Tips and tricks`,
  uppercase__s: function( output_s )
  {
    return `**${output_s.toUpperCase()}**`
  },
}
---
[comment]: # (======== Post ========)
{% _replace_all %}
    "SITE_ID": "{{settings.siteId}}",
    "FUNCTION": "**nice function**",
    "SOMETHING": "_something you know_",
    "ELSE": "```or anything else```",
    "E11_IO": "{{settings.E11Url}}"
[//]:#(_replace_all)
# 11ty Tips

Welcome to ${SITE_ID}, a site for the awesome [11ty] static site generator users.

```replace_all``` is ${FUNCTION}:
replacing ${SOMETHING}, ${ELSE}, is easy.

[comment]: # (======== Links ========)
${E11_IO}

{% end_replace_all %}
