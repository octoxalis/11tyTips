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
  _one_co__s: ( content_s, id_s='_one_co' ) =>
  {
    let [ content_a, content_o ] = content__a( content_s, id_s )
    return Render_o.replace__s( id_s, content_o,
      `<div id="${content_o.id_n}" class="${content_o.class_s}">${content_a[1]}</div>` )
  },

  _two_co__s: ( content_s, id_s='_two_co' ) =>
  {
    let [ content_a, content_o ] = content__a( content_s, id_s )
    return Render_o.replace__s( id_s, content_o,
      `<nav id="${content_o.id_n}" class="${content_o.class_s}"><hr><p>Text from template</p>${content_a[1]}<hr></nav>` )
  },

  _codeblock_co__s: ( content_s, id_s='_codeblock_co' ) =>
  {
    let [ content_a, content_o ] = content__a( content_s, id_s )
    //let content_a1_s = content_a[1].replace( /\/\/----/g, '&nbsp;' )
    let content_a1_s = content_a[1].replace( /\n\n+/g, '\n&nbsp;\n' )  //: avoid Markdown <p> insert
    return `<p class="code">${content_o.title_s} <span>Highlighting provided by <a href="https://prismjs.com" target_"blank" rel="noreferrer">Prism.js</a></span></p>
<pre><code id="${content_o.id_n}" class="language-${content_o.lang_s}">${content_a1_s}</code></pre>`
  },

}

module.exports = config =>
{
  config.addPairedShortcode("_one_co", ( content_s, id_s ) => CODES_o._one_co__s( content_s, id_s ) )
  config.addPairedShortcode("_two_co", ( content_s, id_s ) => CODES_o._two_co__s( content_s, id_s ) )
  config.addPairedShortcode("_codeblock_co", ( content_s, id_s ) => CODES_o._codeblock_co__s( content_s, id_s ) )
}
