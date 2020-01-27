module.exports = content_s =>
{
  return content_s
    .replace( /<ins data--="note_txt"><sup><\/sup><span data--="note_content">/g, '(' )
    .replace( /<\/span><\/ins>/g, ')' )
    .replace( /&&/g, '&amp;&amp;')
}