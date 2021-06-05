import React from 'react'
// import { Counter } from './features/counter/Counter'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom'
import Detail from './components/Detail'
import Login from './components/Login'

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/detail/:id' component={Detail} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  )
}

export default App
