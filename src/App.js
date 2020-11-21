import './App.css';
import React from 'react'
import AppRouter from './config/Router'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <AppRouter />
      </div>
    )
  }
}
export default App;