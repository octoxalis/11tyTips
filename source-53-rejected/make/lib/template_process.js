const headEnd__s = require( './head_end.js' )
const bodyEnd__s = require( './body_end.js' )

const MD_DIR_s = './matter/pages/'    //: all Mardown files
const DEPTH_n  = 0                    //: ...are located at the root level of MD_DIR_s
const files_a  = require( 'klaw-sync' )( MD_DIR_s, { nodir: true, depthLimit: DEPTH_n } )
var count_n    = files_a ? files_a.length : 0
var at_n       = 0
var menuList_a = []

const matter__o = () =>
{
  const path_s = files_a[at_n].path    ;console.log( `Processing: ${path_s}` )
  const content_s = require( 'fs' )
    .readFileSync( files_a[at_n].path, 'utf8' )      // ;console.log( content_s )
  const data_s = require('gray-matter')( content_s ).data   // ;console.log( data_s )
  const data_o = eval( data_s )   // ;console.log( data_o )
  return data_o
}

const templateStart__s = ( input_s, args_o ) =>
{
  //; console.log( args_o )
  let start_s = input_s
  menuList_a.push( args_o )
  //... what else?
  return start_s
}

const templateEnd__s = ( input_s, args_o ) =>
{
  let end_s = input_s
  //... what else?
  if ( args_o.output__s ) end_s = args_o.output__s( input_s )
  return end_s
}

module.exports =
{
  matter__o: matter__o,

  start__s: ( input_s, args_o ) =>
  {
    if ( at_n === 0 && files_a ) require( './build_start.js' )( files_a, args_o )
    let start_s = templateStart__s( input_s, args_o )
    return start_s
  },

  head__s: ( input_s, args_o ) => require( './head_end.js' )( input_s, args_o ),

  body__s: ( input_s, args_o ) => require( './body_end.js' )( input_s, args_o ),

  end__s: ( input_s, args_o ) =>
  {
    ++at_n
    let end_s = templateEnd__s( input_s, args_o )
    if ( at_n === count_n && files_a ) require( './build_end.js' )( files_a, args_o, menuList_a )
    return end_s
  },

}
