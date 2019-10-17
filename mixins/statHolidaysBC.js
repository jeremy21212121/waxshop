const nthWeekdayOfMonth = function (n, weekday, date) {
  // make a copy of date param to modify
  const targetDate = new Date(date.getTime())
  const add = (weekday - targetDate.getDay() + 7) % 7 + (n - 1) * 7
  targetDate.setDate(1 + add)
  // handle running on server set to GMT and being sent to a browser at GMT-7/8 by setting time to noon
  // since this is being used in a nuxt project, it may run on the server or the client
  // best practice is to set web server to GMT time zone. Something something, information disclosure.
  // if we generate a JS date object for dateX midnight @ GMT, it will roll over to the previous day in GMT-7/8 timezone
  // if we set the time to noon, it will be the same date if we +/- 8 hours
  targetDate.setHours(12)
  return targetDate
}
const nthWeekdayBefore = function (n, weekday, date) {
  // one day in milliseconds
  const oneDayInMS = 24 * 60 * 60 * 1000
  let trialDate = new Date(date)
  for (let i = 0; i < n; i++) {
    // decrement trialDate by 24 hours
    trialDate = new Date(trialDate.getTime() - oneDayInMS)
    while (trialDate.getDay() !== weekday) {
      // continue decrementing by 24 hours until we find the desired weekday
      trialDate = new Date(trialDate.getTime() - oneDayInMS)
    }
  }
  // set time to noon to prevent date errors between server @ GMT and browser @ GMT-7/8
  trialDate.setHours(12)
  return trialDate
}
// calculate easter sunday date in given year using modified computus alg from SO
function getEasterDate (y) {
  // Instantiate the date object.
  const date = new Date()
  // Set the timestamp to noon. This is done because server is set to GMT but browsers will be at GMT-7/8 in this use case. This way, if the date is generated on the server but fed to the browser, the date will stay the same day.
  date.setHours(12, 0, 0, 0)
  // Set the year.
  date.setFullYear(y)
  // Find the golden number.
  const a = y % 19
  // Choose which version of the algorithm to use based on the given year.
  const b = (y >= 2200 && y <= 2299)
    ? ((11 * a) + 4) % 30
    : ((11 * a) + 5) % 30
  // Determine whether or not to compensate for the previous step.
  const c = ((b === 0) || (b === 1 && a > 10))
    ? (b + 1)
    : b
  // Use c first to find the month: April or March.
  const m = (c >= 1 && c <= 19) ? 3 : 2
  // Then use c to find the full moon after the northward equinox.
  const d = (50 - c) % 31
  // Mark the date of that full moon—the "Paschal" full moon.
  date.setMonth(m, d)
  // Count forward the number of days until the following Sunday (Easter).
  date.setMonth(m, d + (7 - date.getDay()))
  // return Gregorian Easter Sunday
  return date
}

export default {
  methods: {
    BCStatHolidays (year) {
      // all times set to noon on relevant date
      return [
        {
          title: 'New Year\'s Day',
          date: new Date(`January 1 ${year} 12:00:00.000`) // set to noon to handle server set to GMT and browser set to GMT-7/8
        },
        {
          title: 'Family Day',
          date: nthWeekdayOfMonth(3, 1, new Date(`February 1, ${year}`)) // third monday of feb
        },
        {
          title: 'Good Friday',
          date: nthWeekdayBefore(1, 5, getEasterDate(year)) // first friday before easter sunday
        },
        {
          title: 'Victoria Day',
          date: nthWeekdayBefore(1, 1, new Date(`May 25, ${year}`)) // first monday before may 25
        },
        {
          title: 'Canada Day',
          date: new Date(`July 1 ${year} 12:00:00.000`)
        },
        {
          title: 'BC Day',
          date: nthWeekdayOfMonth(1, 1, new Date(`August 1, ${year}`)) // first monday of august
        },
        {
          title: 'Labour Day',
          date: nthWeekdayOfMonth(1, 1, new Date(`September 1, ${year}`)) // first monday in sept
        },
        {
          title: 'Thanksgiving',
          date: nthWeekdayOfMonth(2, 1, new Date(`October 1, ${year}`)) // second monday in oct
        },
        {
          title: 'Remembrance Day',
          date: new Date(`November 11 ${year} 12:00:00.000`)
        },
        {
          title: 'Christmas Day',
          date: new Date(`December 25 ${year} 12:00:00.000`)
        }
      ]
    }
  }
}
