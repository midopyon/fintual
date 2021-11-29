export function getYearsBetweenDates(startDate, endDate) {
  var difInTime = endDate.getTime() - startDate.getTime();
  var difInDays = difInTime / (1000 * 3600 * 24);
  return difInDays / 365;
}
