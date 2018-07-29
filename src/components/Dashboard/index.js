import React from 'react';
import DashboardItem from '../DashboardItem';
import './styles.css';

const smallBusinessList = [
  'Barber',
  'Cafe',
  'Restaurant',
  'Gym',
  'Bike Shop',
  'Retail Shop',
  'Flower Shop'
]

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="DashboardContainer">
        <div className="DashboardContents">
          {smallBusinessList.map((business) => { return <DashboardItem business={business}/>})}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
