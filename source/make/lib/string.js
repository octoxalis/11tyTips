module.exports =
{
  escquote__s: string_s => string_s.replace( /(['"])/g, '\$1' )
}