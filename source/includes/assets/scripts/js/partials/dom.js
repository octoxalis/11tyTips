const DOM_rootVar__s = ( var_s ) => window.getComputedStyle( document.documentElement ).getPropertyValue( var_s ) || ''

const DOM_rootVar = ( var_s, val_s ) => document.documentElement.style.setProperty( var_s, val_s )

const DOM_loader = ( selector_s ) =>
{
  const iframe_e = document.querySelector( selector_s )
  iframe_e.addEventListener('load',
    () =>
    {
      iframe_e.before( (iframe_e.contentDocument.body||iframe_e.contentDocument).children[0])
      iframe_e.remove()
    } )
}
