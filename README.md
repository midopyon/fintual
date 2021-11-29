# profit calculator app!

By [Perla Peralta](mailto:perlap.03@gmail.com)

[midopyon.github.io](http://midopyon.github.io)

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

### Construct a simple Portfolio class that has a collection of Stocks and a "Profit" method that receives 2 ### dates and returns the profit of the Portfolio between those dates. Assume each Stock has a "Price" method that receives a date and returns its price.

- The app waits for the user to pick a start date and an end date. The button will turn enabled.
- When the button is clicked, the app calculates the value of the portfolio between the two dates using the[calculateProfit](src/utils/calculateProfit.js) function

## scope
