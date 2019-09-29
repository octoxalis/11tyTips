
  /*
   {% inlineNote %}__content__{% endinlineNote %}
   */
  inlineNote__s: ( content_s ) =>
  `<ins class="ca_note_ins" onclick="this.getElementsByClassName('ca_note_content')[0].classList.toggle('ca_note_open')"><sup></sup><span id="note_1" class="ca_note_content">${content_s}</span></ins>`,
  
  config.addPairedShortcode("inlineNote",        ( content_s, note_n ) => CODES_o.inlineNote__s( content_s, note_n ) )
