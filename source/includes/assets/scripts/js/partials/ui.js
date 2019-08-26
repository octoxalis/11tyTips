const UI_events = () =>
{
  //: load
  DOM_loader( '[data--="tips_list"]' )

/**
 * Set the menu element as high as the article element
 * to hide it
 */
  window
    .addEventListener('load',
    () => document.querySelector( '[data--="menu"]' ).style.height = `${document.querySelector( '[data--="article"]' ).offsetHeight}px`)

  //: click
/**
 * Handle menu icon click
 * to show || hide the menu list
 */
  document.querySelector( '[data--="header"]' )
    .addEventListener('click', click_o => 
    {
      const icon_e = click_o.target.closest('svg')
      if ( icon_e === null ) return
      const icon_s = icon_e.dataset['-'].replace( 'header_icon_', '' )
      switch ( icon_s )
      {
        case "menu":
          DOM_rootVar( '--MENU_SHOW', DOM_rootVar__s( '--MENU_SHOW' ) === '1' ? '0' : '1' )
          break;
        case "github":
        case "twitter":
          const links_o =
          {
            github:  `https://github.com/octoxalis/${_ID}`,
            twitter: `https://twitter.com/${_ID}`,
          }
          window
            .open( links_o[icon_s], '_blank')
            .focus()
          break;
      }
    } )
  
/**
 * Handle inline notes sup element click
 * to show/hide the note
 */
  document.querySelector( '[data--="article"]' )
    .addEventListener('click', ( click_o ) =>
      {
        const note_e = click_o.target.closest('ins')
        if ( note_e ) note_e.querySelector( '[data--="note_content"]' ).classList.toggle('note_open')
      } )
  
}
