import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <form>
                    <input type='text' name='username'></input>
                    <input type='password' name='password'></input>
                    <button id='loginButton' type='submit'>Login</button>
                </form>
            </div>
        );
    }
}

export default App;
