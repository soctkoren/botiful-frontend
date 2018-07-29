import React, { Component } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDashboard: true,
      isReview: false
    }
    this.toggleDashboardState = this.toggleDashboardState.bind(this);
    this.showReview = this.showReview.bind(this);
  }

  toggleDashboardState() {
    this.setState({
      isDashboard: !this.state.isDashboard,
    })
  }

  showReview() {
    this.setState({
      isReview: true
    })
  }

  render() {
    return (
      <div className="App">
        <Header action={this.toggleDashboardState} isDashboard={this.state.isDashboard}/>
        <Dashboard action={this.toggleDashboardState} isDashboard={this.state.isDashboard} isReview={this.state.isReview} showReview={this.showReview}/>
      </div>
    );
  }
}

export default App;
