const memoize = func =>
{
  const result_o = {}
  return ( ...args ) =>
  {
    const key_s = JSON.stringify( args )
    if ( !result_o[key_s] ) result_o[key_s] = func( ...args )
    return result_o[key_s]
  }
}

const inefficientSquare = memoize(
  num =>
  {
    let total_n = 0
    for ( let i = 0; i < num; i++ )
    {
      for ( let j = 0; j < num; j++ ) total_n++
    }
    return total_n
  } )

const start = new Date()
inefficientSquare(40000)
console.log(new Date() - start)
// 1251

const start2 = new Date()
inefficientSquare(40000)
console.log(new Date() - start2)
// 0