import React from 'react';
import AppSkeleton from '../../components/AppSkeleton';
import MapTimeline from '../MapTimeline';
import Store from '../../Store';

export default () => (
  <Store>
    <AppSkeleton>
      <MapTimeline />
    </AppSkeleton>
  </Store>
);
