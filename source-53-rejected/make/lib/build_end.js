/**
 * Ouput tips list to menu_list.html file
 */
module.exports = ( files_a, args_o, list_a ) =>
{
  console.log( `Writing ../site/menu_list.html from template_process.js` )
  require('fs-extra')
    .outputFile( '../site/menu_list.html',
      require( './menu_list.js' )( list_a ),
      err_s => console.log ( err_s || 'Build success!' ) )
  console.log( `${files_a.length} Markdown files have been processed` )
  //... delete worker_thread
}
