const SITE_s  = '11tyTips'
const URL_s   = `https://${SITE_s.toLowerCase()}.netlify.com/`
const XALIS_s = 'octoxalis'

module.exports =
{
  SITE_s: `${SITE_s}`,
  DEV_s:  `http://127.0.0.1:5500/`,
  PRO_s:  `${URL_s}`,
  GIT_s:  `https://github.com/${XALIS_s}/${SITE_s}/`,
  TWI_s:  `https://twitter.com/${SITE_s}/`,
  RSS_s:  `${URL_s}feed.xml`,

  HOME_s:    `[Home page]: ${URL_s}`,
  NODE_s :    `[Node.js]: https://nodejs.org`,
  COMMENT_s: `[utteranc.es]: https://github.com/utterance/utterances`,

  ELEVENTY_s: `[Eleventy]: https://11ty.io`,
  ELEVENTY_JFM_s: `/docs/data-frontmatter/#javascript-front-matter`,
  ELEVENTY_UDF_s: `/docs/data-frontmatter/#user-defined-front-matter-customizations`,

  OUTLINK_s: '{target="_blank" rel="noreferrer noopener"}',
}
