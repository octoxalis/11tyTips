const path_s = '../../matter/assets/scripts/js/lib/'
//const A_o = require( `${path_s}A_o.js` )  //: use data_o.A_o instead
const F_o = require( `${path_s}F_o.js` )
const M_o = require( './menu.js' )
const S_o = require( './string.js' )

const extension_n = '.html'.length
let count_n       = F_o.files_a ? F_o.files_a.length : 0
let link_a        = []

const link__v = data_o =>
{
  if ( data_o.tags && data_o.tags.includes( data_o.A_o.COLLECTION_s ) )
  {
    const link_s = data_o.permalink.slice( 0, -extension_n )
    const { rank_n, title_s, subtitle_s, abstract_s, author_s, tags } = data_o
    const link_o =
    {
      rank_n: rank_n,
      link_s: link_s,
      title_s: S_o.escquote__s( title_s ) ,
      subtitle_s: S_o.escquote__s( subtitle_s ) ,
      abstract_s: S_o.escquote__s( abstract_s ) ,
      author_s: S_o.escquote__s( author_s ) ,
      tags: tags,
    }
    link_a.push( link_o )
    }
}

const order__v = () =>
{
  link_a.sort( ( current_o, other_o ) => current_o.rank_n - other_o.rank_n )  //;console.log( link_a )
}

const menu__v = () =>
{
  const menu_s = M_o.menu__a( link_a )
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
    if ( F_o.current__n() === 0 && F_o.files_a ) buildStart__v( data_o )
    let start_s = templateStart__s( input_s, data_o )
    return start_s
  },

  head__s: ( input_s, data_o ) => headEnd__s( input_s, data_o ),

  body__s: ( input_s, data_o ) => bodyEnd__s( input_s, data_o ),

  end__s: ( input_s, data_o ) =>
  {
    F_o.current__v()
    let end_s = templateEnd__s( input_s, data_o )
    if ( F_o.current__n() === count_n && F_o.files_a ) buildEnd__v( data_o )
    return end_s
  },
}
