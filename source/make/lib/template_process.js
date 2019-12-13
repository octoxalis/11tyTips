const path_s = '../../matter/assets/scripts/js/lib/'
const A_o = require( `${path_s}A_o.js` )
const F_o = require( `${path_s}F_o.js` )

const files_a = F_o.files__a()
let count_n   = files_a ? files_a.length : 0
let at_n      = 0
let menu_a    = []

const menuRead__v = data_o =>
{
  if ( data_o.tags && data_o.tags.includes( A_o.COLLECTION_s ) ) menu_a.push( data_o )
}

const menuWrite__v = () =>
{
  console.log( `Writing ../site/menu.html from template_process.js` )
  require('fs-extra')
    .outputFile( '../site/menu.html',
      require( './menu.js' )( menu_a ),
      err_s => console.log ( err_s || 'Build success!' ) )
}

const buildStart__v = ( data_o ) =>
{
  console.log( `${files_a.length} Markdown files to process` )
}

const buildEnd__v = ( data_o ) =>
{
  menuWrite__v()
  //... what else?
}

const templateStart__s = ( input_s, data_o ) =>
{
  let start_s = input_s
  menuRead__v( data_o )
  //... what else?
  return start_s
}

const templateEnd__s = ( input_s, data_o ) =>
{
  let end_s = input_s
  //... what else?
  return end_s
}

const headEnd__s = ( input_s, data_o ) =>
{
  let head_s = input_s
  //... what else?
  return head_s
}

const bodyEnd__s = ( input_s, data_o ) =>
{
  let body_s = input_s
  //... what else?
  return body_s
}

module.exports =
{
  start__s: ( input_s, data_o ) =>
  {
    if ( at_n === 0 && files_a ) buildStart__v( data_o )
    let start_s = templateStart__s( input_s, data_o )
    return start_s
  },

  head__s: ( input_s, data_o ) => headEnd__s( input_s, data_o ),

  body__s: ( input_s, data_o ) => bodyEnd__s( input_s, data_o ),

  end__s: ( input_s, data_o ) =>
  {
    ++at_n
    let end_s = templateEnd__s( input_s, data_o )
    if ( at_n === count_n && files_a ) buildEnd__v( data_o )
    return end_s
  },
}
