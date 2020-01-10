# Test Project for Shuffle
Built Reactjs Component for International Telephone Input

#### value and initialValue

Both the props have the same purpose - for setting the initial value of the input programatically.


#### autoFormat

`true` by default. Setting it to false will turn off all auto formatting.

#### defaultCountry

The component selects the country code of a country by default. You can change it by passing the iso2 name of a country. E.g. for United States, set `defaultCountry` to 'us'.

#### onlyCountries

If you don't want all countries to be shown in the dropdown list, you can pass an array of objects representing the countries. 

#### preferredCountries

Preferred countries show up at the top of the list. This prop also accepts an array of country iso2 names.

#### onEnterKeyPress

Function, which is called when user presses the 'enter' key when the input box is in focus.

#### onBlur

Function, which is called when the focus goes away from the input box.

#### onFocus

Function, which is called when the input box gets the focus.

#### disabled

Boolean value. When set to true, the input box is disabled and clicking on flag dropdown does nothing.

#### pattern

String. This is passed on to the input field and works like it should for any other input field.

# Run it

$ npm install
$ npm start

go to your browser and type `http://localhost:3000`

# Contributor
  NeptuneWebDev