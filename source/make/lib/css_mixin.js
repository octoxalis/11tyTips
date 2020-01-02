module.exports =
{
  font_face__s: ( selector_a, ...args_ ) =>
  {
    if ( !selector_a || !args_ ) return ''
    let code_s = ''
    selector_a.forEach( ( selector_o ) =>
      {
        const family_s = selector_o.family_s
        const file_s   = selector_o.file_s
        const style_s  = selector_o.style_s || 'Regular'
        const type_s   = selector_o.type_s || 'woff2'
        code_s += `
        @font-face
        {
          font-display: swap;
          font-family: '${family_s}';
          font-style: normal;
          font-weight: 400;
          src:
            local('${family_s}'),
            local('${family_s}-${style_s}'),
            url('${args_[0]}assets/fonts/${file_s}.${type_s}')
            format('${type_s}');
        }`
      }
    )
    return code_s
  },
  
}
