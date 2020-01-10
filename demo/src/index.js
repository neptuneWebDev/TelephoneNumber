import React, { Component } from 'react'
import { render } from 'react-dom'
// import testGenerator from 'generate-ui-tests'

// import ReactTelephoneInput from '../../src/withStyles'
import RTI from '../../src/withStyles'

// const RTI = testGenerator(ReactTelephoneInput)

const Demo = () => {
  return (
    <div>
      <h1>React Telephone Input Demo</h1>
      <h4>Base case</h4>
      <RTI
        defaultCountry="us"
        flagsImagePath={require('../../images/flags.png')}
        initialValue="+13559112121"
        preferredCountries={['us', 'ca', 'zz', 'hk']}
      />
    </div>
  )
}

render(<Demo />, document.querySelector('#demo'))
