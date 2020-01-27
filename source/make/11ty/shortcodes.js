const REPLACE__s = require( '../lib/block_replace.js' )
const SPLIT__a   = require( '../lib/block_split.js' )
const F_o        = require( '../../matter/assets/scripts/js/lib/F_o.js' )

const CODES_o =
{
  more_to_come__s: content_s => `<p data--="important">${content_s}<em>(to be continued...)</em></p>`,

  anchor__s: content_s =>
  {
    const cleanContent_s = content_s.trim()
    const level_n = cleanContent_s.indexOf( ' ' )
    const title_s = cleanContent_s.substring( level_n + 1 )
    return `<h${level_n} id="${title_s.toLowerCase().replace(/ /g, '_')}">${title_s}</h${level_n}>`
  },

  note_txt__s: content_s => `<ins data--="note_txt"><sup></sup><span data--="note_content">${content_s}</span></ins>`,

  note_img__s: ( content_s, legend_a ) => //xx`<ins data--="note_img"><sup></sup><span data--="note_content">${content_s}</span></ins>`,
  {
    let legend_s = ''
    if ( legend_a )
    {
      legend_a.forEach( ( at_s, at_n ) =>
        {
          if ( !at_n ) legend_s += `<em class="note_img_title">${at_s}</em><br>`
          else legend_s += `<b class="note_img_subtitle">${at_s}</b>`
        } )
    }
    return `<ins data--="note_img"><sup></sup><span data--="note_content">${content_s}<br>
      ${legend_s}</span></ins>`
  },

  note_link__s: link_a =>
  {
    let link_s = '<em class="note_link_a">'
    link_a.forEach( atlink_s =>
    {
      let function_s, gray_s, color_s
      [ function_s, symbol_s, ...arg_a ] = atlink_s.split( ',' )
      let parameter_s = ''
      arg_a.forEach( arg_s => parameter_s += `'${arg_s.trim()}',` )
      link_s += `<a class="note_link" role="button"
        onclick="${function_s}( this, ${parameter_s} )">${symbol_s}</a>`
    } )
    return link_s + `</em>`
  },

  code_block__s: content_s =>
  {
    let [ content_a, content_o ] = SPLIT__a( content_s, '_code_block' )
    let content_a1_s = content_a[1].replace( /\n\n+/g, '\n<br/>\n' )  //: avoid Markdown <p> insert
    return `<hgroup data--="code_ref">
<h5>${F_o.codeUrl__s( content_o.title_s )}</h5>
<h6><a href="https://prismjs.com" target="_blank" rel="noreferrer noopener" title="Highlighting provided by Prism.js">Prism</a></h6>
</hgroup>
<pre><code class="language-${content_o.lang_s}">${content_a1_s}</code></pre>`
  },

  replace_all__s: content_s =>
  {
    let [ content_a, content_o ] = SPLIT__a( content_s, '_replace_all' )
    return REPLACE__s( content_o, content_a[1] )
  },

}

module.exports = make_o =>
{
  [ 'note_link'
  ].forEach( code_s => make_o.addNunjucksShortcode( `${code_s}`, arg_ => CODES_o[ `${code_s}__s` ]( arg_ ) ) ),

  //make_o.addNunjucksShortcode("note_link", link_a => CODES_o.noteLink__s( link_a ) ),

  [ 'more_to_come',
    'note_txt',
    'note_img',
    'code_block',
    'replace_all',
    'anchor'
  ].forEach( code_s => make_o.addPairedShortcode( `_${code_s}`, ( content_s, arg_ ) => CODES_o[ `${code_s}__s` ]( content_s, arg_ ) ) )
}
