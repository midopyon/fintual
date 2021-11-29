# profit calculator app!

By [Perla Peralta](mailto:perlap.03@gmail.com)

[github.com/midopyon](https://github.com/midopyon)

## instructions

1. You can view the live app through its github page! Open [https://midopyon.github.io/fintual/](https://midopyon.github.io/fintual/).

2. Alternatively: clone locally, install dependencies (`yarn install`) and use (`yarn start`). The app will be live at [browser](http://localhost:3000).

## discussion

- I used React and Hooks (useState, useEffect) for the main logics. I used component based design for separating the logic and front-end components.
- The styles were added using Styled-components.
- I used [create-react-app](https://goo.gl/26jfy4) for the main app structure.
- Some library goodies: [react-datepicker](https://www.npmjs.com/package/react-datepicker) for the day pickers and [gh-pages](https://www.npmjs.com/package/gh-pages) for the deployment.
- Took some inspiration from your styles in the [Fintual web](https://fintual.cl/) :3.

## requirements

### Construct a simple Portfolio class that has a collection of Stocks and a "Profit" method that receives 2 dates and returns the profit of the Portfolio between those dates. Assume each Stock has a "Price" method that receives a date and returns its price.

- The app waits for the user to pick a start date and an end date. The button will turn enabled.
- When the button is clicked, the app renders the [ProfitResults](src/components/ProfitResults.js) component, which iterates through the stock array in the Portfolio object.
- In the loop, I call the [getStockPricePerName](src/services/getStockPrice.js) service, which receives a name and a date and returns the price of the stock in that date (this is currently mocked up with json files).
- I then multiply that stock price per the quantity of stocks (shares) the user holds. This value per share in a given date is then added up to the startValue/endValue temporal variables.
- Finally, I calculate the value of the portfolio between the two dates using the [calculateProfit](src/utils/calculateProfit.js) function.

## bonus track

### Make the Profit method return the "annualized return" of the portfolio between the given dates.

- For the annualized return formula we first need to calculate the years between the two selected dates. I used the helper function [getYearsBetweenDates](src/utils/getYearsBetweenDates.js).
- With this value I call the [calculateAnnualizedReturn](src/utils/calculateAnnualizedReturn.js) which uses the formula found [here](https://www.wikihow.com/Calculate-Annualized-Portfolio-Return) (i double checked with a finance-savvy friend, too).
- Please note this is also executed on the Render of the ProfitResult Component.

## scope

some limitations we need to keep in mind:

- If you want to calculate the profit on a new date range, please refresh the page (state cleaner button is a TODO...).
- [getStockPricePerName](src/services/getStockPrice.js) was defined as a service, but uses mocked up prices (randomized in a period of ~1y11m). For an improvement, we could call an API and return a real result using Fetch/Axios.
- Since i used mocked up data, I've also limited the date selectors to only show dates between (01/01/2020 and 28/11/2021).
- The initial values are currently hardcoded in a JSON inside the [MainPage](src/containers/MainPage.js).

Hope you enjoy using this app as much as i did creating it!
