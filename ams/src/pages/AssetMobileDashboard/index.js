import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import AssetMobile from '../../components/AssetMobile';
// import InputTextAsyncMaterial from '../../components/InputTextAsyncMaterial';

export default function AssetMobileDashboard({assets}) {
  return (
    <div>
      <DashboardLayout/>
      <div className='dashboardMap'>
        {/* <InputTextAsyncMaterial /> */}
        <AssetMobile/>
        
      </div>
    </div>
    
  );
}
