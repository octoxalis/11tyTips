---js
{
  layout:    `templates/base.njk`,
  permalink: `tips/replace_all.html`,
  tags:      [ `tip` ],
  title:     `Replace all`,
  subtitle:  `how to replace all content`,
  author:    `Octoxalis`,
  date:      `2019-08-09`,
  hdates:     [ `09-08-2019` ],
  abstract:  `Tips and tricks`,
}
---
[comment]: # (======== Post ========)
{% _replace_all %}
    {% include "content/kv_const.njk" %},
    "FUNCTION": "**nice function**",
    "SOMETHING": "_something you know_",
    "ELSE": "```or anything else```"
[//]:#(_replace_all)
# 11ty Tips

Welcome to ${_ID_s}, a site for the awesome [11ty] static site generator users.

```replace_all``` is ${FUNCTION}:
replacing ${SOMETHING}, ${ELSE}, is easy.

[comment]: # (======== Links ========)
${_11TY_s}

{% end_replace_all %}
