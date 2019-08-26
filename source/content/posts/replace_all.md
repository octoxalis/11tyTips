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
}
---
[comment]: # (======== Post ========)
{% _replace_all %}
    {% include "content/share.njk" %},
    "FUNCTION": "**nice function**",
    "SOMETHING": "_something you know_",
    "ELSE": "```or anything else```"
[//]:#(_replace_all)
# 11ty Tips

Welcome to ${_ID}, a site for the awesome [11ty] static site generator users.

```replace_all``` is ${FUNCTION}:
replacing ${SOMETHING}, ${ELSE}, is easy.

[comment]: # (======== Links ========)
${_11TY}

{% end_replace_all %}
