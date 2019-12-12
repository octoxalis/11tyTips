const A_o = require( '../../matter/assets/scripts/js/lib/A_o.js' )

const MD_DIR_s = './matter/pages/'    //: all Mardown files
const DEPTH_n  = 0                    //: ...are located at the root level of MD_DIR_s
const files_a  = require( 'klaw-sync' )( MD_DIR_s, { nodir: true, depthLimit: DEPTH_n } )
var count_n    = files_a ? files_a.length : 0
var at_n       = 0
var menu_a     = []

const buildStart__s = ( input_s, data_o ) =>
{
  console.log( `${files_a.length} Markdown files to process` )
  //...?? create worker_thread
}

const buildEnd__s = ( input_s, data_o ) =>
{
  //console.log( `${files_a.length} Markdown files processed` )
  console.log( `Writing ../site/menu.html from template_process.js` )
  require('fs-extra')
    .outputFile( '../site/menu.html',
      require( './menu.js' )( menu_a ),
      err_s => console.log ( err_s || 'Build success!' ) )
  //...?? delete worker_thread
}

const templateStart__s = ( input_s, data_o ) =>
{
  let start_s = input_s
  if ( data_o.tags && data_o.tags.includes( A_o.COLLECTION_s ) ) menu_a.push( data_o )
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
    if ( at_n === 0 && files_a ) buildStart__s( files_a, data_o )
    let start_s = templateStart__s( input_s, data_o )
    return start_s
  },

  head__s: ( input_s, data_o ) => headEnd__s( input_s, data_o ),

  body__s: ( input_s, data_o ) => bodyEnd__s( input_s, data_o ),

  end__s: ( input_s, data_o ) =>
  {
    ++at_n
    let end_s = templateEnd__s( input_s, data_o )
    if ( at_n === count_n && files_a ) buildEnd__s( files_a, data_o, menu_a )
    return end_s
  },

}
