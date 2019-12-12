const { DateTime } = require( "luxon" )

module.exports = date_o => DateTime.fromJSDate( date_o ).toISO({ includeOffset: true, suppressMilliseconds: true })
