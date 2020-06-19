import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import AssetMobile from '../../components/AssetMobile';

export default function AssetMobileDashboard() {
  return (
    <div>
      <DashboardLayout/>
      <div className='dashboardMap'>
        <AssetMobile/>
        
      </div>
    </div>
    
  );
}
