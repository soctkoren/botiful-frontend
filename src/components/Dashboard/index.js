import React from 'react';
import DashboardItem from '../DashboardItem';
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

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="DashboardContainer">
        <div className="DashboardContents">
          {smallBusinessList.map((business, idx) => { return <DashboardItem business={business} icon={icons[idx]}/>})}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
