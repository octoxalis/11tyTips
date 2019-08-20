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
  _codeblock_co__s: ( content_s, id_s='_codeblock_co' ) =>
  {
    let [ content_a, content_o ] = content__a( content_s, id_s )
    let content_a1_s = content_a[1].replace( /\n\n+/g, '\n&nbsp;\n' )  //: avoid Markdown <p> insert
    return `<hgroup>
<h5>${content_o.title_s}</h5>
<h6><a href="https://prismjs.com" target"_blank" rel="noreferrer" title="Highlighting provided by Prism.js">Prism</a></h6>
</hgroup>
<pre><code id="${content_o.id_n}" class="language-${content_o.lang_s}">${content_a1_s}</code></pre>`
  },

}

module.exports = config =>
{
  config.addPairedShortcode("_codeblock_co", ( content_s, id_s ) => CODES_o._codeblock_co__s( content_s, id_s ) )
}
