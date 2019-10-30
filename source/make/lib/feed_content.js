module.exports = content_s =>
{
  return content_s
    .replace( /<ins data--="inline_note"><sup><\/sup><span data--="note_content">/g, '(' )
    .replace( /<\/span><\/ins>/g, ')' )
    .replace( /&&/g, '&amp;&amp;')
}