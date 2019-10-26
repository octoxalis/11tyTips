const MD_DIR_s = './matter/pages/'    //: all Mardown files
const DEPTH_n  = 0                    //: ...are located at the root level of MD_DIR_s

var files_a = require( 'klaw-sync' )( MD_DIR_s, { nodir: true, depthLimit: DEPTH_n } )
var count_n = files_a ? files_a.length : 0
var at_n    = 0

module.exports =
{
  start__s: ( input_s, args_a ) =>
  {
    let start_s = input_s
    if ( at_n === 0 && files_a ) require( './template_start' )( files_a )
    //...  process start_s
    return start_s
  },

  end__s: ( output_s, args_a ) =>
  {
    ++at_n
    let end_s = output_s
    //... process end_s
    if ( at_n === count_n && files_a ) require( './template_end' )( files_a )
    return end_s
  },

}
