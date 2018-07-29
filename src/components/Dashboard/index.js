import React, { Component } from 'react';
import DashboardItem from '../DashboardItem';
import UIBuilder from '../UIBuilder';
import './styles.css';

import barber from '../../assets/barber.svg'
import cafe from '../../assets/cafe.svg'
import res from '../../assets/res.svg'
import gym from '../../assets/gym.svg'
import bike from '../../assets/bike.svg'
import store from '../../assets/store.svg'
import flower from '../../assets/flower.svg'
import farm from '../../assets/farm.svg'

const smallBusinessList = [
  'Barber',
  'Cafe',
  'Restaurant',
  'Gym',
  'Bike Shop',
  'Retail Shop',
  'Flower Shop',
  'Farm'
]

const icons = [
  barber,
  cafe,
  res,
  gym,
  bike,
  store,
  flower,
  farm
];

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      isDashboard: true,
    }

    this.toggleDashboardState = this.toggleDashboardState.bind(this);
  }

  toggleDashboardState() {
    console.log('event')
    this.setState({
      isDashboard: !this.state.isDashboard,
    })
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="DashboardContainer">
          { this.state.isDashboard ?
            <div className="DashboardContents">
              {smallBusinessList.map((business, idx) => {
                return <DashboardItem business={business} icon={icons[idx]} action={this.toggleDashboardState} />
              })}
            </div> : <UIBuilder />
          }
        </div>
      </div>
    );
  }
}

export default Dashboard;
