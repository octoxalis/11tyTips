/*
 * Shortcodes definition module
 * Nunjucks
 */
const replace__s = require( '../lib/replace.js' )
const content__a = require( '../lib/content_split.js' )

const CODES_o =
{
  _short_note__s: ( content_s ) => `<ins data--="inline_note"><sup></sup><span data--="note_content">${content_s}</span></ins>`,

  _code_block__s: ( content_s ) =>
  {
    const id_s = '_code_block'
    let [ content_a, content_o ] = content__a( content_s, id_s )
    let content_a1_s = content_a[1].replace( /\n\n+/g, '\n&nbsp;\n' )  //: avoid Markdown <p> insert
    return `<hgroup data--="code_ref">
<h5>${content_o.title_s}</h5>
<h6><a href="https://prismjs.com" target"_blank" rel="noreferrer" title="Highlighting provided by Prism.js">Prism</a></h6>
</hgroup>
<pre><code class="language-${content_o.lang_s}">${content_a1_s}</code></pre>`
  },

  _replace_all__s: ( content_s ) =>
  {
    const id_s = '_replace_all'
    let [ content_a, content_o ] = content__a( content_s, id_s )
    return replace__s( content_o, content_a[1] )
  },

}

module.exports = config =>
{
  config.addPairedShortcode("_short_note", ( content_s ) => CODES_o._short_note__s( content_s ) )
  config.addPairedShortcode("_code_block", ( content_s ) => CODES_o._code_block__s( content_s ) )
  config.addPairedShortcode("_replace_all", ( content_s ) => CODES_o._replace_all__s( content_s ) )
}
