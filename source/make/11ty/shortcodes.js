const replace__s = require( '../lib/block_replace.js' )
const split__a   = require( '../lib/block_split.js' )

const CODES_o =
{
  anchor__s: content_s =>
  {
    const cleanContent_s = content_s.trim()
    const level_n = cleanContent_s.indexOf( ' ' )
    const title_s = cleanContent_s.substring( level_n + 1 )
    return `<h${level_n} id="${title_s.toLowerCase().replace(/ /g, '_')}">${title_s}</h${level_n}>`
  },

  short_note__s: content_s => `<ins data--="inline_note"><sup></sup><span data--="note_content">${content_s}</span></ins>`,

  more_to_come__s: content_s => `<p data--="important">${content_s}<em>(to be continued...)</em></p>`,

  code_block__s: content_s =>
  {
    let [ content_a, content_o ] = split__a( content_s, '_code_block' )
    let content_a1_s = content_a[1].replace( /\n\n+/g, '\n<br/>\n' )  //: avoid Markdown <p> insert
    return `<hgroup data--="code_ref">
<h5>${content_o.title_s}</h5>
<h6><a href="https://prismjs.com" target="_blank" rel="noreferrer noopener" title="Highlighting provided by Prism.js">Prism</a></h6>
</hgroup>
<pre><code class="language-${content_o.lang_s}">${content_a1_s}</code></pre>`
  },

  replace_all__s: content_s =>
  {
    let [ content_a, content_o ] = split__a( content_s, '_replace_all' )
    return replace__s( content_o, content_a[1] )
  },

}

module.exports = make_o =>
{
  [ 'more_to_come',
    'short_note',
    'code_block',
    'replace_all',
    'anchor'
  ].forEach( code_s => make_o.addPairedShortcode( `_${code_s}`, content_s => CODES_o[ `${code_s}__s` ]( content_s ) ) )
}
