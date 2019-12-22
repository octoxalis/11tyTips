//> adjust menu height + position
const menuPosition__v = () =>
{
  const menu_e = document.querySelector( `[data--="menu"]` )
  let position_n = document.querySelector( `[data--="header"]` ).offsetHeight
  position_n += document.querySelector( `[data--="link_page"]` ).offsetHeight
  menu_e.style.transform = `translateY( ${position_n}px)`
  const menu_n = menu_e.offsetHeight
  const article_e = document.querySelector( `[data--="article"]` )
  const article_n = article_e.offsetHeight
  if ( menu_n < article_n ) menu_e.style.height = `${article_n}px`
  else article_e.style.height = `${menu_n}px`
}

//> show/hide posts menu list
//> when menu is vsible comments are retracted
const menu__v = () =>
{
  const show_s = DOM_rootVar__s( '--MENU_SHOW' ) === '1' ? '0' : '1'
  DOM_rootVar__v( '--MENU_SHOW', show_s )
  comments_e = document.querySelector( '.utterances' )
  if ( comments_e !== null ) comments_e.classList.toggle( 'retract' )
  const menu_e =document.querySelector( `[data--="menu"]` )
  if ( show_s === '1' )
  {
    menu_e.classList.remove( 'no_pointer' )
    DOM_scroll__v()
  }
  else menu_e.classList.add( 'no_pointer' )
}
