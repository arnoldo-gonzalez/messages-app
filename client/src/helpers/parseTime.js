export default function parseTime (timeStr) {
  let [hours, minutes] = timeStr.split(":")
  let halfOfDay = "am"
  let result = ""

  if (parseInt(minutes, 10) > 59) {
    hours = "" + (parseInt(hours, 10) + 1)
    minutes = "" + (parseInt(minutes, 10) - 60)
  }

  if (minutes.length < 2) minutes = "0" + minutes

  if (parseInt(hours, 10) > 12) {
    halfOfDay = "pm"
    hours = "" + (parseInt(hours, 10) - 12)
  }

  if (hours.length < 2) hours = "0" + hours

  if (halfOfDay === "pm" && hours === "12") halfOfDay = "am"
  else if (halfOfDay === "am" && hours === "12") halfOfDay = "pm"

  return hours + ":" + minutes + halfOfDay
}
