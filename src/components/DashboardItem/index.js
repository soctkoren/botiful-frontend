import React from 'react';
import './styles.css';

const DashboardItem = ({ business }) => {
  return (
    <div className="DashboardItem">
      <div className="ItemName">
        { business }
      </div>
    </div>
  );
}

export default DashboardItem;
