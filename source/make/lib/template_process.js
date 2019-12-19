const DATA_o   = require( './data.js' )
const MENU_o   = require( './menu.js' )
const STRING_o = require( './string.js' )

let count_n       = DATA_o.files_a ? DATA_o.files_a.length : 0
let collection_a  = []

const link__v = data_o =>
{
  if ( data_o.tags &&
       data_o.tags.includes( data_o.A_o.COLLECTION_s ) )  //: using data_o to access A_o
  {
    const extension_n = '.html'.length
    const link_o =
    {
      rank_n:     data_o.rank_n,
      link_s:     data_o.permalink.slice( 0, -extension_n ),
      tags:       data_o.tags,
      title_s:    STRING_o.quoteEsc__s( data_o.title_s ),
      subtitle_s: STRING_o.quoteEsc__s( data_o.subtitle_s ),
      abstract_s: STRING_o.quoteEsc__s( data_o.abstract_s ),
      author_s:   STRING_o.quoteEsc__s( data_o.author_s )
    }
    collection_a.push( link_o )
    }
}

const order__v = () => collection_a.sort( ( current_o, other_o ) => current_o.rank_n - other_o.rank_n )

const menu__v = () =>
{
  const menu_s = MENU_o.menu__a( collection_a )
  console.log( `Writing ../site/menu.html from template_process.js` )
  require('fs-extra')
    .outputFile( '../site/menu.html', menu_s,
      err_s => console.log ( err_s || 'Build success!' ) )
}

const buildStart__v = ( data_o ) =>
{
  console.log( `${count_n} Markdown files to process` )
}

const buildEnd__v = ( data_o ) =>
{
  order__v()
  menu__v()
  //... what else?
}

const templateStart__s = ( input_s, data_o ) =>
{
  let start_s = input_s
  link__v( data_o )
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
    if ( DATA_o.current__n() === 0 && DATA_o.files_a ) buildStart__v( data_o )
    let start_s = templateStart__s( input_s, data_o )
    return start_s
  },

  head__s: ( input_s, data_o ) => headEnd__s( input_s, data_o ),

  body__s: ( input_s, data_o ) => bodyEnd__s( input_s, data_o ),

  end__s: ( input_s, data_o ) =>
  {
    DATA_o.current__v()
    let end_s = templateEnd__s( input_s, data_o )
    if ( DATA_o.current__n() === count_n && DATA_o.files_a ) buildEnd__v( data_o )
    return end_s
  },
}
