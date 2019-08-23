module.exports =
{
  develop:     false,
  //develop:     true,
  siteUrl:     'https://11tytips.netlify.com/',
  devUrl:      'http://127.0.0.1:5500/',

  distDirs:
  {
    input:      '.',
    output:     '../site',
    includes:   'includes/',
    data:       'data/',
    scripts:    'assets/scripts/',
    styles:     'assets/styles/',
    //images:     'assets/media/images/',
    //videos:     'assets/media/videos/',
  },

  tagDirs:
  {
    posts:      'posts/',
  },

  search:    //: Must be equivalent to SEARCH_o.settings_o (search.js)
  {
    tags:
    [
      'ORD',
      'PER',
      'WEB',
      'LOC',
      'DATE',
    ],
    titles:
    [
      `NOT SPECIFIED`,
      `PERSON NAME`,
      `LOCALISATION`,
      'DATE',
    ],
  },

}
