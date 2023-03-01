import React, { Component } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Hero from './components/Hero'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ErrorBoundary>
       <Hero heroName={"Thor"}/>
       </ErrorBoundary>
        <ErrorBoundary>
       <Hero heroName={"Hulk"}/>
       </ErrorBoundary>
        <ErrorBoundary>
       <Hero heroName={"Joker"}/>
       </ErrorBoundary>
      </div>
    )
  }
}

export default App
