const replace__s = require( '../lib/block_replace.js' )
const split__a   = require( '../lib/block_split.js' )

const CODES_o =
{
  short_note__s: content_s =>
`<ins data--="inline_note"><sup></sup><span data--="note_content">${content_s}</span></ins>`,

  code_block__s: content_s =>
  {
    let [ content_a, content_o ] = split__a( content_s, '_code_block' )
    let content_a1_s = content_a[1].replace( /\n\n+/g, '\n<br>\n' )  //: avoid Markdown <p> insert
    return `<hgroup data--="code_ref">
<h5>${content_o.title_s}</h5>
<h6><a href="https://prismjs.com" target="_blank" rel="noreferrer" title="Highlighting provided by Prism.js">Prism</a></h6>
</hgroup>
<pre><code class="language-${content_o.lang_s}">${content_a1_s}</code></pre>`
  },

  replace_all__s: content_s =>
  {
    let [ content_a, content_o ] = split__a( content_s, '_replace_all' )
    return replace__s( content_o, content_a[1] )
  },

}

module.exports = config_o =>
{
  config_o.addPairedShortcode('_short_note', content_s => CODES_o.short_note__s( content_s ) )
  config_o.addPairedShortcode('_code_block', content_s => CODES_o.code_block__s( content_s ) )
  config_o.addPairedShortcode('_replace_all', content_s => CODES_o.replace_all__s( content_s ) )
}
