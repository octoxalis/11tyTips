//> create the comments script (utteranc.es)
//> show/hide the comments block
const comments__v = () =>
{
  const comments_e = document.querySelector( '[data--="comments"]' )
  if ( !comments_e.hasChildNodes() )
  {
    const script_e = document.createElement( 'script' )
    script_e.setAttribute( 'data--', 'comments_script' )
    script_e.setAttribute( 'src', 'https://utteranc.es/client.js' )
    script_e.setAttribute( 'repo', '{{ A_o.AUTHOR_s }}/{{ A_o.ID_s.toLowerCase() }}' )
    script_e.setAttribute( 'issue-term', 't' )
    script_e.setAttribute( 'theme', 'photon-dark' )
    script_e.setAttribute( 'crossorigin', 'anonymous' )
    script_e.setAttribute( 'async', true )
    comments_e.appendChild( script_e )
  }
  comments_e.classList.toggle( 'retract' )
}

