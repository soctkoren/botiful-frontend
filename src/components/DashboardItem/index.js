import React from 'react';
import './styles.css';

const DashboardItem = ({ business, icon }) => {
  return (
    <div className="DashboardItem">
      <div className="ItemName">
        <p className="business">{ business }</p>
        <div className="BusinessIconContainer">
          <img className="BusinessIcon" src={icon} />
        </div>
      </div>
    </div>
  );
}

export default DashboardItem;
