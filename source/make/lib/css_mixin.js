module.exports =
{
  font_face__s: ( face_a, ...args_ ) =>
  {
    if ( !face_a || !args_ ) return ''
    let code_s = ''
    face_a.forEach( face_o =>
      {
        const family_s = face_o.family_s
        const file_s   = face_o.file_s
        const style_s  = face_o.style_s || 'Regular'
        const type_s   = face_o.type_s || 'woff2'
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
