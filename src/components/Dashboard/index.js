import React, { Component } from 'react';
import DashboardItem from '../DashboardItem';
import UIBuilder from '../UIBuilder';
import './styles.css';
import axios from 'axios';

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
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    axios.get('https://bsunter.lib.id/Botiful@dev/api/reviews/').then((res) => {
      this.setState({
        reviews: res.data.reviews
      })
    })
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="DashboardContainer">
          { this.props.isDashboard ?
            <div className="DashboardContents">
              {smallBusinessList.map((business, idx) => {
                return <DashboardItem business={business} icon={icons[idx]} action={this.props.action}/>
              })}
            </div> : <div className="UIContainer"><UIBuilder showReview={this.props.showReview}/></div>
          }
          {
            this.props.isReview ?
            <div className="reviewPage">
              <div className="reviewContainer">
                <h3>Reviews</h3>
                {this.state.reviews.length > 0 ? this.state.reviews.map((item) => {
                  return (
                    <div className="reviewCard">
                      <span>{item.stars}★</span>
                      <p>{item.content}</p>
                    </div>
                  );
                }) : <div></div>}
              </div>
            </div> : <div></div>
          }
        </div>
      </div>
    );
  }
}

export default Dashboard;
