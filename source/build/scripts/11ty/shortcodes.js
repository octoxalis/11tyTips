/*
 * Shortcodes definition module
 * Nunjucks
 */
const Render_o = require( './code_render.js' )

const content__a = ( content_s, id_s ) =>
{
  const content_a = content_s.split( `[//]:#(${id_s})` )
  const content_o = require( 'json5' ).parse( `{${content_a[0].trim()}}` )
  return [ content_a, content_o ]
}

const CODES_o =
{
  _codeblock__s: ( content_s, id_s='_codeblock' ) =>
  {
    let [ content_a, content_o ] = content__a( content_s, id_s )
    let content_a1_s = content_a[1].replace( /\n\n+/g, '\n&nbsp;\n' )  //: avoid Markdown <p> insert
    return `<hgroup data--="code_ref">
<h5>${content_o.title_s}</h5>
<h6><a href="https://prismjs.com" target"_blank" rel="noreferrer" title="Highlighting provided by Prism.js">Prism</a></h6>
</hgroup>
<pre><code class="language-${content_o.lang_s}">${content_a1_s}</code></pre>`
  },

  _inlineNote__s: ( content_s ) => `<ins data--="inline_note"><sup></sup><span data--="note_content">${content_s}</span></ins>`,
}

module.exports = config =>
{
  config.addPairedShortcode("_codeblock", ( content_s, id_s ) => CODES_o._codeblock__s( content_s, id_s ) )
  config.addPairedShortcode("_inlineNote", ( content_s, note_n ) => CODES_o._inlineNote__s( content_s, note_n ) )
}
