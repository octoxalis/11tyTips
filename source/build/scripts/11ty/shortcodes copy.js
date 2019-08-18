/*
 * Shortcodes definition module
 * Nunjucks
 */
const CODES_o =
{
   /*
   {% articleFolder, svgIcon %}
   
   __content__
   
   {% endarticleFolder %}
   */

  articleFolder__s: ( content_s, svgIcon_s ) =>
  {
    const icon_s = svgIcon_s ||
`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewbox="0 0 64 64"
id="ca_svg_icon_ctrl_text" class="ca_svg_icon" title="Déplier-Replier"
onclick="DOMOpenFolderAll()">
<line x1="4" y1="8"  x2="60" y2="8"  />
<line x1="4" y1="20" x2="32" y2="20" />
<line x1="4" y1="32" x2="12" y2="32" />
<line x1="4" y1="44" x2="32" y2="44" />
<line x1="4" y1="56" x2="60" y2="56" />
</svg>
`
    return `<div class="ca_folder_container">
<div id="ca_folder_container_inner">
<div id="ca_folder_opener">${icon_s}</div>
${content_s}
</div>
</div>` // inner <div> is MANDATORY
  },

  /*
   {% contentFolder "__atfold__", "__intertitle__" %}
   
   __content__
   
   {% endcontentFolder %}
   */
  contentFolder__s: ( content_s, fold_n, intertitle_s, norule_s ) =>
`<div id="ca_fold_${fold_n}" class="ca_fold_content">
<h3 class="ca_folder" onclick="DOMOpenFolder( this );"><span>${intertitle_s}</span></h3>
<div class="ca_fold_content_item">
<div class="ca_fold_xcols${norule_s || ''}">${content_s}</div>
</div></div>`,

  /*
   {% inlineNote %}__content__{% endinlineNote %}
   */
  inlineNote__s: ( content_s ) =>
  `<ins class="ca_note_ins" onclick="this.getElementsByClassName('ca_note_content')[0].classList.toggle('ca_note_open')"><sup></sup><span id="note_1" class="ca_note_content">${content_s}</span></ins>`,


  _test_co__s: ( content_s ) =>
  {
    const content_a = content_s.split( '[//]:#(_test_co)' )
    const content_o = require( 'json5' ).parse( `{${content_a[0].trim()}}` )
    const keys_a = Object.keys( content_o )
    let contentOut_s = `<div id="${content_o.id_n}" class="${content_o.class_s}">${content_a[1]}</div>`
    for( let at = 0; at < keys_a.length; ++at )
    {
      const key_s = keys_a[at]
      contentOut_s = contentOut_s.replace( new RegExp( `\\$\\{content_o.${key_s}\\}`, 'g' ), content_o[key_s])
    }
    return contentOut_s
  }
}

module.exports = config =>
{
  config.addPairedShortcode("articleFolder", ( content_s, svgIcon_s ) => CODES_o.articleFolder__s( content_s, svgIcon_s ) )
  config.addPairedShortcode("contentFolder", ( content_s, fold_n, intertitle_s, norule_s ) => CODES_o.contentFolder__s( content_s, fold_n, intertitle_s, norule_s ) )
  config.addPairedShortcode("inlineNote",    ( content_s, note_n ) => CODES_o.inlineNote__s( content_s, note_n ) )
  config.addPairedShortcode("_test_co",      ( content_s ) => CODES_o._test_co__s( content_s ) )
}
