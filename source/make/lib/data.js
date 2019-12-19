/*
 * Build global data access
 * Naming scheme: function__s
 */
const EXPORT_a =    // default exported data
[
  'date',
  'layout',
  'permalink',
  'tags',
  'rank_n',
  'title_s',
  'subtitle_s',
  'abstract_s',
  'author_s',
  'A_o',
]
const MD_DIR_s = './matter/pages/'    //: all Mardown files
const DEPTH_n  = 0                    //: ...are located at the root level of MD_DIR_s
let current_n = 0

module.exports =
{
  current__n: () => current_n,
  current__v: () => ++current_n,

  files_a: require( 'klaw-sync' )( MD_DIR_s, { nodir: true, depthLimit: DEPTH_n } ),

  data__o: ( permalink_s, collection_a ) =>
  {
    //> console.log( permalink_s )
    let export_o = {}
    collection_a.forEach( collection_o =>
      {
        const data_o = collection_o.data
        if ( data_o.permalink === permalink_s )
        {
          if ( data_o.export_a === null ) export_o = data_o    //: get all data!
          else
          {
            const export_a = data_o.export_a || EXPORT_a    //: get declared or default data only
            export_a.forEach( prop_s => export_o[prop_s] = data_o[prop_s] )
          }
        }
      } )    
    return export_o
  },
  
}
