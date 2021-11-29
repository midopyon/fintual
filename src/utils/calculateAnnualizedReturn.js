export function calculateAnnualizedReturn(
  startValue,
  endValue,
  yearsBetweenDates
) {
  // To calculate the annualized portfolio return, divide the final value
  // by the initial value, then raise that number by 1/n, where "n" is the
  // number of years you held the investments.
  // Then, subtract 1 and multiply by 100.

  return (Math.pow(endValue / startValue, 1 / yearsBetweenDates) - 1) * 100;
}
