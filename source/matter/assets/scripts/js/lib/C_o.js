/*
 * COMPONENTS constants for templates
 * Naming scheme: tag[_tag]+__s
 */
module.exports =
{
  HUE_P_n:    218,     //: theme primary color in range [0...359]
  HUE_L_n:    50,      //: theme link color offset from primary color
  HUE_S_n:    -50,     //: theme secondary color offset from primary color
  HUE_I_n:    20,      //: theme important color offset from primary color
  HUE_D_n:    -20,     //: theme decorative color offset from primary color
  HUE_SET_n:  1,       //: let visitor change hue bas setting

  LUM_MODE_n:     1,   //: luminosity mode: 1 (light) || -1 (dark)
  LUM_CONTRAST_n: 40,  //: luminosity contrast in range [30...49]
}
