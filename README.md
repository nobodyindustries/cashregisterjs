# CashRegister[JS]

## Stack used

- NextJS 14 (using APP directory)
- TailwindCSS
- Qodana
- Vitest
- ESLint

## Installation

Clone the repository

`git clone https://github.com/nobodyindustries/cashregisterjs.git`

Install dependencies

`npm install`

Run tests (optional)

`npm run test`

Start the application

`npm run dev`

## Common maintenance operations

### Add a product

Add an object to the list on `/src/data/products.js` with the following keys:

```
code    Unique code for the product [string]
name    Name for the product [string]
price   Price in cents [number]
```

### Remove a product

Remove it from the list on `/src/data/products.js`

### Add a rule

Create an object on a separate file under the `/src/data/rules` folder with the following properties

```
description         Rule descriptor [string]
amountCount         Returns the amount of items to which the discount applies [(basket) => number]
applies             Return whether the rule applies or not to the current basket [(basket) => boolean]
getAmountInCents    Returns the cent amount of discount (negative) or penalty (positive) that applies to the current basket and product selection [(basket, products) => number | throws Error]
```

Once the object is created on its own file it can be added to the `/src/data/rules.js` file as part of the rule list.
Tests must be written for every new rule.

### Remove a rule

Remove it from the list on `/src/data/rules.js` and then remove the associated file on `/src/data/rules` and the tests.

## Attribution

[Cash Register icon by Icons8](https://icons8.com/icon/3576/cash-register)